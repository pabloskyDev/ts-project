(() => {
  let myNull = null; //Infiere any
  let myUndefined = undefined; //Infiere any

  let myName: string | null; //Hay veces que necesitamos que una variable

  function hi(name: string | null) {
    let hello: string = 'Hello ';
    if (name) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }
  myName = null;
  hi(myName); // "Hello nobody"
  myName = 'Franco';
  hi(myName); // "Hello Franco"

  // Nullish Coalesing
  function hiv2(name: string | null) {
    let hello: string = 'Hello ';
    hello += name ?? 'nobody'
    console.log(hello)
  }

  hiv2(null);
  hiv2('Someone name');
})();
