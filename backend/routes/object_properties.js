const express = require("express");
const db = require("../db.js");

const router = express.Router();
const TABLE = "object_properties";

router.get("/", (req, res) => {
  const sql = `SELECT * FROM ${TABLE}`;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

router.get("/:id", (req, res) => {
  const sql = `SELECT * FROM ${TABLE} WHERE id = ?`;
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0)
      return res.status(404).json({ message: "Object properties not found" });
    res.json(result[0]);
  });
});

// router.post("/", (req, res) => {
//   const { object_id, judul, isi } = req.body;
//   const sql = `INSERT INTO ${TABLE} (object_id, judul,isi) VALUES (?, ?, ?)`;
//   db.query(sql, [object_id, judul, isi], (err, result) => {
//     if (err) return res.status(500).json({ error: err.message });
//     res.json({ id: result.insertId, object_id, judul, isi });
//   });
// });

router.post("/", (req, res) => {
  const components = req.body;
  if (!Array.isArray(components) || components.length === 0) {
    return res.status(400).json({ error: "Invalid data" });
  }

  const values = components.map((component) => [
    component.object_id,
    component.judul,
    component.isi,
  ]);

  const sql = `INSERT INTO ${TABLE} (object_id, judul, isi) VALUES ?`;

  db.query(sql, [values], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }
    res.json({
      insertedCount: result.affectedRows,
      components: result.insertId,
    });
  });
});

router.put("/:id", (req, res) => {
  const { judul, isi } = req.body;
  const sql = `UPDATE ${TABLE} SET judul = ?, isi= ? WHERE id = ?;`;
  db.query(sql, [judul, isi, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Object properties updated successfully" });
  });
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE FROM ${TABLE} WHERE id = ?`;
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Object properties deleted successfully" });
  });
});

module.exports = router;
