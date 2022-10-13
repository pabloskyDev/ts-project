(() => {
  type UserID = string | number;

  let userID: UserID;
  userID = 1212;
  userID = 'FC45';

  // literal Types, acota asignación de valores.
  type ShirtSizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: ShirtSizes;
  shirtSize = 'M'

  function greeting(myText: UserID, size: ShirtSizes) {
    if (typeof myText === 'string') {
      console.log(`Hola ${myText.toLowerCase()}, tu talla es: ${size}`);
    } else if (typeof myText === 'number') {
      console.log(`Sos el usuario Nº ${myText.toFixed()} y tu talla es ${size}`);
    }
  }

  greeting('Pablo', 'M');
  greeting(78.3, 'S');

})();
