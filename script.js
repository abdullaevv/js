'use strict';

let money, time;
let whilei = 0;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

let appData = {
    budget: money, 
    expenses: {},
    optionExpenses: {},
    income: [],
    timeData: time,
    saving: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
                b = prompt("Во сколько обойдется?", '');    
                
            if ( ( typeof(a) )=== 'string' && ( typeof(a) ) != null && ( typeof(b) ) != null && a != '' && b != '' && a.length < 50) {
                console.log("done");    
                appData.expenses[a] = b;
        
            } else {
                console.log ("Ошибка");
                i--;
            }
        
            i++;
            
        }
    },
    checkSaving: function() {
        if (appData.saving == true) {
            let save = +prompt("Какова сумма накоплений? "),
                precent = +prompt("Под какой процент? ");
    
            appData.monthIncome = (save/100/12*precent).toFixed();
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день состовляет: " + appData.moneyPerDay);        
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка")
        
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        
        } else {
            console.log("Произошла ошибка")
        }
    },
    chooseOptExpenses: function() {
        for(let i = 0; i < 3; i++) {

            let questionExpenses = +prompt("Статья необязательных расходов? ");
                appData.optionExpenses[i] = questionExpenses;
                console.log(appData.optionExpenses);
        }
    },
    chooseIncome: function() {
        let items = prompt("Ваш дополнительный доход? ", "");

            if ( (typeof(items) != "string") || (typeof(items) == null) || items == "" ) {
                console.log("Ошибка");
            } else {
                appData.income = items.split(", ");
                appData.income.push(prompt("Точно нечего забыл? "));
                appData.income.sort();
            }
        
        appData.income.forEach (function (itemmassive, i) {
            alert ("Способы доп. заработка " + (i+1) + " - " + itemmassive);

        });

    }
};

for (let key in appData){
    console.log("Наши программа включает в себя данные: " + key + " - " + appData[key]);
}


