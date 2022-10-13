(() => {
  let productPrice: number = 100;
  productPrice = productPrice + 1;
  productPrice = productPrice + '1' // Esto nos lo alerta, ya que JS lo transformaria a string.
  console.log(productPrice);

  let productInStock: number;
  productInStock = 89.9;
  console.log(productInStock); // TS nos alerta que no inicializamos nuestra variable.

  let discount = parseInt('100') // TS infiere que discount es number.
  console.log(discount);

  let hex = 0xFFF //Utilizamos 0x para denominar a los hexadecimales.
  let bin = 0b1010 //Utilizamos 0b para demnominar a los binarios.

  console.log(hex) //4095
  console.log(bin) //10

})();
