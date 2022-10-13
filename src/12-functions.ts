(() => {
  type ShirtSizes = 'S' | 'M' | 'L' | 'XL';
  function createProductToJSON(
  title: string,
  createdAt: Date,
  stock: number,
  size: ShirtSizes){
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product1 = createProductToJSON('Prod 1',new Date(), 12,'XL')
  console.log(product1)
  console.log(product1.stock)

  // Arrow function
  type ShirtSizesv2 = 'S' | 'M' | 'L' | 'XL';
  const createProductToJSONv2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: ShirtSizesv2 // Optional
  ) => {
    return {
      title,
      createdAt,
      stock,
      size,
    };
  };

  const product2 = createProductToJSONv2('Prod 1',new Date(), 12);
  console.log(product2);
  console.log(product2.size); // Devuelve un undefined porque no se envió.

})();
