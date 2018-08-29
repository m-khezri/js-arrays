const cats = ['fluffy', 'spike', 'killer'];
console.log('1st cat', cats[0]);

//spliting strings
const favoriteAnimal = 'cow,bear,dog,cat';
const favoriteAnimalArray =  favoriteAnimal.split(','); //['c', '0', 'w']
console.log('favorite Animal Array', favoriteAnimalArray);

//joining strings
const numArray = [1, 2, 3, 4, 5];
const newNum = numArray.join('');
console.log('newNum', newNum);

//mini challenge
const palchecker = (word) => {
const wordArray = word.split('');
const reverseArray = wordArray.reverse();

if (wordArray === reverseArray){
    console.log(`${word} Is a plaindrome`);
} else {
    console.log(`${word} Not a plaindrome`);
}
};

palchecker('mom'); //yes
palchecker('monkeybutt'); //no
palchecker('racecar'); //yes
