const button = document.querySelector("#check");
const slider = document.querySelector(".toggle-slider");
const body = document.querySelector("body");
const calc = document.querySelector(".calc");
const theme = document.querySelector(".theme");
const themeBtn = document.querySelector(".theme-btn");
const toggleContainer = document.querySelector(".toggle-container");
const toggleSlider = document.querySelector(".toggle-slider");
const displayContainer = document.querySelector("#display");
const calculator = document.querySelector(".calculator");
const calculatorInputs = document.querySelectorAll(".calculator input");
const del = document.querySelector(".del");
const reset = document.querySelector(".reset");
const equal = document.querySelector(".equal");

let click = 0;
// console.log(calculatorInput);

button.addEventListener("click", function () {
    click++;
    if (click === 1) {
        slider.classList.add('toggle-i');
        body.style.backgroundColor = 'hsl(0, 0%, 90%)';
        calc.style.color = 'hsl(60, 10%, 19%)';
        theme.style.color = 'hsl(60, 10%, 19%)';
        themeBtn.style.color = 'hsl(60, 10%, 19%)';
        toggleContainer.style.backgroundColor = 'hsl(0, 5%, 81%)';
        toggleSlider.style.backgroundColor = 'hsl(25, 98%, 40%)';
        displayContainer.style.backgroundColor = 'hsl(0, 0%, 93%)';
        displayContainer.style.color = 'hsl(60, 10%, 19%)';
        calculator.style.backgroundColor = 'hsl(0, 5%, 81%)';
        del.style.backgroundColor = 'hsl(185, 42%, 37%)';
        del.style.boxShadow = '0px 2px 2px hsl(185, 58%, 25%)';
        reset.style.backgroundColor = 'hsl(185, 42%, 37%)';
        reset.style.boxShadow = '0px 2px 2px hsl(185, 58%, 25%)';
        equal.style.backgroundColor = 'hsl(25, 98%, 40%)';
        equal.style.boxShadow = '0px 2px 2px hsl(25, 99%, 27%)';
    } else if (click === 2) {
        slider.classList.remove('toggle-i');
        slider.classList.add('toggle-ii');
        body.style.backgroundColor = 'hsl(268, 75%, 9%)';
        calc.style.color = 'hsl(52, 100%, 62%)';
        theme.style.color = 'hsl(52, 100%, 62%)';
        themeBtn.style.color = 'hsl(52, 100%, 62%)';
        toggleContainer.style.backgroundColor = 'hsl(268, 71%, 12%)';
        toggleSlider.style.backgroundColor = 'hsl(176, 100%, 44%)';
        displayContainer.style.backgroundColor = 'hsl(268, 71%, 12%)';
        displayContainer.style.color = 'hsl(52, 100%, 62%)';
        calculator.style.backgroundColor = 'hsl(268, 71%, 12%)';
        calculatorInputs.forEach(calculatorInput => {
            calculatorInput.style.backgroundColor = 'hsl(268, 47%, 21%)';
            calculatorInput.style.boxShadow = '0px 2px 2px hsl(290, 70%, 36%)';
            calculatorInput.style.color = 'hsl(52, 100%, 62%)';
        });
        del.style.backgroundColor = 'hsl(281, 89%, 26%)';
        del.style.boxShadow = '0px 2px 2px hsl(285, 91%, 52%)';
        del.style.color = 'white';
        reset.style.backgroundColor = 'hsl(281, 89%, 26%)';
        reset.style.boxShadow = '0px 2px 2px hsl(285, 91%, 52%)';
        reset.style.color = 'white';
        equal.style.backgroundColor = 'hsl(176, 100%, 44%)';
        equal.style.boxShadow = '0px 2px 2px hsl(177, 92%, 70%)';
        equal.style.color = 'hsl(198, 20%, 13%)';
    }
});

