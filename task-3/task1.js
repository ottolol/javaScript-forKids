var randomBodyParts = ["ухо", "нос", "голова", "макушка"];
var randomAdjectives = ["унылая", "такая себе", "не очень"];
var randomWords = ["стол", "стул", "мышка", "клавиатура", "монитор"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

var randomInsult = "У тебя " + randomBodyPart + " словно " + randomAdjective + " " + randomWord + "!!!";

console.log(randomInsult);