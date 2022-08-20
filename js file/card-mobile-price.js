//function

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

//pluse-button-
document.getElementById('plus-button').addEventListener('click', function(){
  //call the function to get the update value-
  let values = getUpdateInputValue(true, 'input-value');

  //call the function to get the update price-
  getUpdatePrice(values, 'main-price', 1219);
})


//minus-button-
document.getElementById('minus-button').addEventListener('click', function(){
  //call the function to get the update value-
  let values = getUpdateInputValue(false, 'input-value');

  //call the function to get the update price-
  getUpdatePrice(values, 'main-price', 1219)
})