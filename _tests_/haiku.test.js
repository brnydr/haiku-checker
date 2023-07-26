import Haiku from './../src/haiku.js';

describe(`Haiku`, () => {

  test(`should correctly create a haiku object`, () => {
    let newHaiku = new Haiku();
    expect(newHaiku.line1).toEqual("");
    expect(newHaiku.line2).toEqual("");
    expect(newHaiku.line3).toEqual("");
  });
  
  test('should return the correct number of words in the line', () => {
    let newHaiku = new Haiku();
    expect(newHaiku.returnLineArray(newHaiku.line1).length).toEqual(0);
  });

  test('should return 3 when three words are entered for a line', () => {
    let newHaiku = new Haiku("three words here");
    let testLength = newHaiku.returnLineArray(newHaiku.line1).length;
    // expect(newHaiku.returnLineArray(newHaiku.line1).length).toEqual(3);
    expect(testLength).toEqual(3);
  }
  )

  test('should return 0 syllable count for line when nothing entered for line', () => {
    let newHaiku = new Haiku();
    let lineArray = newHaiku.returnLineArray(newHaiku.line1);
    expect(newHaiku.countSyllables(lineArray)).toEqual(0);
  })
  
  test('syllable count should return 0 for empty string', () => {
    let newHaiku = new Haiku("car");
    let lineArray = newHaiku.returnLineArray(newHaiku.line1);
    let syllablesInWord = newHaiku.syllableCount(lineArray[0]);
    expect(newHaiku.syllableCount(lineArray[0])).toEqual(1);
  })

  test('syllable count should return 3 for string "robotics"', () => {
    let newHaiku = new Haiku("robotics");
    let lineArray = newHaiku.returnLineArray(newHaiku.line1);
    let syllablesInWord = newHaiku.syllableCount(lineArray[0]);
    expect(newHaiku.syllableCount(lineArray[0])).toEqual(3);
  })

  test('syllable count should return 4 for string "robotics dog"', () => {
    let newHaiku = new Haiku("robotics dog");
    let lineArray = newHaiku.returnLineArray(newHaiku.line1);
    let syllablesInWord = newHaiku.syllableCount(lineArray[0]);
    expect(newHaiku.countSyllables(lineArray)).toEqual(4);
  })
});


