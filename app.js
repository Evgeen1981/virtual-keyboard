/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable import/extensions */
import en from './en.js';
import ru from './ru.js';

const BODY = document.querySelector('body');
let ctrlIsPressed = false;
let isCaps = false;
let langMem = '';

function initKeyboard() {
  const elems = document.createElement('div');
  elems.classList.add('container');
  elems.innerHTML = `
  <h1 class="title">
      Virtual Keyboard
    </h1>
    <p class="change__lang">
      For change language press key "Win" on Virtual Keyboard, or Ctrl+Alt on your Keyboard
    </p>
    <textarea class="textarea" name="textarea" placeholder="write your text..." autofocus></textarea>

    <div class="keyboard">
      <div class="keyboard__line">
        <div class="keyboard__line1--key keyboard__key">
          <div class="sub"></div>
        </div>
        <div class="keyboard__line1--key keyboard__key">
          <div class="sub"></div>
        </div>
        <div class="keyboard__line1--key keyboard__key">
          <div class="sub"></div>
        </div>
        <div class="keyboard__line1--key keyboard__key">
          <div class="sub"></div>
        </div>
        <div class="keyboard__line1--key keyboard__key">
          <div class="sub"></div>
        </div>
        <div class="keyboard__line1--key keyboard__key">
          <div class="sub"></div>
        </div>
        <div class="keyboard__line1--key keyboard__key">
          <div class="sub"></div>
        </div>
        <div class="keyboard__line1--key keyboard__key">7
          <div class="sub">&</div>
        </div>
        <div class="keyboard__line1--key keyboard__key">
          <div class="sub"></div>
        </div>
        <div class="keyboard__line1--key keyboard__key">
          <div class="sub"></div>
        </div>
        <div class="keyboard__line1--key keyboard__key">
          <div class="sub"></div>
        </div>
        <div class="keyboard__line1--key keyboard__key">
          <div class="sub"></div>
        </div>
        <div class="keyboard__line1--key keyboard__key">
          <div class="sub"></div>
        </div>
        <div class="keyboard__line1--key keyboard__key">
          <div class="sub"></div>
        </div>
      </div>

      <div class="keyboard__line">
        <div class="keyboard__line2--key keyboard__key">Tab</div>
        <div class="keyboard__line2--key keyboard__key">Q</div>
        <div class="keyboard__line2--key keyboard__key">W</div>
        <div class="keyboard__line2--key keyboard__key">E</div>
        <div class="keyboard__line2--key keyboard__key">R</div>
        <div class="keyboard__line2--key keyboard__key">T</div>
        <div class="keyboard__line2--key keyboard__key">Y</div>
        <div class="keyboard__line2--key keyboard__key">U</div>
        <div class="keyboard__line2--key keyboard__key">I</div>
        <div class="keyboard__line2--key keyboard__key">O</div>
        <div class="keyboard__line2--key keyboard__key">P</div>
        <div class="keyboard__line2--key keyboard__key">[</div>
        <div class="keyboard__line2--key keyboard__key">]</div>
        <div class="keyboard__line2--key keyboard__key"></div>
        <div class="keyboard__line2--key keyboard__key">Delete</div>
      </div>

      <div class="keyboard__line">
        <div class="keyboard__line3--key keyboard__key">Caps Lock</div>
        <div class="keyboard__line3--key keyboard__key">A</div>
        <div class="keyboard__line3--key keyboard__key">S</div>
        <div class="keyboard__line3--key keyboard__key">D</div>
        <div class="keyboard__line3--key keyboard__key">F</div>
        <div class="keyboard__line3--key keyboard__key">G</div>
        <div class="keyboard__line3--key keyboard__key">H</div>
        <div class="keyboard__line3--key keyboard__key">J</div>
        <div class="keyboard__line3--key keyboard__key">K</div>
        <div class="keyboard__line3--key keyboard__key">L</div>
        <div class="keyboard__line3--key keyboard__key">;</div>
        <div class="keyboard__line3--key keyboard__key">'</div>
        <div class="keyboard__line3--key keyboard__key">Enter</div>
      </div>

      <div class="keyboard__line">
        <div class="keyboard__line4--key keyboard__key">Shift</div>
        <div class="keyboard__line4--key keyboard__key">Z</div>
        <div class="keyboard__line4--key keyboard__key">X</div>
        <div class="keyboard__line4--key keyboard__key">C</div>
        <div class="keyboard__line4--key keyboard__key">V</div>
        <div class="keyboard__line4--key keyboard__key">B</div>
        <div class="keyboard__line4--key keyboard__key">N</div>
        <div class="keyboard__line4--key keyboard__key">M</div>
        <div class="keyboard__line4--key keyboard__key">,</div>
        <div class="keyboard__line4--key keyboard__key">.</div>
        <div class="keyboard__line4--key keyboard__key">/</div>
        <div class="keyboard__line4--key keyboard__key">&#8593</div>
        <div class="keyboard__line4--key keyboard__key">Shift</div>
      </div>

      <div class="keyboard__line">
        <div class="keyboard__line5--key keyboard__key">Ctrl</div>
        <div class="keyboard__line5--key keyboard__key">Win</div>
        <div class="keyboard__line5--key keyboard__key">Alt</div>
        <div class="keyboard__line5--key keyboard__key"> </div>
        <div class="keyboard__line5--key keyboard__key">Alt</div>
        <div class="keyboard__line5--key keyboard__key">Ctrl</div>
        <div class="keyboard__line5--key keyboard__key">&#8592</div>
        <div class="keyboard__line5--key keyboard__key">&#8595</div>
        <div class="keyboard__line5--key keyboard__key">&#8594</div>
        <div class="keyboard__line5--key keyboard__key">Win</div>
      </div>
    </div>
    `;
  BODY.appendChild(elems);
}

