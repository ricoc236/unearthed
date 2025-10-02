import { pool } from '../config/database.js'

const getGifts = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM gifts ORDER BY id ASC')
    res.status(200).json(results.rows)  
  } catch (err) {
    console.error("Error fetching gifts:", err)
    res.status(500).json({ error: err.message })
  }
}

export default { getGifts }
