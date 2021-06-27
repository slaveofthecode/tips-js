//  Immediately invoked Function Expression

// #region 1
(function () {
  console.log('IIFE');
  console.log('Immediately invoked Function Expression');
})();

(() => {
  console.log('Podemos ser function o arrow function');
})();
// #endregion

// #region 2
let myObj = {
  id: 1,
  name: 'Gustavo'
};
((obj) => {
  let private = 'i am a private variable';
  console.log('Somos ideales para mantener un scope de variables');
  console.log(
    `Podemos recibir parametros como este --> ${JSON.stringify(obj, null, 4)}`
  );
})(myObj);
console.log(private); // private is not defined
// #endregion

// #region 3
(async () => {
  console.log('Tambien podemos ser funciones ASYNC');
  console.log('Y obvio... trabajamos con Promise');
  (async () => {
    const url_GET = await fetch('https://jsonplaceholder.typicode.com/posts');
    const respJson = await url_GET.json();
    console.log(respJson);
  })();
})();
// #endregion
