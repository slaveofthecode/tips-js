//  Immediately invoked Function Expression

// #region 1
(function () {
  console.log('IIFE');
  console.log('Immediately invoked Function Expression');
})();

(() => {
  console.log('Puede ser function o arrow function');
})();
// #endregion

// #region 2
let myObj = {
  id: 1,
  name: 'Gustavo'
};

((obj) => {
  let private = 'I am a private variable';
  console.log('Ideal para un buen manejo de scope');
  console.log(
    `Puede recibir parametros como este --> ${JSON.stringify(obj, null, 4)}`
  );
})(myObj);
console.log(private); // private is not defined
// #endregion

// #region 3
(async () => {
  console.log('Tambien puede ser ASYNC');
  console.log('Y obvio... trabajamos con Promise');
  (async () => {
    const url_GET = await fetch('https://jsonplaceholder.typicode.com/posts');
    const respJson = await url_GET.json();
    console.log(respJson);
  })();
})();
// #endregion
