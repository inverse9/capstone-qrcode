const express = require("express");
const db = require("../db.js");

const router = express.Router();
const TABLE = "object";

router.get("/", async (req, res) => {
  try {
    const relation = req.query.relation === "true";
    const userId = req.query.user_id;

    if (relation) {
      const sql = `
          SELECT 
            o.id as object_id,
            o.user_id as user_id,
            o.nama AS object_name,
            o.date_time AS date_time,
            op.id AS property_id,
            op.judul AS property_judul,
            op.isi AS property_isi,
            oi.id AS image_id,
            oi.src AS image_src
          FROM 
            object o
          JOIN 
            object_properties op ON o.id = op.object_id
          left JOIN 
            object_image oi ON o.id = oi.object_id
            ${userId ? `WHERE o.user_id = ?` : ""} 
          ORDER BY 
            o.id;
        `;

      // Execute the query to fetch related data
      db.query(sql, userId ? [userId] : [], (err, results) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }

        // Structure the data into grouped JSON format
        const structuredData = results.reduce((acc, row) => {
          let object = acc.find((obj) => obj.object_name === row.object_name);

          if (!object) {
            object = {
              id: row.object_id,
              user_id: row.user_id,
              object_name: row.object_name,
              date_time: row.date_time,
              properties: [],
              images: [],
            };
            acc.push(object);
          }

          // Add property if not already added
          if (!object.properties.some((prop) => prop.id === row.property_id)) {
            object.properties.push({
              id: row.property_id,
              judul: row.property_judul,
              isi: row.property_isi,
            });
          }

          // Add image if not already added
          if (!object.images.some((img) => img.id === row.image_id)) {
            object.images.push({
              id: row.image_id,
              src: row.image_src,
            });
          }

          return acc;
        }, []);

        // Return the structured JSON
        res.json(structuredData);
      });
    } else {
      // Query to fetch raw data from the table
      const sql = `SELECT * FROM ${TABLE}  ${
        userId ? `WHERE user_id = ?` : ""
      };`;

      // Execute the query
      db.query(sql, userId ? [userId] : [], (err, results) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }

        // Return the raw results as JSON
        res.json(results);
      });
    }
  } catch (error) {
    // Catch any unexpected errors and respond with a 500 status
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id", (req, res) => {
  try {
    const relation = req.query.relation === "true";
    const objectId = req.params.id; // Get `id` from the URL

    if (relation) {
      const sql = `
        SELECT 
          o.id as object_id,
          o.user_id AS user_id,
          o.nama AS object_name,
          o.date_time AS date_time,
          op.id AS property_id,
          op.judul AS property_judul,
          op.isi AS property_isi,
          oi.id AS image_id,
          oi.src AS image_src
        FROM 
          object o
        JOIN 
          object_properties op ON o.id = op.object_id
        JOIN 
          object_image oi ON o.id = oi.object_id
        WHERE o.id = ?
        ORDER BY 
          o.id;
      `;

      // Execute the query to fetch related data
      db.query(sql, [objectId], (err, results) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }

        if (results.length === 0) {
          return res.status(404).json({ error: "Object not found" });
        }

        // Structure the data into a single JSON object
        const structuredData = {
          id: objectId, // Include the object ID
          user_id: results[0].user_id,
          date_time: results[0].date_time,
          object_name: results[0].object_name,
          properties: [],
          images: [],
        };

        results.forEach((row) => {
          // Add property if not already added
          if (
            !structuredData.properties.some(
              (prop) => prop.id === row.property_id
            )
          ) {
            structuredData.properties.push({
              id: row.property_id,
              judul: row.property_judul,
              isi: row.property_isi,
            });
          }

          // Add image if not already added
          if (!structuredData.images.some((img) => img.id === row.image_id)) {
            structuredData.images.push({
              id: row.image_id,
              src: row.image_src,
            });
          }
        });

        // Return the structured JSON object
        res.json(structuredData);
      });
    } else {
      const sql = `SELECT * FROM ${TABLE} WHERE id = ?;`;

      // Execute the query
      db.query(sql, [objectId], (err, results) => {
        if (err) {
          return res.status(500).json({ error: err.message });
        }

        if (results.length === 0) {
          return res.status(404).json({ error: "Object not found" });
        }

        // Return a single object for the given ID
        res.json(results[0]);
      });
    }
  } catch (error) {
    // Catch any unexpected errors and respond with a 500 status
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/", (req, res) => {
  const { nama, user_id } = req.body;
  const sql = `INSERT INTO ${TABLE} (nama, user_id) VALUES (?, ?)`;
  db.query(sql, [nama, user_id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, nama, user_id });
  });
});

router.put("/:id", (req, res) => {
  const { nama } = req.body;
  const sql = `UPDATE ${TABLE} SET nama = ? WHERE id = ?;`;
  db.query(sql, [nama, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Object updated successfully" });
  });
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE FROM ${TABLE} WHERE id = ?`;
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Object deleted successfully" });
  });
});

module.exports = router;
