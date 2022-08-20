//plus-btn-
document.getElementById('plus-btn').addEventListener('click',function(){
  //call the function to update the input value-
  let values = getUpdateInputValue(true, 'case-input');
  
  //call the function to update main price-
  getUpdatePrice(values, 'case-mainPrice', 59);

  //call the function to update the allProduct price-
  const allProductTotalPrice = getSumMainProductPrice();

  //call the function to update tax value-
  const totalTaxValue = getTaxResult()

  //call the function to update all price sum-
  getAllSumValue(allProductTotalPrice, totalTaxValue);
})

//minus-btn-
document.getElementById('minus-btn').addEventListener('click', function(){
  //call the function to update the input value-
  let values = getUpdateInputValue(false, 'case-input');

  //call the function to update main price-
  getUpdatePrice(values, 'case-mainPrice', 59)

  //call the function to update the allProduct price-
  const allProductTotalPrice = getSumMainProductPrice();

  //call the function to update tax value-
  const totalTaxValue = getTaxResult()

  //call the function to update all price sum-
  getAllSumValue(allProductTotalPrice, totalTaxValue);
})