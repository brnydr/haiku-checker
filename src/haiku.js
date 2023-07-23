export default class Haiku {
  constructor() {
    this.line1 = "";
    this.line2 = "";
    this.line3 = "";
  }

  returnLineArray(line){
    let lineArray = [];
    if (line === "") {
      return lineArray;
    } else {
      let lineArray = line.split();
      return lineArray;
    }
   }  

   countSyllables(lineArray) {
    // for (let i = 0; i < lineArray.length; i++){

    // }

   }

  }
