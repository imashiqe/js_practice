const lyrics = 'Tumi bondhu kala pakhi ami jeno ki bosonto kale bolte parini kala kala sada sada ';
const parts = lyrics.split(' ')
const sentences = lyrics.split('.')
const chars = lyrics.split('');
// console.log(parts);
// console.log(sentences);
// console.log(chars);

const partial = lyrics.slice(5, 8);
const partial2 = lyrics.substring(5, 8);
// console.log(partial);
console.log(partial2);

const linse = [
    'Tumi bondhu kala pakhi ami', 
   ' jeno ki bosonto kale',
    'bolte parini kala kala sada sada' 
];

const newSong = linse.join(':')
console.log(newSong);
