class Formatter {
  static capitalize(string){
    let capStringValue = string[0];
    capStringValue = capStringValue.toUpperCase();
    let finalValue = capStringValue + string.slice(1, string.length)
    return finalValue
  }

  static sanitize(string){
    let newString = string;
    return newString.replace( /[^A-Za-z0-9 '-]/g, '' )

  }

  static titleize(sentence) {
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let words = sentence.split(" ")
    let wordsTitleized = []

    let firstWord;
    firstWord = words.shift()
    let capLetter = firstWord[0]
    let capWord = capLetter.toUpperCase() + firstWord.slice(1, firstWord.length)
    words.unshift(capWord)

    words.forEach(word => {
      if (exceptions.includes(word)) {
        return wordsTitleized.push(word)
      } else {
        let capLetter = word[0]
        let capWord = capLetter.toUpperCase() + word.slice(1, word.length)
        return wordsTitleized.push(capWord)
      }
    })

    return wordsTitleized.join(" ")

  }
}
