// Выписываем основные элементы
let boy = document.querySelector('#gender-male');   //  мужской пол
let gitl = document.querySelector('#gender-female'); //  женский пол
let myInputs = document.querySelectorAll("input"); // все кнопки

// Возраст, рост, вес
let age = document.querySelector('#age');
let height = document.querySelector('#height');
let weight = document.querySelector('#weight');

// Поддержание веса
let boy_weight = (10 * weight) + (6, 25 * height) - (5 * age) + 5;
let girl_weight = (10 * weight) + (6, 25 * height) - (5 * age) - 161;

// Коэффициенты активности
// let min_activity = 1.2;
// let low_activity = 1.375;
// let medium_activity = 1.55;
// let high_activity = 1.725;
// let maximal_activity = 1.9;

// Набор и сброс веса ---

// Выписываем активность
let min = document.querySelector('#activity-minimal');
let low = document.querySelector('#activity-low');
let medium = document.querySelector('#activity-medium');
let high = document.querySelector('#activity-high');
let maximal = document.querySelector('#activity-maximal');

// let massivactive = [min, low, medium, high, maximal];

let buttonresult = document.querySelector('.button'); // кнопка расчёта
let buttonclear = document.querySelector('.form__reset-button'); // кнопка очистки
let kartochkaresult = document.querySelector('.counter__result'); // карточка с расчётами

// Поля таблички
let norma = document.querySelector('#calories-norm');
let sbros_vesa = document.querySelector('#calories-minimal');
let nabor_vesa = document.querySelector('#calories-maximal');

// ------------------------------------------------------------------------- Блок функций
function checkInputs() {
    let inputs = document.querySelectorAll("input"); // Все поля
    let isDisabled = false;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            isDisabled = true;
            break;
        }
    }
    buttonresult.disabled = isDisabled;
}

// Функция, которая проверяет, заполнено ли хотя бы одно поле - кнопка очистки
function checkInputsClear() {
    let inputs = document.querySelectorAll("input"); // Все поля
    let isDisabled = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value !== "") {
            isDisabled = false;
            break;
        }
    }
    buttonclear.disabled = isDisabled;
}

// Функция, которая проверяет, заполнено ли хотя бы одно поля
function isFieldsFilled() {
    return weight.value || height.value || age.value;
    }

// Функция, которая очищает поля и скрывает блок с информацией о калориях
function clearFields() {
    weight.value = '';
    weight.placeholder = '0';
    height.value = '';
    height.placeholder = '0';
    age.value = '';
    age.placeholder = '0';
    boy.checked = true;
    min.checked = true;
}

function calculateCalories(gender, weight, height, age, active) {
    let bmr;
    if (gender === "male") {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    // alert("m") 
    // norma.textContent = bmr;
    } 
    else {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    // alert("z")
    // norma.textContent = bmr;
    }
   
    
        let calories;
    switch(active) {

    case "min":
    calories = bmr * 1.2;
    // alert('a1');
    break;

    case "low":
    calories = bmr * 1.375;
    // alert('a2');
    break;   

    case "medium":
    calories = bmr * 1.55;
    // alert('a3');
    break;

    case "high":
    calories = bmr * 1.725;
    // alert('a4');
    break;

    case "max":
    calories = bmr * 1.9;
    // alert('a5');
    break;

    default:
    calories = bmr;
    break;
    }
    

     return norma.textContent = Math.round(calories), sbros_vesa.textContent = Math.round(calories) - Math.round(calories * 0.15), nabor_vesa.textContent = Math.round(calories) + Math.round(calories * 0.15);
    }
    
    
    
 
// ------------------------------------------------------------------------- Блок функций


// ------------------------------------------------------------------------- Блок циклов
// Вызов checkInputs для каждого события ввода onChange(input)
for (let i = 0; i < myInputs.length; i++) {
    myInputs[i].addEventListener("input", checkInputs);
}

// Очистка полей калькулятора
for (let i = 0; i < myInputs.length; i++) {
    myInputs[i].addEventListener("input", checkInputsClear);
}
// ------------------------------------------------------------------------- Блок циклов


// ------------------------------------------------------------------------- Блок обработчиков
// Обработчик клика на кнопку расчёта
buttonresult.addEventListener('click', function () {
    calculateCalories(document.querySelector("input[name='gender']:checked").value, weight.value, height.value, age.value, document.querySelector("input[name='activity']:checked").value)
    kartochkaresult.classList.remove("counter__result--hidden");
    
});

// Обработчик клика на кнопку сброса
buttonclear.addEventListener('click', function() {
kartochkaresult.classList.add("counter__result--hidden");
if (isFieldsFilled()) {
clearFields();
}
// buttonclear.setAttribute('disabled');
});
// ------------------------------------------------------------------------- Блок обработчиков