/*Пускай у вас есть такой объект:

var myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
    "random animal": "Банановая акула"
};

Как одной строкой JavaScript-кода извлечь из этого объекта число 123? 
Проверьте свое решение, запустив его в консоли.*/

var myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
    "random animal": "Банановая акула"
};

console.log(myCrazyObject["some array"][2].number);