const friendship = []
const push = (name, url, image = '', description = '') =>
  friendship.push({ name, url, image, description })

push('Discreater', 'https://discreater.github.io/', 'discreater.png')

module.exports = friendship
