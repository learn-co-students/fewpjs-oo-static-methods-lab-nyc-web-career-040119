class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }
  // game of throne the last season
  static titleize(string){
    let exception = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let titleize = []

    // ["game", "of", "throne", "the", "last", "season"]
    let splitted = string.split(" ")

    for(let i = 0; i < splitted.length; i++){
      if (i === 0) {
        titleize.push(this.capitalize(splitted[i]))
      } else {
        if(exception.includes(splitted[i])){
          titleize.push(splitted[i])
        } else {
          titleize.push(this.capitalize(splitted[i]))
        }
      }
    }
    return titleize.join(" ");
  }
}
