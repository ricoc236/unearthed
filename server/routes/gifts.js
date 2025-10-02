import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import GiftsController from '../controllers/gifts.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router();

// Get all gifts
router.get('/', GiftsController.getGifts)

// Get gift by ID
router.get('/:giftId', async (req, res) => {
  try {
    const id = parseInt(req.params.giftId, 10)
    const results = await pool.query('SELECT * FROM gifts WHERE id = $1', [id])

    if (results.rows.length === 0) {
      return res.status(404).json({ error: "Gift not found" })
    }

    res.json(results.rows[0])
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
})

export default router
