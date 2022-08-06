const lyrics = 'Tumi bondhu kala pakhi ami jeno ki bosonto kale bolte parini kala kala sada sada '

const searchString = 'Pakhi';
// const doesExist = lyrics.includes( 'pakhi');
// const doesExist = lyrics.includes( 'pakhi');
const lyricsLowerCase = lyrics.toLowerCase()
const doesExist = lyricsLowerCase.includes(searchString);
console.log(doesExist);

//........................
//indexof

console.log(lyrics.indexOf('kala'));


if (lyrics.indexOf('sadtdta')!== -1) {
    console.log('exists inside the string')
    
}
else{
    console.log('cannot find it');
}

//start with
console.log(lyrics.startsWith('Tumi'))

//endeith
const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
fileName.endsWith('.pdf')