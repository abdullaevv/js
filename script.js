let money, time;

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
    saving: true
};

function chooseExpenses() {
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
}

chooseExpenses();

/*let i = 0;

while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ( ( typeof(a) )=== 'string' && ( typeof(a) ) != null && ( typeof(b) ) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");  
    }
    else {
        console.log ("Ошибка");
        i--;
    }
    i++;
}*/
/*do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if ( ( typeof(a) )=== 'string' && ( typeof(a) ) != null && ( typeof(b) ) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");  
    }
    else {
        console.log ("Ошибка");
        i--;
    }
    i++;
}
while(i < 2);*/

function checkSaving() {
    if (appData.saving == true) {
        let save = +prompt("Какова сумма накоплений? "),
            precent = +prompt("Под какой процент? ");

        appData.monthIncome = (save/100/12*precent).toFixed();
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }

}

checkSaving();

function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день состовляет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка")
    
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    
    } else {
        console.log("Произошла ошибка")
    }
}

function chooseOptExpenses() {
    for(let i = 0; i < 3; i++) {

        let questionExpenses = +prompt("Статья необязательных расходов? ");
            appData.optionExpenses[i] = questionExpenses;
            console.log(appData.optionExpenses);
    }
}
chooseOptExpenses();
