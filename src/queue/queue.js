/*
* Queue implementation in javascript
* */
function Queue() {
    if (!(this instanceof Queue)) {
        return new Queue();
    }
    this._frontIndex = 0;
    this._rearIndex = 0;
    this._top = {};
}

Queue.prototype.enqueue = function (data) {
    this._rearIndex++;
    if (this._frontIndex === 0) {
        this._frontIndex += 1;
    }
    this._top[this._rearIndex] = data;
};

Queue.prototype.dequeue = function () {
    if (this.isEmpty()) {
        // queue is empty
        return null;
    }
    let data = this._top[this._frontIndex];
    delete this._top[this._frontIndex];
    this._frontIndex++;
    return data;
};

Queue.prototype.size = function () {
    if(this._rearIndex === 0 && this._frontIndex === 0){
        return 0;
    }
    return (this._rearIndex - this._frontIndex + 1);
};

Queue.prototype.peek = function () {
    return this._top[this._frontIndex] || null;
};

Queue.prototype.isEmpty = function () {
    return !this._top.hasOwnProperty(this._frontIndex);
};

export default Queue;