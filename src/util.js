export const arrayUnique = (array) => {
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index
  }

  return array.filter(onlyUnique)
}

export const filterResult = (data, exclude, include) => {
  let result = data

  if (exclude.length) {
    result = result.filter(
      (word) => !exclude.some((char) => word.includes(char)),
    )
  }

  if (include.length) {
    result = result.filter((word) =>
      include.every((char) => word.includes(char)),
    )
  }

  return result
}
