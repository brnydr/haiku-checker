export default class Haiku {
  constructor() {
    this.line1 = "";
    this.line2 = "";
    this.line3 = "";
  }

  checkSyllables(line){
    let lineArray = [];
    if (line === "") {
      return lineArray;
    } else {
      let lineArray = line.split();
      return lineArray;
    }
   }  
  }
