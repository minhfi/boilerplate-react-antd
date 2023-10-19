export const getFullName = (firstName?: string, lastName?: string) => {
  if (!firstName && !lastName) {
    return ''
  }

  return [firstName, lastName].join(' ')
}

export const getFirstCharactersOfWords = (firstName?: string, lastName?: string) => {
  if (!firstName && !lastName) {
    return ''
  }

  const words = getFullName(firstName, lastName).split(' ')
  const firstCharacters = words.map((word) => word[0])

  return firstCharacters.join('')
}
