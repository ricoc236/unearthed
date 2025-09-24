import express from 'express'
const app = express()
const PORT = process.env.PORT || 3001

import giftsRouter from './routes/gifts.js'
app.use('/public', express.static('public'))
express.static('dist')

app.use('/script', express.static('./public/scripts'))
app.use('/gifts', giftsRouter)
app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})