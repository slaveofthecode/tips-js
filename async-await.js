//#1 METODO NORMAL
(() => {
  let tasks = []; // creo variable para luego llenarlo con mis tareas
  function execTask(task, time = 3000) {
    setTimeout(() => {
      tasks.push(task);
      console.log(`${task} was executed`);
    }, time);
  } // defino la funcion, pero no la ejecuto

  console.log('Mando a ejecutar la tarea "desayunar" '); // mostramos console
  execTask('desayunar'); // mandamos a ejecutar pero no esperamos los 3 segundos

  console.log('Mando a ejecutar la tarea "codear" '); // mostramos console
  execTask('codear'); // mandamos a ejecutar pero no esperamos los 3 segundos

  console.log('Mando a ejecutar la tarea "dormir" '); // mostramos console
  execTask('dormir'); // mandamos a ejecutar pero no esperamos los 3 segundos

  console.log('TASKS', tasks); // mostramos consola
  // ...llegado los 3 segundos, mostramos los consoles "..was executed" al mismo tiempo
})();
/* OUTPUT DEMORA 3 SEGUNDOS
    > Mando a ejecutar la tarea "desayunar" 
    > Mando a ejecutar la tarea "codear" 
    > Mando a ejecutar la tarea "dormir" 
    > TASKS []
    > desayunar was executed
    > codear was executed
    > dormir was executed 
 */

// #2 aync-await
// - retornan una Promise, manejando la ejecucion de modo SYNC
(async () => {
  let tasks = []; // creo variable para luego llenarlo con mis tareas

  function execTask(task, time = 3000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        tasks.push(task);
        console.log(`${task} was executed`);
        resolve();
      }, time);
    });
  } // defino la funcion (Promise), pero no la ejecuto

  console.log('Mando a ejecutar la tarea "desayunar" '); // mostramos console
  await execTask('desayunar'); // mandamos a ejecutar y ESPERAMOS 3 segundos

  console.log('Mando a ejecutar la tarea "codear" '); // mostramos console
  await execTask('codear'); // mandamos a ejecutar y ESPERAMOS 3 segundos

  console.log('Mando a ejecutar la tarea "dormir" '); // mostramos console
  await execTask('dormir'); // mandamos a ejecutar y ESPERAMOS 3 segundos

  console.log('TASKS', tasks); // mostramos consola
})();
/* OUTPUT DEMORA 9 SEGUNDOS
    > Mando a ejecutar la tarea "desayunar" 
    > desayunar was executed
    > Mando a ejecutar la tarea "codear" 
    > codear was executed
    > Mando a ejecutar la tarea "dormir" 
    > dormir was executed
    > TASKS (3) ["desayunar", "codear", "dormir"]
 */

// #3 Promise.all
(() => {
  let tasks = []; // creo variable para luego llenarlo con mis tareas

  function execTask(task, time = 3000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (task !== 'codear') {
          tasks.push(task);
          console.log(`${task} was executed`);
          resolve();
        } else {
          reject('Nooooo!!');
        }
      }, time);
    });
  } // defino la funcion (Promise), pero no la ejecuto

  console.log(`Mando a ejecutar TODAS las tareas al mismo tiempo 
        - desayunar (2s)
        - codear    (8s)
        - dormir    (4s)
    `);

  console.time('async-await + Promise.all');
  Promise.all([
    execTask('desayunar', 2000),
    execTask('codear', 8000),
    execTask('dormir', 4000)
  ])
    .then(() => {
      console.log('TASKS', tasks); // mostramos consola
      console.timeEnd('async-await + Promise.all');
    })
    .catch((err) => {
      console.error('Hubo un error!! 😢', err);
    });
})();
