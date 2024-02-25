const input = document.querySelector("input"),
      guess = document.querySelector(".guess"),
      checkButton = document.querySelector("button"),
      remainChances = document.querySelector(".chances");

input.focus();
let randomNum = Math.floor(Math.random() * 100);
let chance = 10;

checkButton.addEventListener("click", () =>{
    chance--;
    let inputValue = input.value;
    if(inputValue == randomNum){
        [guess.textContent, input.disabled] = ["Что ж, ты победил! Но в следующий раз я этого не допущу!", true];
        [checkButton.textContent, guess.style.color] = ["Переиграть", "#f5ff00"];
    } else if(inputValue < randomNum && inputValue > 0){
        [guess.textContent, remainChances.textContent] = ["Я ожидал от тебя большего, твоя догадка слишком низка!", chance];
    }else if(inputValue > randomNum && inputValue < 100){
        [guess.textContent, remainChances.textContent] = ["Ты берёшь слишком большое число, твоя догадка слишком высока!", chance];
    }else{
        [guess.textContent, remainChances.textContent] = ["Ты что, пытаешься меня обмануть?", chance];
        guess.style.color = "#ff0000";
    }

    if(chance == 0){
        [checkButton.textContent, input.disabled, inputValue] = ["Переиграть", true, ""];
        [guess.textContent, guess.style.color] = ["Ты в очередной раз проиграл! Увидимся в следующем проигрышном раунде!", "#ff0000"];
    }
    if(chance < -1){
        window.location.reload();
    }
})
