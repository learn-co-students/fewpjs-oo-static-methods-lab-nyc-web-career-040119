class Formatter {
  static capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-' ]/g, '')
  }

  static titleize(str) {
    const titleExceptionWords = ['a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from', 'the']

    // str = str.split(' ')
    //
    // for (const i in str) {
    return str.split(' ').map((word, i) => {
      if (i === 0 || !titleExceptionWords.includes(word)) {
        return word = Formatter.capitalize(word)
      } else {
        return word
      }
    }).join(' ')
    // }
    // return str.join(' ')
  }
}

Formatter.titleize("a tale of two cities")
