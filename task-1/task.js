//Превратить строку "эЙ, кАК деЛа?" в "Эй, как дела?".

var str = "эЙ, кАК деЛа?";
var firstSimbol = str.slice(0, 1);
firstSimbol = firstSimbol.toUpperCase();

var stringWithoutFirstSimbol = str.slice(1);
stringWithoutFirstSimbol = stringWithoutFirstSimbol.toLowerCase();
str = firstSimbol + stringWithoutFirstSimbol;

console.log(str); //Эй, как дела?


//так же можно сократить код
var firstSimbol = str.slice(0, 1).toUpperCase();
var stringWithoutFirstSimbol = str.slice(1).toLowerCase();
str = firstSimbol + stringWithoutFirstSimbol;

console.log(str); //Эй, как дела?


//решение из книги
var sillyString = "эЙ, кАК деЛа?";
var lowerString = sillyString.toLowerCase();
var firstCharacter = lowerString[0];
var firstCharacterUpper = firstCharacter.toUpperCase();
var restOfString = lowerString.slice(1);
sillyString = firstCharacterUpper + restOfString;
console.log(sillyString); //Эй, как дела?