const lang = localStorage.getItem('langMem');
langMem = lang;

function setDataSet() {
  const KEYS = document.querySelectorAll('.keyboard__key');
  KEYS.forEach((key, i) => {
    key.dataset.name = en[i].code;
  });

  changeLang(KEYS);
  const KEYBOARD = document.querySelector('.keyboard');
  changeLangKeyboardRU(KEYBOARD, KEYS);
  changeLangKeyboardKey(KEYS);
  setShift(KEYBOARD, KEYS);
  setShiftKeyb(KEYS);
  removeShiftKeyb(KEYS);
  setCapsLock(KEYBOARD, KEYS);
  setActiveKey(KEYS);
  setLetter(KEYBOARD);
}

function changeLang(KEYS) {
  if (lang && lang === 'en') {
    setLang(KEYS, en);
    langMem = 'en';
  } else {
    setLang(KEYS, ru);
    langMem = 'ru';
  }
}

function setLang(data, langs) {
  const line1 = document.querySelectorAll('.keyboard__line1--key');
  data.forEach((key, i) => {
    key.innerHTML = langs[i].small;
  });

  line1.forEach((elem, i) => {
    elem.innerHTML = `${langs[i].small}
    <div class="sub">${langs[i].shift || ''}</div>
    `;
  });
}

function changeLangKeyboardRU(elem, KEYS) {
  elem.addEventListener('click', (event) => {
    if (event.target.dataset.name === 'MetaLeft') {
      if (langMem === 'en') {
        langMem = 'ru';
        localStorage.setItem('langMem', 'ru');
        setLang(KEYS, ru);
      } else {
        langMem = 'en';
        localStorage.setItem('langMem', 'en');
        setLang(KEYS, en);
      }
    }
  });
}

function setActiveKey(KEYS) {
  window.addEventListener('keydown', (event) => {
    KEYS.forEach((key) => {
      if (event.code !== 'CapsLock') {
        key.classList.remove('active__btn');
        if (event.code === key.dataset.name) {
          key.classList.add('active__btn');
        }
      }
    });
  });
  window.addEventListener('keyup', (event) => {
    KEYS.forEach((key) => {
      if (event.code !== 'CapsLock') {
        if (event.code === key.dataset.name) {
          key.classList.remove('active__btn');
        }
      }
    });
  });
}

function changeLangKeyboardKey(KEYS) {
  window.addEventListener('keydown', (event) => {
    if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
      ctrlIsPressed = true;
    }
    if (ctrlIsPressed && (event.code === 'AltLeft' || event.code === 'AltRight')) {
      if (langMem === 'en') {
        langMem = 'ru';
        localStorage.setItem('langMem', 'ru');
        setLang(KEYS, ru);
      } else {
        langMem = 'en';
        localStorage.setItem('langMem', 'en');
        setLang(KEYS, en);
      }
    }
  });
  window.addEventListener('keyup', (event) => {
    if (event.code === 'ControlLeft' || event.code === 'ControlRight') {
      ctrlIsPressed = false;
    }
  });
}

