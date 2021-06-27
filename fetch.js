//  fetch API (return a Promise)

const url = 'https://jsonplaceholder.typicode.com/posts';
const setting = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    my: 'info',
    isAnExample: true
  })
};

// #region 1
//fetch(url, setting);
fetch(url)
  .then((d) => {
    // console.log(d);
    // console.log(d.ok);
    // console.log(d.status);
    d.json().then((d) => console.log(d));
    // d.text().then((d) => console.log(d));
  })
  .catch((err) => {
    console.error(`There was as error : ${err}`);
  });
// #endregion

// #region 2
(async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  try {
    const result = await fetch(url);
    const data = await result.json();
    console.log('RESULT URL', data);
  } catch (error) {
    console.log('ERROR URL', error);
  }
})();
// #endregion
