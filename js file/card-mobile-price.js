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