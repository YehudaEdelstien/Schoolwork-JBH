const btn1 = document.querySelector("#button1");
const btn2 = document.querySelector("#button2");
const btn3 = document.querySelector("#button3");

// function Counter(element) {
//     this.count = 0;
//     this.element = element;
//     element.addEventListener('click', () => this.inc())
// }
// Counter.prototype.inc = function() {
//     this.count++;
//     this.element.innerHTML = this.count;
// }

class Counter {
    constructor(element) {
        this.count = 0;
        this.element = element;
        element.addEventListener('click', () => this.inc())
        element.addEventListener('keydown', () => this.dec())
        element.addEventListener('wheel', () => this.reset())
    }

    updateText(){
        this.element.innerHTML = this.count;
    }

    inc() {
        this.count++;
        updateText()
    }

    dec() {
        this.count--;
        updateText()
    }

    reset() {
        this.count = 0;
        updateText()
    }
}

const counter1 = new Counter(btn1);
const counter2 = new Counter(btn2);
const counter3 = new Counter(btn3);