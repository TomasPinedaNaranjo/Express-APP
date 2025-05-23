const express = require('express')
const path = require('path')
const app = express()
const port = 80
const appRouter = require('./routes')

app.use(appRouter)
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Servidor Pokenea corriendo en http://localhost:${port}`)
})