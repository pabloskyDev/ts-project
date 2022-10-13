(() => {
  let prices = [123,312,643,124,12,75] //Aca infiere que el tipo de dato dentro del array es number
  //prices.push('asd')
  //prices.push(true)
  //prices.push({12})
  prices.push(111)

  let myArr = [123,523,15,'Hola', true]; // Aca infiere que los tipos son boolean, number y string

  // Tuplas
  let mixed: [number, string, boolean] = [1, 'Hola', true];
  mixed.push(123)
  mixed.push('mundo')
  mixed.push(true)
  // mixed.push({})
  // mixed.push([])

  let numbers = [1,2,3,4,5,6] //Si cambiaria el tipo, automaticamente me mostraria que no puedo multiplicar unalgo que no sea un numero..
  numbers.map(number => number * 2)
  console.log(numbers);
  console.log(numbers.map(number => number * 2))

  let arrOfObj: object[] = [{a: 1, b : 2}, {c: 3}]
  arrOfObj.push([1,2,3]) // Esto es posible ya que el typeof array es object
  console.log(arrOfObj);
})();
