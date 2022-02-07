export const arrayUnique = (array) => {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index
  }

  return array.filter(onlyUnique)
}

export const filterResult = (data, exclude, include) => {
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

    return filtered
  })

  return result
}
