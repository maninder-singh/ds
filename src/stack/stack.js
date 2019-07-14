/*
* Stack implementation in javascript
* */

function Stack() {
    if (!(this instanceof Stack)) {
        return new Stack();
    }
    this._top = {}; // hold the reference of element in stack
    this._size = 0; // size of the stack
}

Stack.prototype.push = function (data) {
    this._size++;
    this._top[this._size] = data; // insert into the stack
};

Stack.prototype.pop = function () {
    if (this._size === 0) {
        // no element present in stack
        return undefined;
    }
    let data = this._top[this._size]; // get the element from stack
    delete this._top[this._size]; // delete element from stack
    this._size--;
    return data;
};

Stack.prototype.size = function () {
    return this._size; // current size of stack
};

Stack.prototype.peek = function () {
    return this._top[this._size]; // look on the current top element
};

Stack.prototype.isEmpty = function () {
    return (this._size === 0);
};
export default Stack;