class Queue {
    constructor(startArr){
        this._queue = startArr || [];
    }
    
    getItem(){
        return this._queue.pop();
    }

    addItem(value){
        this._queue.unshift(value);
    }
}

const myQueue = new Queue([]);