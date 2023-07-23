export default class Haiku {
  constructor(){
    this.line1 = "";
    this.line2 = "";
    this.line3 = "";
  }

  checkSyllables(line){
    if (line === "") {
      return 0
    } else {
      let lineArray = line.split();
      return lineArray.length      
    }
    }  
  }
