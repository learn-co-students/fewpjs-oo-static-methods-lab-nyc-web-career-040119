class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let title = []
    let wordsArray = string.split(' ')

    for(let i=0; i<wordsArray.length; i++){
      if (i===0){
        title.push(this.capitalize(wordsArray[i]))
      } else {
        if(exceptions.includes(wordsArray[i])){
          title.push(wordsArray[i])
        } else {
          title.push(this.capitalize(wordsArray[i]))
        }
      }
    }
    return title.join(" ")
  }
}
