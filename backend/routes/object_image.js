const express = require("express");
const db = require("../db.js");

const router = express.Router();
const TABLE = "object_image";
const upload = require("../middlewares/upload.js");

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
      return res.status(404).json({ message: "Object image not found" });
    res.json(result[0]);
  });
});

router.post("/", upload.array("images", 10), (req, res) => {
  const { object_id } = req.body;
  const fileInfos = req.files.map((file) => ({
    object_id: object_id,
    src: file.filename,
  }));

  const sql = `INSERT INTO ${TABLE} (object_id, src) VALUES ?`;
  const values = fileInfos.map((file) => [file.object_id, file.src]);

  db.query(sql, [values], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json({
      message: "Files uploaded and data inserted successfully",
      files: fileInfos,
    });
  });
});

router.put("/:id", (req, res) => {
  const { src } = req.body;
  const sql = `UPDATE ${TABLE} SET src = ? WHERE id = ?;`;
  db.query(sql, [src, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Object image updated successfully" });
  });
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE FROM ${TABLE} WHERE id = ?`;
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Object image deleted successfully" });
  });
});

module.exports = router;
