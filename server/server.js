import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

import giftsRouter from './routes/gifts.js'

const app = express()
app.use(cors())
const PORT = process.env.PORT || 3001

// __dirname replacement for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// API routes first
app.use('/gifts', giftsRouter)

// Serve static frontend from dist
app.use(express.static(path.join(__dirname, '../client/dist')))

// API root test
app.get('/api', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

// Catch-all → serve React app for React Router
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist/index.html'))
})

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})
