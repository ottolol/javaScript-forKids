/*
Напишите функцию areArraysSame, которая принимает два
массива с числами в качестве аргументов. Она должна возвра-
щать true, если эти массивы одинаковые (то есть содержат одни
и те же числа в одном и том же порядке), или false, если мас-
сивы различаются. Убедитесь, что ваша функция работает пра-
вильно, запустив такой код:
*/

function areArraysSame(arg1, arg2) {
    if (arg1.length != arg2.length) {
        return console.log(false);
    }

    for (let i = 0; i < arg1.length; i++) {
        for (let j = 0; j < arg2.length; j++) {
            if (arg1[i] === arg2[j]) {
                return console.log(true);
            }
        }
    }

    return console.log(false);
};

areArraysSame([1, 2, 3], [4, 5, 6]); //false
areArraysSame([1, 2, 3], [1, 2, 3]); //true
areArraysSame([1, 2, 3], [1, 2, 3, 4]); //false