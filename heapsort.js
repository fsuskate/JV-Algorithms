var PQ_SIZE = 100;

function PriorityQueue() {
    this.body = [PQ_SIZE];
    this.numberOfElements = 0;
}

PriorityQueue.prototype.Parent = function(n) {
    if (n == 1) return -1;
    else return Math.floor(n/2);
}

PriorityQueue.prototype.YoungChild = function(n) {
    return 2 * n;
}

var pq = new PriorityQueue();
console.log(pq.Parent(5));
console.log(pq.YoungChild(5));

