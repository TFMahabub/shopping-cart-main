//pluse-button-
document.getElementById('plus-button').addEventListener('click', function(){
  //call the function to get the update value-
  let values = getUpdateInputValue(true, 'input-value');

  //call the function to get the update price-
  getUpdatePrice(values, 'main-price', 1219);

  //call the function to update the allProduct price-
  const allProductTotalPrice = getSumMainProductPrice();

  //call the function to update tax value-
  const totalTaxValue = getTaxResult()

  //call the function to update all price sum-
  getAllSumValue(allProductTotalPrice, totalTaxValue);
})

//minus-button-
document.getElementById('minus-button').addEventListener('click', function(){
  //call the function to get the update value-
  let values = getUpdateInputValue(false, 'input-value');

  //call the function to get the update price-
  getUpdatePrice(values, 'main-price', 1219);

  //call the function to update the allProduct price-
  const allProductTotalPrice = getSumMainProductPrice();

  //call the function to update tax value-
  const totalTaxValue = getTaxResult()

  //call the function to update all price sum-
  getAllSumValue(allProductTotalPrice, totalTaxValue);
})