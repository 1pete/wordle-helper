export const arrayUnique = (array) => {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index
  }

  return array.filter(onlyUnique)
}

export const filterResult = (data, exclude, include, matches) => {
  let result = data.map((dataSet) => {
    let filtered = dataSet

    if (exclude.length) {
      filtered = filtered.filter(
        (word) => !exclude.some((char) => word.includes(char)),
      )
    }

    if (include.length) {
      filtered = filtered.filter((word) =>
        include.every((char) => word.includes(char)),
      )
    }

    matches.forEach((char, i) => {
      if (!char) return

      filtered = filtered.filter((word) => word[i] === char)
    })

    return filtered
  })

  return result
}
