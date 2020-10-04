export const filterNumbers = (array, largerThan) => {
  const result = array.filter(number => {
    if (number <= largerThan) {
      return true
    }
    return false
  })
  return result
}
