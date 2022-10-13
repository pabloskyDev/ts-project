(() => {
  let userID: string | number;
  userID = 1212;

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`Hola ${myText.toLowerCase()}`);
    } else if (typeof myText === 'number') {
      console.log(`Sos el usuario Nº${myText}`);
    }
  }
  /**Cuando pasa los if, nos habilita el autocompletado por tipos**/

  greeting(userID);
  userID = 'FC45';
  greeting(userID);
})();
