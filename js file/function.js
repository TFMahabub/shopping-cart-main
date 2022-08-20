//function for update the input value-
function getUpdateInputValue(isIncrease, inputId){
  const inputValue = document.getElementById(inputId);
  const inputValueText = inputValue.value;
  const inputValueInt = parseInt(inputValueText);

  if(isIncrease === true){
    updateValue = inputValueInt + 1;
    inputValue.value = updateValue;
    return updateValue;
  }
  else{
    updateValue = inputValueInt - 1;
    inputValue.value = updateValue;
    return updateValue;
  }
}

//function for update the main price-
function getUpdatePrice(values, mainPriceId, price){
  const mainPrice = document.getElementById(mainPriceId);

  let updatePrice = price * values;
  mainPrice.innerText = updatePrice;

}




//function for get parseInt value-
function getParseIntValue(mainPriceId){
  const mainPriceInnerText = document.getElementById(mainPriceId);
  const mainPriceInner = mainPriceInnerText.innerText;
  const mainPriceInt = parseInt(mainPriceInner);

  return mainPriceInt;
}



//function for update sum product price-
function getSumMainProductPrice(){
  const phoneMainPriceInt = getParseIntValue('main-price');
  const caseMainPriceInt = getParseIntValue('case-mainPrice');
  let totalPrice = phoneMainPriceInt + caseMainPriceInt;

  const totalPriceDisplay = document.getElementById('total-price');
  totalPriceDisplay.innerText = totalPrice;

  return totalPrice;
}


//function for tax calculation-
function getTaxResult(){
  const totalPrice = document.getElementById('total-price');
  const totalPriceinner = totalPrice.innerText;
  const totalPriceFloat = parseFloat(totalPriceinner);

  const taxDisplay = document.getElementById('tax');

  let tax = totalPriceFloat * 0.1;
      taxToFixed = tax.toFixed(2);
      taxFloat = parseFloat(taxToFixed);

  taxDisplay.innerText = taxFloat;

  return taxFloat;
}


//function for all total calculation-
function getAllSumValue(allProductTotalPrice, totalTax){
  const allSumPriceDisplay = document.getElementById('all-total');
  let allSumPrice = allProductTotalPrice + totalTax;
  allSumPriceDisplay.innerText = allSumPrice;
}