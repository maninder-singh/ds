/*
 * Linked list implementation in javascript
 *
 * */

function Node(data) {
    if (!(this instanceof Node)) {
        return new Node(data);
    }
    this.data = data;
    this.next = null;
}

function LinkedList(data) {
    if (!(this instanceof LinkedList)) {
        return new LinkedList(data);
    }
    this._head = null;
    this._size = 0;
}

LinkedList.prototype.add = function (data) {
    let node = Node(data);
    if (!this._head) {
        this._head = node;
        this._size = 1;
    } else {
        let head = this._head;
        while (head.next) {
            head = head.next;
        }
        head.next = node;
        this._size += 1;
    }
};

LinkedList.prototype.remove = function (data) {
    if (this._head) {
        let previousHead = this._head,
            newHead = previousHead;
        while (newHead) {
            if (newHead.data === data) {
                if (previousHead === newHead) {
                    // first element in linked list
                    this._head = newHead.next;
                    newHead.next = null;
                    previousHead.next = null;
                } else if (!newHead.next) {
                    // last element in linked list
                    previousHead.next = null;
                    newHead = null;
                } else {
                    previousHead.next = newHead.next;
                    newHead.next = null;
                }
                this._size -= 1;
                break;
            } else {
                previousHead = newHead;
                newHead = newHead.next;
            }
        }
    }
};

LinkedList.prototype.iterate = function (callback) {
    if (this._head) {
        let head = this._head;
        while (head) {
            if (callback instanceof Function) {
                callback.call(null, head.data);
            }
            head = head.next;
        }
    }
};

LinkedList.prototype.size = function () {
    return this._size;
};

LinkedList.prototype.clear = function () {
    this._head = null;
    this._size = 0;
};

LinkedList.prototype.get = function (index) {
    if (index > this._size) {
        // index is greater than element in linked list
        return null;
    }

    if (this._head) {
        let head = this._head, _index = 0;
        while (head) {
            if (_index === index) {
                return head.data;
            }
            _index++;
            head = head.next;
        }
    }
    return null;
};

export default LinkedList;