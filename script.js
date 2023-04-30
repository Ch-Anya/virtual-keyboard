// let input = document.createElement('input');
// document.body.append(input);
// input.classList.add('use-keyboard-input')

const Keyboard = {
    input: {
        input: null
    },

    elements: {
        input: null,
        main: null,
        keysContainer: null,
        keys: []
    },
    eventHandlers: {
        oninput: null,
        onclose: null
    },
    properties: {
        value: "",
        capsLock: false
    },

    init() {
        this.elements.main = document.createElement("div");
        this.elements.input=document.createElement('textarea');
        this.elements.input.classList.add('input');
        document.body.append(this.elements.input);
        this.elements.keysContainer = document.createElement('div');
        this.elements.main.classList.add('keyboard');
        this.elements.keysContainer.classList.add('keyboard__keys');
        this.elements.keysContainer.append(this._createKeys());
        this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key')
        this.elements.main.append(this.elements.keysContainer);
        document.body.append(this.elements.main);
        document.querySelectorAll('.input').forEach(element=>{
            element.addEventListener('focus', () => {
                this(element.value, currentValue => {
                    element.value = currentValue;
                })
            });
    });
    },

    _createKeys() {
        const fragment =document.createDocumentFragment();
        const keyList = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
    'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '?',
    'Ctrl', 'Alt', 'Space' ] 
//         const keyLayout=[192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220,
//         20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13,
//     16, 90, 88, 67, 86, 78, 66, 77, 188, 190, 191, 16, 38,
// 17, 18, 32, 37, 40, 39];

        keyList.forEach(key => {
            const keyElement = document.createElement('button');
            const lineBreak = ['Backspace', ].indexOf(key) !== -1;
            keyElement.setAttribute('type', 'button');
            keyElement.classList.add('keyboard__key');
            switch (key) {
            }
})
