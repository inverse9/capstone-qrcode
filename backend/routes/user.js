const express = require("express");
const db = require("../db.js");

const router = express.Router();
const TABLE = "user";

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

router.post("/", (req, res) => {
  const { nama, telp, email, password } = req.body;
  const sql = `INSERT INTO ${TABLE} (nama, telp,email,password) VALUES (?, ?,?, ?)`;
  db.query(sql, [nama, telp, email, password], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: result.insertId, nama, telp, email, password });
  });
});

router.put("/:id", (req, res) => {
  const { nama, telp, email, password } = req.body;
  const sql = `UPDATE ${TABLE} SET nama = ?, telp = ?,email = ?,password = ? WHERE id = ?;`;
  db.query(sql, [nama, telp, email, password, req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "user updated successfully" });
  });
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE FROM ${TABLE} WHERE id = ?`;
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "user deleted successfully" });
  });
});

module.exports = router;
