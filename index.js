const Jimp = require('jimp')

const empresas = [
  { name: 'Empresa A', phone: '222-222' },
  { name: 'Empresa B', phone: '333-333' },
  { name: 'Empresa C', phone: '444-444' },
  { name: 'Empresa D', phone: '555-555' }
]

const genImage = async (text) => {
  const image = await new Jimp(100, 50)
  const font = await Jimp.loadFont(Jimp.FONT_SANS_14_BLACK)
  image.print(font, 0, 0, text)
  return image
}

const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('index', { empresas }))
app.get('/image/:indice', async (req, res) => {
  const image = await genImage(empresas[req.params.indice].phone)
  image.getBuffer(Jimp.MIME_PNG, (err, data) => {
    res.header('Content-type', 'image/png')
    res.send(data)
  })
})

app.listen(3000, () => console.log('Listening...'))