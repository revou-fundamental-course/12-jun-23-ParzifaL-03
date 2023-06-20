const btnKonversi = document.getElementById("btnKonversi");
const btnReset = document.getElementById("btnReset");
const btnReverse = document.getElementById("btnReverse");
const inputCelsius = document.getElementById("celsius");
const inputFahrenheit = document.getElementById("fahrenheit");
const inputRumus = document.getElementById("rumus");
const celsiusLabel = document.querySelector('label[for="celsius"]');
const fahrenheitLabel = document.querySelector('label[for="fahrenheit"]');

let validator = false;

btnReverse.addEventListener("click", () => {
  const tempLabel = celsiusLabel.textContent;
  celsiusLabel.textContent = fahrenheitLabel.textContent;
  fahrenheitLabel.textContent = tempLabel;
  
  inputCelsius.value = "";
  inputFahrenheit.value = "";
  inputRumus.value = "";
  validator = !validator;
});
        
btnKonversi.addEventListener("click", () => {
    const celsius = parseFloat(inputCelsius.value);
  if(isNaN(celsius)){
    inputFahrenheit.value = "masukan suhu terlebih dahulu";
    inputRumus.value = ""
  }
  if(validator && !isNaN(celsius)){
    const fahrenheit = (celsius - 32) / (9/5);
    inputFahrenheit.value = fahrenheit.toFixed(2);
    inputRumus.value = celsius + " - 32 / 1.8 = " + fahrenheit.toFixed(2);
  } else if(!isNaN(celsius)){
  const celsius = parseFloat(inputCelsius.value);
  const fahrenheit = (celsius * 9/5) + 32;
  inputFahrenheit.value = fahrenheit.toFixed(2);
  inputRumus.value = celsius + " + 32 / 1.8 = " + fahrenheit.toFixed(2);
  }
  });
        
btnReset.addEventListener("click", () => {
  inputCelsius.value = "";
  inputFahrenheit.value = "";
  inputRumus.value = "";
  });

