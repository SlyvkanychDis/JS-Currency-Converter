let uaRate = 1;
let rubRate = 0.36;
let plRate = 6.31;
let eurRate = 30.30;
let usaRate = 26.23;
//rates

do {
  let userChooseCurrency = prompt(
    "Choose currency: UAN, RUB, PLN, EUR, USD"
  );
  let currencySign;
  if (userChooseCurrency.toUpperCase() === "UAN") {
    currencySign = uaRate;
  } else if (userChooseCurrency.toUpperCase() === "RUB") {
    currencySign = rubRate;
  } else if (userChooseCurrency.toUpperCase() === "PLN") {
    currencySign = plRate;
  } else if (userChooseCurrency.toUpperCase() === "EUR") {
    currencySign = eurRate;
  } else if (userChooseCurrency.toUpperCase() === "USD") {
    currencySign = usaRate;
  } 

  console.log(currencySign);

  let currencyAmount = parseFloat(prompt("Fill in amount for convert"));

  let userCurrencyConvert = prompt(
    "To which currency convert: UAN, RUB, PLN, EUR, USD"
  );
  console.log(currencyAmount);
  console.log(userCurrencyConvert);

  let exchangedAmount;

  if (userCurrencyConvert.toUpperCase() === "UAN") {
    exchangedAmount = (currencyAmount * currencySign) / uaRate;
  } 
    else if (userCurrencyConvert.toUpperCase() === "RUB") {
    exchangedAmount = (currencyAmount * currencySign) / rubRate;
  } 
    else if (userCurrencyConvert.toUpperCase() === "EUR") {
    exchangedAmount = (currencyAmount * currencySign) / eurRate;
  } 
    else if (userCurrencyConvert.toUpperCase() === "USD") {
    exchangedAmount = (currencyAmount * currencySign) / usaRate;
  } 
    else if (userCurrencyConvert.toUpperCase() === "PLN") {
    exchangedAmount = (currencyAmount * currencySign) / plRate;
  } 
  console.log(exchangedAmount);
  alert(
    `Result ${exchangedAmount.toFixed(4)} ${userCurrencyConvert.toUpperCase()}`
  );
  newExchange = confirm("once more?");
} while (newExchange === true);
