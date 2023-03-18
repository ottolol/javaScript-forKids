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
    numberOfAttempts--;
    // запрашиваем вариант ответа и кладем ответ игрока в переменную guess
    let guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.").toLowerCase();

    if (guess === null) {
        // если игрок нажал Отмена, то программа завершается и мы выходим из игрового цикла
        break;
    } else if (guess.length !== 1) {
        // если игрок введ более, чем одну букву, программа выдаст предупреждение
        alert("Пожалуйста, введите только одну букву.");
    } else {
        // Обновляем состояние игры
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        };
    };
};

if (numberOfAttempts === 0) {
    alert("Увы, Вы не отгадали слово. Попробуйте еще разок!");
} else {
    alert(answerArray.join(" "));
    alert("Отлично! Было загадано слово " + word);
}