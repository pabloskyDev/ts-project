(() => {
  type ShirtSizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string;
    createdAt: Date;
    stock: number;
    size?: ShirtSizes;
  };

  const products: Product[] = [];

  const addProduct = (data: Product): void => {
    products.push(data);
  };

  addProduct({
    title: 'Remera fachera facherita',
    createdAt: new Date(),
    stock: 10,
    size: 'M',
  });
  addProduct({
    title: 'Gorra',
    createdAt: new Date(),
    stock: 15
  });

  console.log(products);
})();
