class Formatter {

  static capitalize(string) {
    let upperCaseFirstLetter = string.charAt(0).toUpperCase()

    let restOfString = string.slice(1)

    return upperCaseFirstLetter + restOfString
  }


  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = [];
    //splits string into array of words
    let arrayOfWords = string.split(" ")
    //loop
    for (let n = 0; n < arrayOfWords.length; n++) {
      // capitalize the first letter
      if (n == 0) {
        result.push(this.capitalize(arrayOfWords[n]))
      } else {
        //
        if (exceptions.includes(arrayOfWords[n])) {
          result.push(arrayOfWords[n])
        } else {
          result.push(this.capitalize(arrayOfWords[n]))
        }
      }

    }
    return result.join(" ");
  }



}