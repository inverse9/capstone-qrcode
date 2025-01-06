const express = require("express");
const db = require("../db.js");

const router = express.Router();
const TABLE = "scan_history";

router.get("/", (req, res) => {
  const sql = `SELECT * FROM ${TABLE}`;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  const { start_date, end_date, relation } = req.body;
  const objectId = req.params.id;

  if (!start_date || !end_date) {
    return res.status(400).json({
      message:
        "Please provide both start_date and end_date in the request body.",
    });
  }

  if (relation === "true") {
    const sql = `
      SELECT 
        o.id AS id,
        o.nama AS nama
      FROM 
        object o
      JOIN 
        scan_history h ON o.id = h.object_id
      WHERE 
        h.date_time BETWEEN ? AND ? 
        AND o.id = ?;
    `;

    db.query(sql, [start_date, end_date, objectId], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0)
        return res.status(404).json({ message: "Object not found" });

      const responseData = results.map((row) => ({
        id: row.id,
        object_name: row.nama,
      }));

      res.json(responseData);
    });
  } else {
    const sql = `SELECT * FROM ${TABLE} WHERE date_time BETWEEN ? AND ? AND id = ?`;

    db.query(sql, [start_date, end_date, objectId], (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      if (results.length === 0)
        return res.status(404).json({ message: "Scan History not found" });
      res.json(results);
    });
  }
});

router.post("/", (req, res) => {
  const { object_id } = req.body;
  const sql = `INSERT INTO ${TABLE} (object_id) VALUES (?)`;
  db.query(sql, [object_id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, object_id });
  });
});

// Tambahkan Endpoint untuk Persentase Scan
router.get("/scan-percentage", (req, res) => {
  const sql = `
    SELECT 
      o.nama AS object_name, 
      COUNT(h.id) AS scan_count,
      (COUNT(h.id) * 100 / (SELECT COUNT(*) FROM ${TABLE})) AS percentage
    FROM 
      object o
    JOIN 
      ${TABLE} h ON o.id = h.object_id
    GROUP BY 
      o.nama
    ORDER BY 
      scan_count DESC;
  `;

  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }

    const response = results.map((row) => ({
      object_name: row.object_name,
      scan_count: row.scan_count,
      percentage: parseFloat(row.percentage.toFixed(2)), // Format ke 2 desimal
    }));

    res.json(response);
  });
});

module.exports = router;
