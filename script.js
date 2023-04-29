const Keyboard = {
  elements: {
    main: null,
    keyContainer: null,
    keys: [],
  },
  eventHandlers: {
    oninput: null,
    onclose: null,
  },
  properties: {
    value: '',
    capsLock: false,
  },

  init() {
    this.elements.main = document.createElement('div');
    this.elements.keyContainer = document.createElement('div');
    this.elements.main.classList.add('keyboard');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.main.append(this.elements.main);
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220,
      20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13,
      16, 90, 88, 67, 86, 78, 66, 77, 188, 190, 191, 16, 38,
      17, 18, 32, 37, 40, 39];
  },

  _triggerEvent(handleName) {
    console.log(`Event Name: ${handlerName}`);
  },

  _toggleCapsLock() {
    console.log('Caps Lock');
  },
};
