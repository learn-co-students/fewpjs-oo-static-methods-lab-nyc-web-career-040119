class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]/g, '')
  }

  static titleize(str) {
    const titleExceptionWords = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the']

    str = str.split(' ')

    for (const i in str) {
      if (i === "0" || !titleExceptionWords.includes(str[i])) {
        str[i] = Formatter.capitalize(str[i])
      }
    }
    return str.join(' ')
  }
}

Formatter.titleize("a tale of two cities")
