(() => {
  const calcTotal = (prices: number[]):number => {
    let total:number = 0;
    total = prices.reduce((acc,num) => acc + num,0)
    return total
  }
  const rta = calcTotal([1,2,3,4]);
  console.log(rta);

  // Void funtion, no retorna ningún valor.
  const printTotal = (price: number):void => {
    console.log(`El total es: $${price}`);
  }
  printTotal(56);
})();
