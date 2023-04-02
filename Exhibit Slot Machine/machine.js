// // Define a function that sets up the slot machine, adds items to the boxes,
// // and sets up event listeners for the reset and spin buttons.
// (function () {
//   // Define an array of items that can appear on the slot machine.
//   const items = [
//     'Positive',
//     'Negative',
//   ];
  
//   // Find all the door elements on the page.
//   const doors = document.querySelectorAll('.door');
  
//   // Add event listeners to the spin and reset buttons.
//   document.querySelector('#spinner').addEventListener('click', spin);
//   document.querySelector('#reseter').addEventListener('click', init);

//   // Define a function to set up the slot machine boxes.
//   function init(firstInit = true, groups = 1, duration = 1) {
//     // Loop through all the door elements.
//     for (const door of doors) {
//       // If this is the first initialization, mark the door as not spun.
//       if (firstInit) {
//         door.dataset.spinned = '0';
//       }
//       // If the door has already been spun, don't do anything.
//       else if (door.dataset.spinned === '1') {
//         return;
//       }

//       // Clone the boxes element and clear it.
//       const boxes = door.querySelector('.boxes');
//       const boxesClone = boxes.cloneNode(false);

//       // Create a pool of items to add to the boxes.
//       const pool = ['❓'];

//       // If this is not the first initialization, add the items to the pool.
//       if (!firstInit) {
//         const arr = [];
//         for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
//           arr.push(...items);
//         }
//         pool.push(...shuffle(arr));

//         // Add event listeners to the boxes clone to mark the door as spun and blur the boxes.
//         boxesClone.addEventListener(
//           'transitionstart',
//           function () {
//             door.dataset.spinned = '1';
//             this.querySelectorAll('.box').forEach((box) => {
//               box.style.filter = 'blur(1px)';
//             });
//           },
//           { once: true }
//         );

//         // Add event listeners to the boxes clone to unblur the boxes and remove excess boxes.
//         boxesClone.addEventListener(
//           'transitionend',
//           function () {
//             this.querySelectorAll('.box').forEach((box, index) => {
//               box.style.filter = 'blur(0)';
//               if (index > 0) this.removeChild(box);
//             });
//           },
//           { once: true }
//         );
//       }

//       // Loop through the pool of items and add them to the boxes clone.
//       for (let i = pool.length - 1; i >= 0; i--) {
//         const box = document.createElement('div');
//         box.classList.add('box');
//         box.style.width = door.clientWidth + 'px';
//         box.style.height = door.clientHeight + 'px';
//         box.textContent = pool[i];
//         boxesClone.appendChild(box);
//       }
//       boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
//       boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;
//       door.replaceChild(boxesClone, boxes);
//     }
//   }

//   async function spin() {
//     init(false, 1, 2);
    
//     for (const door of doors) {
//       const boxes = door.querySelector('.boxes');
//       const duration = parseInt(boxes.style.transitionDuration);
//       boxes.style.transform = 'translateY(0)';
//       await new Promise((resolve) => setTimeout(resolve, duration * 100));
//     }
//   }

//   function shuffle([...arr]) {
//     let m = arr.length;
//     while (m) {
//       const i = Math.floor(Math.random() * m--);
//       [arr[m], arr[i]] = [arr[i], arr[m]];
//     }
//     return arr;
//   }

//   init();
// })();

// Define a function that sets up the slot machine, adds items to the boxes,
// and sets up event listeners for the reset and spin buttons.
// (function () {
//   const items = [
//     'Positive',
//     'Negative',
//   ];

//   const door = document.querySelector('.door');

//   document.querySelector('#spinner').addEventListener('click', spin);
//   document.querySelector('#reseter').addEventListener('click', init);

//   function init(firstInit = true, groups = 1, duration = 1) {
//     if (firstInit) {
//       door.dataset.spinned = '0';
//     } else if (door.dataset.spinned === '1') {
//       return;
//     }

//     const boxes = door.querySelector('.boxes');
//     const boxesClone = boxes.cloneNode(false);
//     const pool = ['❓'];

//     if (!firstInit) {
//       const arr = [];
//       for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
//         arr.push(...items);
//       }
//       pool.push(...shuffle(arr));
//     }

//     for (let i = pool.length - 1; i >= 0; i--) {
//       const box = document.createElement('div');
//       box.classList.add('box');
//       box.style.width = door.clientWidth + 'px';
//       box.style.height = door.clientHeight + 'px';
//       box.textContent = pool[i];
//       boxesClone.appendChild(box);
//     }

//     boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
//     boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;

//     door.replaceChild(boxesClone, boxes);
//   }

//   async function spin() {
//     init(false, 1, 2);

//     const boxes = door.querySelector('.boxes');
//     const duration = parseInt(boxes.style.transitionDuration);

//     boxes.style.transform = 'translateY(0)';
//     await new Promise((resolve) => setTimeout(resolve, duration * 100));
//     door.dataset.spinned = '1';

//     const box = boxes.querySelector('.box');
//     box.style.filter = 'none';
//   }

//   function shuffle([...arr]) {
//     let m = arr.length;
//     while (m) {
//       const i = Math.floor(Math.random() * m--);
//       [arr[m], arr[i]] = [arr[i], arr[m]];
//     }
//     return arr;
//   }

//   init();
// })();






(function () {
  const items = [
    'Positive',
    'Negative',
  ];

  const door = document.querySelector('.door');

  document.querySelector('#spinner').addEventListener('click', spin);
  document.querySelector('#reseter').addEventListener('click', init);

  function init(firstInit = true, groups = 1, duration = 1) {
    if (firstInit) {
      door.dataset.spinned = '0';
    } else if (door.dataset.spinned === '1') {
      return;
    }

    const boxes = door.querySelector('.boxes');
    const boxesClone = boxes.cloneNode(false);
    const pool = ['❓'];

    if (!firstInit) {
      const arr = [];
      for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
        arr.push(...items);
      }
      pool.push(...shuffle(arr));
    }

    for (let i = pool.length - 1; i >= 0; i--) {
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.width = door.clientWidth + 'px';
      box.style.height = door.clientHeight + 'px';
      box.textContent = pool[i];
      boxesClone.appendChild(box);
    }

    boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
    boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;

    door.replaceChild(boxesClone, boxes);
  }

  async function spin() {
    init(false, 1, 2);

    const boxes = door.querySelector('.boxes');
    const duration = parseInt(boxes.style.transitionDuration);

    boxes.style.transform = 'translateY(0)';
    await new Promise((resolve) => setTimeout(resolve, duration * 100));
    door.dataset.spinned = '1';

    const box = boxes.querySelector('.box');
    box.style.filter = 'none';
  }

  function shuffle([...arr]) {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  }

  init();
})();