import {pool} from '../config/database.js'
const getGifts = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM gifts ORDER BY id ASC')
    }catch (err) {
        res.status (500).json({ error: err.message })
        
    }
}