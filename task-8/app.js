//создаем массив со словами
let words = [
    "программа",
    "макака",
    "прекрасный",
    "оладушек"
];

//выбираем рандомное слово для угадывания
let word = Math.floor(Math.random() * words.length);

//итоговый массив с ответом
let answerArray = [];
for (let i = 0; i < answerArray.length; i++) {
    answerArray[i] = "_";
};

//оставшиеся буквы
let remainingLetters = word.length;

//программируем игровой цикл
while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    // Основной код
    // Показываем состояние игры
    // Запрашиваем вариант ответа
    // Обновляем answerArray и remainingLetters для каждого
    // вхождения угаданной буквы
}