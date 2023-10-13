/* 
#1 Фильтрация строки

Создать переменную со строковым значением. Сформировать переменную которая будет состоять только из ГЛАСНЫХ букв этой строки. Результат вывести в консоль.*/

const taskName = "Фильтрация строки";
const vowels = "аеёиоуыэюя";

function getVowels(baseStr, allVowels) {
    let result = '';

    for (let i = 0; i < baseStr.length; i++) {
        if (allVowels.includes(baseStr[i].toLowerCase())) {
            result += baseStr[i];
        }
    }

    return result;
}
console.log("Задание 1. Гласные из строки: " + taskName);
console.log(getVowels(taskName, vowels));

/*
#2 Выборка объекта

Сформировать произвольный массив объектов, описывающий, например, работников компании, 
в каждом объекте должны содержаться сл. свойства (поля) - name (содержащее имя сотрудника) и поле salary (содержащее зарплату сотрудника от 0 до 3000). 
Сформировать функцию в которую будет передан в качестве аргумента этот массив и возвращен из функции массив содержащий имена всех сотрудников, 
чья зарплата превышает 1000.*/


const workers = [
    {
        name: "Алексей",
        salary: 2000
    },
    {
        name: "Иван",
        salary: 900
    },
    {
        name: "Евгений",
        salary: 1050
    },
    {
        name: "Анна",
        salary: 700
    },
    {
        name: "Ольга",
        salary: 1000
    },
    {
        name: "Надежда",
        salary: 2900
    },
    {
        name: "Олег",
        salary: 100
    }
];

function getWorthyWorkers(workersArr, limit) {
    let highlyPaidWorkers = [];

    for (let i = 0; i < workersArr.length; i++) {
        if (workersArr[i].salary > limit) {
            highlyPaidWorkers.push(workersArr[i].name);
        }
    }

    return highlyPaidWorkers;
}

const limit = 1000;
let highlyPaidWorkers = getWorthyWorkers(workers, limit);
console.log("Задание 2. Имена всех сотрудников, чья зарплата превышает 1000:");
console.log(highlyPaidWorkers);



/*
#3 Анализ строки

Написать функцию которая будет принимать в качестве аргумента строку имитирующую адрес до файла. 
Функция должна возвращать true или false в зависимости от того есть у этого файла расширение html или нет.
*/


function isHtml(path) {
    let comparedStr = ".html";
    let fileExt = path.slice(-5);
    let result = false;

    if (fileExt === comparedStr) {
        result = true;
    } else {
        result = false;
    }

    return result;
}

const path = './contacts/index.html';
console.log("Задание 3. Содержит ли путь ./contacts/index.html документ с расширением .html?");
console.log(isHtml(path));

const path2 = './style/style.css';
console.log("Содержит ли путь ./style/style.css документ с расширением .html?");
console.log(isHtml(path2));
