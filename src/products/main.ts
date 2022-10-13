import { addProduct, products, calcStock} from './product.service'

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

console.log(products)
const total = calcStock()
console.log(total)
