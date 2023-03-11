//Усовершенствуйте генератор дразнилок, чтобы он создавал дразнилки такого типа:
//«У тебя [часть тела] еще более [прилагательное], чем [часть тела животного] у [животное]»

var randomBodyParts = ["ухо", "нос", "голова", "макушка"];
var randomAdjectives = ["унылая", "такая себе", "не очень"];
var randomAnimalParts = ["лапа", "уши", "нос", "усы", "хвост"];
var randomAnimals = ["кот", "собака", "тигр", "игуана", "лев"];

var randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomAnimalPart = randomAnimalParts[Math.floor(Math.random() * randomAnimalParts.length)];
var randomAnimal = randomAnimals[Math.floor(Math.random() * randomAnimals.length)];

var randomInsult = "У тебя " + randomBodyPart + " еще более " + randomAdjective + ", чем " + randomAnimalPart + " у " + randomAnimal;

console.log(randomInsult);