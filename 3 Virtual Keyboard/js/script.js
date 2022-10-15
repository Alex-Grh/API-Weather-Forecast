let keyAll = document.querySelectorAll('.key-all');
let keyOperating = document.querySelectorAll('.key-operating');
const textarea = document.querySelector('textarea');

textarea.onkeydown = function () {
   activeKeyFunk();
   capsLockFunk();
};

//-----------------------------------------------------------------------------
// textarea.onclick = function () {
//    activeKeyFunk();
//    capsLockFunk();
// };
// textarea.onclick = activeKeyFunk;
//-----------------------------------------------------------------------------

textarea.onkeyup = activeKeyFunk;


function activeKeyFunk() {
   for (i = 0; i < keyAll.length; i++) {
      let topKeyAttribute = keyAll[i].getAttribute('data-key');
      if (event.code === topKeyAttribute) {
         keyAll[i].classList.toggle('my-active');
      };
   }
}

let capsLockCount = 0;
function capsLockFunk() {
   if (event.code === 'CapsLock') {
      capsLockCount++;
      if (capsLockCount % 2 === 1) {
         document.querySelector('.caps-lock').classList.add('caps-lock-active');
      } else {
         document.querySelector('.caps-lock').classList.remove('caps-lock-active');
      };
   };
};


//-----------------------------------------------------------------------------

// function init() {
//    let out = '';
//    for (let i = 0; i < keyAll.length; i++) {
//       out += '<div class="key-all" data-key="' + keyAll[i] + '" >' + String.fromCharCode(keyboard[i]) + '</div>';
//    }
//    document.querySelector('#keyboard').innerHTML = out;
// }
// init();


// keyAll.forEach(function (element) {
//    element.onclick = function (event) {
// keyAll.forEach(function (element) {
//    element.classList.remove('my-active');
// });
// let code1 = this.getAttribute('data-key');
// this.classList.add('my-active');
// console.log(code1);      
// textarea.value += this.innerHTML; 
//    }
// });

//!!!-----------------------------------------------------------------------------

/*
let keys = document.querySelectorAll('.keyboard_wrapper .key .row .key-all'),
   keyPad = document.querySelector('.keyboard_wrapper .key'),
   display = document.querySelector('.keyboard_wrapper .display');
   // display = document.querySelector('.i-11');
   // display = this.innerHTML; 

if (keys && keyPad && display) {
   let capsLockMode = false;
   keys.forEach(key => {
      key.addEventListener('click', function () {
         // console.log(this.innerText);
         if (this.classList.contains('caps')) {
            this.classList.toggle('active');
            keyPad.classList.toggle('uppercase');

            capsLockMode ? capsLockMode = false : capsLockMode = true;
         }
         else if (this.classList.contains('backspace')) {
            let str = display.innerText;
            display.innerText = str.substring(0, (str.length - 1));
         } else {
            if (capsLockMode) {
               display.innerText += this.dataset.key.toUpperCase();
            } else {
               display.innerText += this.dataset.key.toLowerCase();
            }
         }
      });
   });
}

*/
//!!!-----------------------------------------------------------------------------

const delete_btn = document.querySelector('.delete');
const backspace_btn = document.querySelector('.backspace');
const shift_btn = document.querySelector('.shift');
const capsLock_btn = document.querySelectorAll('.caps-lock');
const space_btn = document.querySelector('.space');

let chars = [];

keyOperating.forEach(btn => {
   btn.addEventListener('click', () => {
      textarea.value += btn.innerText;
      chars = textarea.value.split('');
      // for (i = 0; i < btn.length; i++) {
         // let topKeyAttribute = btn[i].getAttribute('data-key');
         // if (event.code === topKeyAttribute) {
      btn.classList.toggle('my-active-mouse');
   // };
// }
   });
});

delete_btn.addEventListener('click', () => {
   chars.pop();
   textarea.value = chars.join('');
});

backspace_btn.addEventListener('click', () => {
   chars.pop();
   textarea.value = chars.join('');
});

space_btn.addEventListener('click', () => {
   chars.push(' ');
   textarea.value = chars.join('');
});

shift_btn.addEventListener('click', () => {
   // keyOperating.forEach(btn => {
   //    btn.classList.toggle('caps-lock-active');
   // });
   keyOperating.forEach(btn => {
      btn.classList.toggle('upper');
   });   
});

shift_btn.addEventListener('click', () => {
   capsLock_btn.forEach(btn => {
      btn.classList.toggle('caps-lock-active');
   });
     
});