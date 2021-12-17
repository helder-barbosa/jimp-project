const Jimp = require('jimp')

Jimp.read('avatar-user.png', (err, image) => {
  image
    .cover(50, 100)
    .greyscale()
    .write('avatar-50x100-grey.png')
})