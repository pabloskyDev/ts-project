(() => {
  let isEnabled = true;
  //isEnabled = "hello" //Da error, ya que TS infirio que el dato es de tipo boolean

  let isNew : boolean = false;
  console.log(isNew) //false
  isNew = true;
  console.log(isNew) //true

  const random = Math.random();
  //isNew = random >= 0.5 ? "true" : "false" Esto da error ya que se le asignaria un string, tampoco podemos asignar 1 y 0 para ture y false ya que son tipo number
  isNew = random >= 0.5 ? true : false;
  console.log(isNew);
})();
