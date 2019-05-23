class Formatter {

  static capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  static sanitize(s) {
    return s.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(s) {
    let str = this.capitalize(s)
    let arr = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    return str.split(" ").map(w=>{
      if (!arr.includes(w)) {
        return w.charAt(0).toUpperCase() + w.slice(1)
      } else {
        return w
      }
    }).join(" ")
  }

}
