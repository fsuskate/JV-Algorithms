function Stack() {
    this.array = [];
    this.count = 0;
    this.current = -1;
}

Stack.prototype.push = function (data) {
    this.array.push(data);
    this.count++;
    this.current++;
}

Stack.prototype.pop = function() {
    this.count--;
    var value = this.array[this.current];
    this.array[this.current] = null;
    this.current--;
    return value;
}

Stack.prototype.peek = function() {
    return this.array[this.current];
}

Stack.prototype.printAll = function() {
    for (var i = 0; i < this.count; i++) {
        console.log(this.array[i]);
    }
}

Stack.prototype.count = function() {
    return this.count;
}

var s = new Stack(10);
s.push(10);
s.push(5);
s.push(1);
console.log(s);

console.log(s.peek());
s.printAll();

console.log(s.pop());
console.log(s.pop());
console.log(s.pop());


function Queue() {
    this.array = [];
    this.count = 0;
    this.front = 0;
}

Queue.prototype.push = function (data) {
    this.array.push(data);
    this.count++; 
}

Queue.prototype.pop = function() {
    this.count--;
    var value = this.array[this.front];
    this.array[this.front] = null;
    this.front++;
    return value;
}

Queue.prototype.peek = function() {
    return this.array[this.front];
}

Queue.prototype.printAll = function() {
    for (var i = this.front; i < this.count; i++) {
        console.log(this.array[i]);
    }
}

Queue.prototype.count = function() {
    return this.count;
}

var q = new Queue(10);
q.push(10);
q.push(5);
q.push(1);
console.log(q);

console.log(q.peek());
q.printAll();


console.log(q.pop());
console.log(q.pop());
console.log(q.pop());