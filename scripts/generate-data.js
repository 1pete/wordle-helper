const fs = require('fs')
const path = require('path')

const rawData = require('./data.json')

const arrayUnique = (array) => {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index
  }

  return array.filter(onlyUnique)
}

const getTier = (word) => {
  if (/s$/i.test(word)) return 3

  const uniqueChars = arrayUnique(word.split(''))

  if (uniqueChars.length < 4) return 2

  if (uniqueChars.length === 4) return 1

  return 0
}

const data = rawData
  .map((word) => word.toUpperCase())
  .reduce(
    (acc, word) => {
      acc[getTier(word)].push(word)
      return acc
    },
    [[], [], [], []],
  )

fs.writeFileSync(
  path.join(__dirname, '..', 'src', 'data.json'),
  `${JSON.stringify(data, null, 2)}\n`,
)
