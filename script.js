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
                this.active(element.value, currentValue => {
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


        keyList.forEach(key => {
            const keyElement = document.createElement('button');
            const lineBreak = ['Backspace', ].indexOf(key) !== -1;
            keyElement.setAttribute('type', 'button');
            keyElement.classList.add('keyboard__key');
            switch (key) {
                case 'Backspace':
                keyElement.innerHTML='Backspace';
                keyElement.addEventListener('click', () => {
                    this.properties.value=this.properties.value.substring(0, this.properties.value.length -1);
                    this._event('oninput');
                })
                break;
            
                case 'Caps Lock':
                keyElement.innerHTML='Caps Lock';
                keyElement.addEventListener('click', () => {
                    this._capsLock();
                    keyElement.classList.toggle(this.properties.capsLock)
                })
                break;
            
                case 'Enter': 
                keyElement.innerHTML='Enter';
                keyElement.addEventListener('click', () => {
                    this.properties.value += '\n';
                    this._event('oninput');
                })
                break;
            
                case 'Space':
                keyElement.innerHTML='Space';
                keyElement.addEventListener('click', () => {
                    this.properties.value += ' ';
                    this._event('oninput');
                })
                break;

            
                default:
                keyElement.textContent=key.toLowerCase();
                keyElement.addEventListener('click', () => {
                    this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                    this._event('oninput');
                })
                break;
            }
            fragment.append(keyElement);
            
            if (lineBreak) {
                fragment.append(document.createElement('br'));
            }
          })
    return fragment;
    },


    _event(handlerName) {
        if (typeof this.eventHandlers[handlerName] == 'function') {
            this.eventHandlers[handlerName](this.properties.value);
        }
    },
    
    _capsLock() {
        this.properties.capsLock = !this.properties.capsLock;
        for (const key of this.elements.keys) {
            key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
        }
    },
    active(initialValue, oninput) {
        this.properties.value = initialValue || '';
        this.eventHandlers.oninput=oninput;
    },
}
window.addEventListener('DOMContentLoaded', function() {
    Keyboard.init();
})
