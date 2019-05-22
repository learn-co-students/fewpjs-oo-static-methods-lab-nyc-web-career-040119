class Formatter {
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9- ']+/g, '')
  }

  static titleize(string){
    const doNotCapitalize = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    const stringArray = string.split(" ")
    let capitalizeStringArray = []

    for (let string of stringArray){
      capitalizeStringArray.push(string)
    }

    let finalArray = []

    for (let word of capitalizeStringArray){
      // debugger
    	if(doNotCapitalize.includes(word)){
    		finalArray.push(word.toLowerCase())
      } else {
        finalArray.push(Formatter.capitalize(word))
      }
    }
    return Formatter.capitalize(finalArray.join(" "))
  }
}
