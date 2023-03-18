// создаем массив со словами
let words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек",
    "картошка",
    "помидор",
    "огурец",
    "школа",
    "институт",
    "работа",
    "музыка",
    "кино"
];

// выбираем рандомное слово для угадывания
let word = words[Math.floor(Math.random() * words.length)];

// создаем итоговый массив
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
};

// оставшиеся буквы
let remainingLetters = word.length;

// количество попыток
let numberOfAttempts = remainingLetters * 2;

// программируем игровой цикл
while (remainingLetters > 0 && numberOfAttempts > 0) {
    alert(answerArray.join(" "));
    
    // запрашиваем вариант ответа и кладем ответ игрока в переменную guess
    let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");

    if (guess === null) {
        // если игрок нажал Отмена, то программа завершается и мы выходим из игрового цикла
        break;
    } else if (guess.length !== 1) {
        // если игрок введ более, чем одну букву, программа выдаст предупреждение
        alert("Пожалуйста, введите только одну букву.");
    } else {
        numberOfAttempts--;
        guess = guess.toLowerCase();
        // Обновляем состояние игры
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess && answerArray[j] === "_") {
                answerArray[j] = guess;
                remainingLetters--;
                console.log(remainingLetters);
            }
        };
    };
};

alert(answerArray.join(" "));

if (numberOfAttempts === 0) {
    alert("Увы, Вы не отгадали слово. Было загадано слово " + word);
} else {
    alert("Отлично! Было загадано слово " + word);
}