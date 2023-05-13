// Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’
// 


var input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
var resultArray = [];

for(let i = 0; i < input.length; i++){
  let phraseLetter = input[i];
  // console.log(`Input letter: ${phraseLetter}, at index ${i}`);
  for(let j = 0; j < vowels.length; j++){
        let vowel = vowels[j];
        // console.log(`Letter '${phraseLetter}' at index '${i}' in Outer array/phrase.`);
        // console.log(`Index '${j}' of vowel '${vowel}' in Inner vowel array.`);
        if(phraseLetter === vowel){
        // console.log(`Outer Array letter: '${phraseLetter}' at index ${i}, matches Inner Array vowel '${vowel}' at  index '${j}'`);
           resultArray.push(vowel);
           console.log(resultArray);
        }
    }
}


