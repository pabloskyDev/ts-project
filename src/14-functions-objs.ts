(() => {
  const login = (data: {email: string, password: string}):void => {
    const {email, password} = data
    console.log(email,password)
  }
  login({email: "fran@co.me", password: "N0M3H4CK335"});

  // Funcion con un objeto más grande
  type ShirtSizes = 'S' | 'M' | 'L' | 'XL';

  const products:any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: ShirtSizes
  }):void => {
    products.push(data)
  };

  addProduct({title: "Remera fachera facherita", createdAt: new Date(2022, 5, 23), stock: 10, size: "M"})
  addProduct({title: "Gorra", createdAt: new Date(), stock: 15})

  console.log(products);

})();
