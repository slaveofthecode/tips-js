// #region 1
(() => {
  let tasks = [];
  function execTask(task, time = 3000) {
    setTimeout(() => {
      tasks.push(task);
      console.log(`The task (${task}) was executed`);
    }, time);
  }

  console.log('Mando a ejecutar la tarea "desayunar" ');
  execTask('desayunar'); // async

  console.log('Mando a ejecutar la tarea "codear" ');
  execTask('codear'); // async

  console.log('Mando a ejecutar la tarea "dormir" ');
  execTask('dormir'); // async

  console.log('TASKS', tasks);
})();
/* OUTPUT (3 sec)
> Mando a ejecutar la tarea "desayunar" 
> Mando a ejecutar la tarea "codear" 
> Mando a ejecutar la tarea "dormir" 
> TASKS []
> The task (desayunar) was executed
> The task (codear) was executed
> The task (dormir) was executed 
 */
// #endregion

// #region 2
(async () => {
  let tasks = [];

  function execTask(task, time = 3000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        tasks.push(task);
        console.log(`The task (${task}) was executed`);
        resolve(); // it's OK
      }, time);
    });
  } // return a Promise

  console.time('EXECUTION FINISHED IN ');

  console.log('Mando a ejecutar la tarea "desayunar" ');
  await execTask('desayunar'); // execute and WAIT 3 sec

  console.log('Mando a ejecutar la tarea "codear" ');
  await execTask('codear', 5000); // execute and WAIT 5 sec

  console.log('Mando a ejecutar la tarea "dormir" ');
  await execTask('dormir'); // execute and WAIT 3 sec

  console.log('TASKS', tasks);

  console.timeEnd('EXECUTION FINISHED IN ');
})();
/* OUTPUT (11 sec)
    > Mando a ejecutar la tarea "desayunar" 
    > The task (desayunar) was executed
    > Mando a ejecutar la tarea "codear" 
    > The task (codear) was executed
    > Mando a ejecutar la tarea "dormir" 
    > The task (dormir) was executed
    > TASKS (3) ["desayunar", "codear", "dormir"]
    > EXECUTION FINISHED IN : 11005.6328125 ms
 */
// #endregion

// #region 3
(() => {
  let tasks = [];

  function execTask(task, time = 3000) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // if (task !== 'codear') {
        //   tasks.push(task);
        //   console.log(`${task} was executed`);
        //   resolve();
        // } else {
        //   reject('Nooooo!!');
        // }

        tasks.push(task);
        console.log(`${task} was executed`);
        resolve();
      }, time);
    });
  }

  console.log(`Mando a ejecutar TODAS las tareas al mismo tiempo 
        - desayunar (2s)
        - codear    (8s)
        - dormir    (4s)
    `);

  console.time('EXECUTION FINISHED IN');
  Promise.all([
    execTask('desayunar', 2000),
    execTask('codear', 8000),
    execTask('dormir', 4000)
  ])
    .then(() => {
      console.log('TASKS', tasks);
      console.timeEnd('EXECUTION FINISHED IN');
    })
    .catch((err) => {
      console.error('There was an error!! 😢', err);
    });
})();
/* (8 sec)
    > Mando a ejecutar TODAS las tareas al mismo tiempo 
            - desayunar (2s)
            - codear    (8s)
            - dormir    (4s)
    >
    > desayunar was executed
    > dormir was executed
    > codear was executed
    > TASKS (3) ["desayunar", "dormir", "codear"]
    > EXECUTION FINISHED IN: 8002.407958984375 ms
*/
