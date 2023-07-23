export default class Haiku {
  constructor(line1 = "", line2 = "", line3 = "") {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  returnLineArray(line){
    let lineArray = [];
    if (line === "") {
      return lineArray;
    } else {
      let newArray = line.split(" ");
      console.log(newArray);
      return newArray;
      }
    }
   }  

   countSyllables(lineArray) {
    let 
    for (let i = 0; i < lineArray.length; i++){

    }
   }
   

  
