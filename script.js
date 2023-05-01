const Keyboard = {

  elements: {
    input: null,
    main: null,
    keysContainer: null,
    keys: [],
  },
  eventHandlers: {
    oninput: null,
  },
  properties: {
    value: '',
    capsLock: false,
  },

  init() {
    this.elements.main = document.createElement('div');
    this.elements.input = document.createElement('textarea');
    this.elements.input.classList.add('input');
    this.elements.input.setAttribute('placeholder', 'Click on this textarea.\nTo change language - press Ctrl + Shift on physical keyboard.');
    document.body.append(this.elements.input);
    this.elements.keysContainer = document.createElement('div');
    this.elements.main.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.append(this.createKeys());
    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');
    this.elements.main.append(this.elements.keysContainer);
    document.body.append(this.elements.main);
    document.querySelectorAll('.input').forEach((element) => {
      element.addEventListener('focus', () => {
        this.active(element.value, (currentValue) => {
          element.value = currentValue;
        });
      });
    });
  },

  createKeys() {
    const fragment = document.createDocumentFragment();
    const keyList = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
      'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
      'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
      'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?', 'Shift', 'up',
      'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl', 'left', 'down', 'right'];
    const keyList2 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
      'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
      'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', '\'', 'Enter',
      'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '?', 'Shift', 'up',
      'Ctrl', 'Fn', 'Alt', 'Space', 'Alt', 'Ctrl', 'left', 'down', 'right'];
    keyList2.forEach((key) => {
      const keyElement = document.createElement('button');
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key', 'hidden');
      switch (key) {
        case 'Backspace':
          keyElement.innerHTML = 'Backspace';
          keyElement.classList.add('keyboard__key-small');
          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
            this.thisEvent('oninput');
          });
          break;

        case 'Tab':
          keyElement.innerHTML = 'Tab';
          keyElement.classList.add('keyboard__key-small');
          keyElement.addEventListener('click', () => {
            this.properties.value += '    ';
            this.thisEvent('oninput');
          });
          break;

        case 'Caps Lock':
          keyElement.innerHTML = 'Caps Lock';
          keyElement.classList.add('keyboard__key-small');
          keyElement.addEventListener('click', () => {
            this.toggleCapsLock();
            keyElement.classList.toggle(this.properties.capsLock);
          });
          break;

        case 'Enter':
          keyElement.innerHTML = 'Enter';
          keyElement.classList.add('keyboard__key-small');
          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this.thisEvent('oninput');
          });
          break;

        case 'Shift':
          keyElement.innerHTML = 'Shift';
          keyElement.classList.add('keyboard__key-small');
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.thisEvent('oninput');
          });
          break;

        case 'up':
          keyElement.innerHTML = '&#8593;';
          keyElement.classList.add('keyboard__key-small');
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.thisEvent('oninput');
          });
          break;

        case 'Ctrl':
          keyElement.innerHTML = 'Ctrl';
          keyElement.classList.add('keyboard__key-small', 'ctrl');
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.thisEvent('oninput');
          });
          break;
        case 'Fn':
          keyElement.innerHTML = 'Fn';
          keyElement.classList.add('keyboard__key-small', 'fn');
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.thisEvent('oninput');
          });
          break;

        case 'Alt':
          keyElement.innerHTML = 'Alt';
          keyElement.classList.add('keyboard__key-small', 'alt');
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.thisEvent('oninput');
          });
          break;

        case 'left':
          keyElement.innerHTML = '&#8592;';
          keyElement.classList.add('keyboard__key-small');
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.thisEvent('oninput');
          });
          break;

        case 'down':
          keyElement.innerHTML = '&#8595;';
          keyElement.classList.add('keyboard__key-small');
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.thisEvent('oninput');
          });
          break;

        case 'right':
          keyElement.innerHTML = '&#8594;';
          keyElement.classList.add('keyboard__key-small');
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.thisEvent('oninput');
          });
          break;

        case 'Space':
          keyElement.innerHTML = 'Space';
          keyElement.classList.add('keyboard__key-small', 'space');
          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this.thisEvent('oninput');
          });
          break;

        default:
          keyElement.textContent = key.toLowerCase();
          keyElement.addEventListener('click', () => {
            this.properties.value += this.properties.capsLock
              ? key.toUpperCase() : key.toLowerCase();
            this.thisEvent('oninput');
          });
          break;
      }
      document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.shiftKey) {
          keyElement.classList.toggle('hidden');
        }
      });
      fragment.append(keyElement);
    });
    keyList.forEach((key) => {
      const keyElement = document.createElement('button');
      document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.shiftKey) {
          keyElement.classList.toggle('hidden');
        }
      });
      const lineBreak = ['Backspace', '\\', 'Enter', 'up'].indexOf(key) !== -1;
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');
      switch (key) {
        case 'Backspace':
          keyElement.innerHTML = 'Backspace';
          keyElement.classList.add('keyboard__key-small');
          keyElement.addEventListener('click', () => {
            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
            this.thisEvent('oninput');
          });
          break;

        case 'Tab':
          keyElement.innerHTML = 'Tab';
          keyElement.classList.add('keyboard__key-small');
          keyElement.addEventListener('click', () => {
            this.properties.value += '    ';
            this.thisEvent('oninput');
          });
          break;

        case 'Caps Lock':
          keyElement.innerHTML = 'Caps Lock';
          keyElement.classList.add('keyboard__key-small');
          keyElement.addEventListener('click', () => {
            this.toggleCapsLock();
            keyElement.classList.toggle(this.properties.capsLock);
          });
          break;

        case 'Enter':
          keyElement.innerHTML = 'Enter';
          keyElement.classList.add('keyboard__key-small');
          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this.thisEvent('oninput');
          });
          break;

        case 'Shift':
          keyElement.innerHTML = 'Shift';
          keyElement.classList.add('keyboard__key-small');
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.thisEvent('oninput');
          });
          break;

        case 'up':
          keyElement.innerHTML = '&#8593;';
          keyElement.classList.add('keyboard__key-small');
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.thisEvent('oninput');
          });
          break;

        case 'Ctrl':
          keyElement.innerHTML = 'Ctrl';
          keyElement.classList.add('keyboard__key-small', 'ctrl');
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.thisEvent('oninput');
          });
          break;
        case 'Fn':
          keyElement.innerHTML = 'Fn';
          keyElement.classList.add('keyboard__key-small', 'fn');
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.thisEvent('oninput');
          });
          break;

        case 'Alt':
          keyElement.innerHTML = 'Alt';
          keyElement.classList.add('keyboard__key-small', 'alt');
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.thisEvent('oninput');
          });
          break;

        case 'left':
          keyElement.innerHTML = '&#8592;';
          keyElement.classList.add('keyboard__key-small');
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.thisEvent('oninput');
          });
          break;

        case 'down':
          keyElement.innerHTML = '&#8595;';
          keyElement.classList.add('keyboard__key-small');
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.thisEvent('oninput');
          });
          break;

        case 'right':
          keyElement.innerHTML = '&#8594;';
          keyElement.classList.add('keyboard__key-small');
          keyElement.addEventListener('click', () => {
            this.properties.value += '';
            this.thisEvent('oninput');
          });
          break;

        case 'Space':
          keyElement.innerHTML = 'Space';
          keyElement.classList.add('keyboard__key-small', 'space');
          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this.thisEvent('oninput');
          });
          break;

        default:
          keyElement.textContent = key.toLowerCase();
          keyElement.addEventListener('click', () => {
            this.properties.value += this.properties.capsLock
              ? key.toUpperCase() : key.toLowerCase();
            this.thisEvent('oninput');
          });
          break;
      }
      fragment.append(keyElement);

      if (lineBreak) {
        fragment.append(document.createElement('br'));
      }
    });
    return fragment;
  },

  thisEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] === 'function') {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    for (const key of this.elements.keys) {
      key.textContent = this.properties.capsLock
        ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
    }
  },
  active(initialValue, oninput) {
    this.properties.value = initialValue || '';
    this.eventHandlers.oninput = oninput;
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});