function setCapsLock(KEYBOARD, KEYS) {
  KEYBOARD.addEventListener('click', (event) => {
    if (event.target.dataset.name === 'CapsLock') {
      if (!isCaps) {
        isCaps = true;
      } else {
        isCaps = false;
      }

      KEYS.forEach((key, i) => {
        if (langMem === 'en' && isCaps) {
          if (key.dataset.name.match(/[Key]/) && key.dataset.name.match(/[^Backquote || Semicolon || Period || BracketLeft || BracketRight || Quote]/)) {
            key.innerHTML = en[i].shift || en[i].small;
          }
        } else if (key.dataset.name.match(/[Key]/) && key.dataset.name.match(/[^Backquote || Semicolon || Period || BracketLeft || BracketRight || Quote]/)) {
          key.innerHTML = en[i].small || en[i].small;
        }

        if (langMem === 'ru' && isCaps) {
          if (key.dataset.name.match(/[Key || Comma]/) && key.dataset.name.match(/[^Backquote || Slash]/)) {
            key.innerHTML = ru[i].shift || ru[i].small;
          }
        }
        if (langMem === 'ru' && !isCaps) {
          if (key.dataset.name.match(/[Key || Comma]/) && key.dataset.name.match(/[^Backquote || Slash]/)) {
            key.innerHTML = ru[i].small || ru[i].small;
          }
        }
      });
      event.target.classList.toggle('active__btn');
    }
  });
}

function setShift(elem, KEYS) {
  const line1 = document.querySelectorAll('.keyboard__line1--key');
  elem.addEventListener('mousedown', (event) => {
    if (event.target.dataset.name === 'ShiftLeft' || event.target.dataset.name === 'ShiftRight') {
      event.target.classList.remove('active__btn');
      event.target.classList.add('active__btn');
      addShift(KEYS, line1);
    }
  });
  elem.addEventListener('mouseup', (event) => {
    if (event.target.dataset.name === 'ShiftLeft' || event.target.dataset.name === 'ShiftRight') {
      event.target.classList.remove('active__btn');
      removeShift(KEYS, line1);
    }
  });
}

function setShiftKeyb(KEYS) {
  const line1 = document.querySelectorAll('.keyboard__line1--key');
  window.addEventListener('keydown', (event) => {
    if (event.repeat) {
      return;
    }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftLeft') {
      const letter = document.querySelector(`[data-name="${event.code}"]`);
      letter.classList.add('active__btn');
      addShift(KEYS, line1);
    }
  });
}

function removeShiftKeyb(KEYS) {
  const line1 = document.querySelectorAll('.keyboard__line1--key');
  window.addEventListener('keyup', (event) => {
    if (event.repeat) {
      return;
    }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftLeft') {
      const letter = document.querySelector(`[data-name="${event.code}"]`);
      letter.classList.remove('active__btn');
      removeShift(KEYS, line1);
    }
  });
}

function addShift(KEYS, line1) {
  if (langMem === 'ru') {
    KEYS.forEach((key, i) => {
      key.innerHTML = ru[i].shift || ru[i].small;
    });

    line1.forEach((el, i) => {
      if (!el.dataset.name.match(/^Backspace/)) {
        el.innerHTML = `${ru[i].shift || ru[i].small}
          <div class="sub">${ru[i].small || ''}</div>
          `;
      }
    });
  } else {
    KEYS.forEach((key, i) => {
      key.innerHTML = en[i].shift || en[i].small;
    });

    line1.forEach((el, i) => {
      if (!el.dataset.name.match(/^Backspace/)) {
        el.innerHTML = `${en[i].shift || en[i].small}
          <div class="sub">${en[i].small || ''}</div>
          `;
      }
    });
  }
}

function removeShift(KEYS, line1) {
  if (langMem === 'ru') {
    KEYS.forEach((key, i) => {
      key.innerHTML = ru[i].small;
    });

    line1.forEach((el, i) => {
      el.innerHTML = `${ru[i].small}
      <div class="sub">${ru[i].shift || ''}</div>
      `;
    });
  } else {
    KEYS.forEach((key, i) => {
      key.innerHTML = en[i].small;
    });

    line1.forEach((el, i) => {
      el.innerHTML = `${en[i].small}
      <div class="sub">${en[i].shift || ''}</div>
      `;
    });
  }
}

function setLetter(KEYBOARD) {
  let letter = '';

  KEYBOARD.addEventListener('click', (event) => {
    if (event.target.classList.contains('keyboard__key') && event.target.dataset.name.match(/[^Tab || Shift || CapsLock || Ctrl || MetaLeft || Space || Backspace || Delete || Enter]/)) {
      letter = event.target.textContent;
      document.querySelector('.textarea').value += letter;
    }
    if (event.target.dataset.name.match(/[Backspace]/)) {
      document.querySelector('.textarea').value = document.querySelector('.textarea').value.substring(0, document.querySelector('.textarea').value - 1);
    }
  });
}

function getLangMem() {
  localStorage.setItem('langMem', langMem);
  initKeyboard();
}

window.addEventListener('DOMContentLoaded', getLangMem);
window.addEventListener('DOMContentLoaded', setDataSet);
