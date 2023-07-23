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

  test('should return syllable count for line', () => {
    let newHaiku = new Haiku();
    let lineArray = newHaiku.returnLineArray(newHaiku.line1);
    expect(newHaiku.countSyllables(lineArray)).toEqual(0);
  })
});


