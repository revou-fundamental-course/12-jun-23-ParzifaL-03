const btnKonversi = document.getElementById("btnKonversi");
const btnReset = document.getElementById("btnReset");
const btnReverse = document.getElementById("btnReverse");
const inputCelsius = document.getElementById("celsius");
const inputFahrenheit = document.getElementById("fahrenheit");
const celsiusLabel = document.querySelector('label[for="celsius"]');
const fahrenheitLabel = document.querySelector('label[for="fahrenheit"]');

let validator = false;

btnReverse.addEventListener("click", () => {
  const tempLabel = celsiusLabel.textContent;
  celsiusLabel.textContent = fahrenheitLabel.textContent;
  fahrenheitLabel.textContent = tempLabel;
  
  inputCelsius.value = "";
  inputFahrenheit.value = "";
  validator = !validator;
});
        
btnKonversi.addEventListener("click", () => {
  if(validator){
    const celsius = parseFloat(inputCelsius.value);
    const fahrenheit = (celsius - 32) / (9/5);
    inputFahrenheit.value = fahrenheit.toFixed(2);
  } else{
  const celsius = parseFloat(inputCelsius.value);
  const fahrenheit = (celsius * 9/5) + 32;
  inputFahrenheit.value = fahrenheit.toFixed(2);
  }
  });
        
btnReset.addEventListener("click", () => {
  inputCelsius.value = "";
  inputFahrenheit.value = "";
  });

