(() => {
  let myDinamicVar : any;
  myDinamicVar = 100;
  myDinamicVar = "Hola";
  myDinamicVar = null;
  myDinamicVar = {};

  myDinamicVar = 'Hola';
  const rta = (myDinamicVar as string);
  console.log(rta);

  let myDinamicVar2: number = 1212;
  const rta2 = (<number>myDinamicVar2);
  console.log(rta2);

})();
