import _ from 'lodash';

const data = [
  {
    username: 'Franco',
    role: 'admin'
  },
  {
    username: 'Valentina',
    role: 'seller'
  },
  {
    username: 'Santiago',
    role: 'customer'
  },
  {
    username: 'zulema',
    role: 'seller'
  }
]

const rta = _.groupBy(data, item => item.role);
console.log(rta)
