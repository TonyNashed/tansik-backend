const express = require("express");
const router = express.Router();
const pool = require("../config/db");

router.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({
      status: "success",
      message: "Connected to Supabase!",
      server_time: result.rows[0].now
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to connect to Supabase",
      error: error.message
    });
  }
});

module.exports = router;
