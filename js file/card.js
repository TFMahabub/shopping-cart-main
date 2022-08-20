//---------function----------

//functio for update the value-
function getUpdateInputValue(isIncrease){
  const inputValue = document.getElementById('input-value');
  const inputValueText = inputValue.value;
  const inputValueInt = parseInt(inputValueText);


  if(isIncrease === true){
    let updateValue = inputValueInt + 1;
    inputValue.value = updateValue;
    return updateValue;
  }

  else{
    let updateValue = inputValueInt - 1;
    inputValue.value = updateValue;
    return updateValue;
  }
  
}

//function for update the main price-
function getUpdatePrice(updateValuesss){
    const mainPrice = document.getElementById('main-price');
  
    let updateMainPrice = 1219 * updateValuesss;
    mainPrice.innerText = updateMainPrice;
}



//plus-button-
document.getElementById('plus-button').addEventListener('click', function(){
  
  //call the function for update input value-
   let updateValues = getUpdateInputValue(true);

   //call the function for update main price-
  getUpdatePrice(updateValues);
})

//minus-button-
document.getElementById('minus-button').addEventListener('click', function(){

  //call the functio for update input value-
  let updateValues = getUpdateInputValue(false);

  //call the function for update main price-
  getUpdatePrice(updateValues);
})