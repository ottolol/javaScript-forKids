function pickWord() {
    // Возвращает случайно выбранное слово
    let words = [
        "программа",
        "школа",
        "институт",
        "работа",
        "музыка",
        "кино"
    ];

    return words[Math.floor(Math.random() * words.length)];
};

function setupAnswerArray(word) {
    // Возвращает итоговый массив для заданного слова word
    let answerArray = [];
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    };

    return answerArray;
};
function showPlayerProgress(answerArray) {
    // С помощью alert отображает текущее состояние игры\
    alert(answerArray.join(" "));
};
function getGuess() {
    // Запрашивает ответ игрока с помощью prompt
    return prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
};
function updateGameState(guess, word, answerArray) {
    // Обновляет answerArray согласно ответу игрока (guess)
    // возвращает число, обозначающее, сколько раз буква guess
    // встречается в слове, чтобы можно было обновить значение
    // remainingLetters
    let appearances = 0;
    for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
            answerArray[j] = guess;
            appearances++;
        }
    }

    return appearances;
};
function showAnswerAndCongratulatePlayer(answerArray) {
    // С помощью alert показывает игроку отгаданное слово
    showPlayerProgress(answerArray);

    // и поздравляет его с победой
    alert("Отлично! Было загадано слово " + answerArray.join(""));
};

// word: загаданное слово
let word = pickWord();

// answerArray: итоговый массив
let answerArray = setupAnswerArray(word);

// remainingLetters: сколько букв осталось угадать
let remainingLetters = word.length;

// количество попыток
let numberOfAttempts = remainingLetters * 2;

while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    // guess: ответ игрока
    let guess = getGuess();
    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Пожалуйста, введите одиночную букву.");
    } else {
        // correctGuesses: количество открытых букв
        let correctGuesses = updateGameState(guess, word, answerArray);
        remainingLetters -= correctGuesses;
    }
};

showAnswerAndCongratulatePlayer(answerArray);