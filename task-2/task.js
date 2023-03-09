//фильм с пометкой 12+

var age = 11;
var accompanied = true;

var canIGoToMovie = function (age) {
    if (age >= 12 || age < 12 && accompanied) {
        console.log("Приятного просмотра!");
    } else {
        console.log("Извинете, он этот фильм не для Вас!");
    }
}

canIGoToMovie(11); //Приятного просмотра!