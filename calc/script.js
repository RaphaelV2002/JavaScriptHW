// Определяем переменные элементами из html файла
let result = document.getElementById("result"); 
let history = document.getElementById("history");
let equation = "";


function add(value) {
    // Добавляем к result и equation значение  
    equation += value;
    result.value = equation;
  }

function clear() {
    // Очищаем equation и result 
    equation = "";
    result.value = "";
  }

function calculate() {
    // Считаем правую часть уравнения
    let answer = eval(equation);
    
    // Добавляем уравнение в историю
    history.append(equation + " = " + answer);
    
    // Добавляем перенос строки в историю
    history.appendChild(document.createElement("br"));
    
    // Очищаем equation и result 
    equation = "";
    result.value = "";
  }