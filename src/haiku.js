export default class Haiku {
  constructor(line1 = "", line2 = "", line3 = "") {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  returnLineArray(line) {
    let lineArray = [];
    if (line === "") {
      return lineArray;
    } else {
      let newArray = line.split(" ");
      console.log(newArray);
      return newArray;
    }
  }
  
  syllableCount(word="") {
     word = word.toLowerCase();                                     //word.downcase!
     if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
       word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
       word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
       return word.match(/[aeiouy]{1,2}/g).length;
    // return 0;
  }

  countSyllables(lineArray) {
    let lineSyllableCounter = 0;
    for (let i = 0; i < lineArray.length; i++) {
      lineSyllableCounter += this.syllableCount(lineArray[i]);
    }
    return lineSyllableCounter;
  }
}




