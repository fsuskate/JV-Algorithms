function Node(data) {
    this.data = data;
    this.next = null;
}

function List() {
    this.root = null;
}

List.prototype.push = function (data) {
    if (this.root == null) {
        this.root = new Node(data);
        return this.root;
    }

    return this.push_internal(data, this.root);
}

List.prototype.push_internal = function (data, node) {
    if (node == null) {
        return new Node(data);        
    }

    node.next = this.push_internal(data, node.next);

    return node;
}

List.prototype.push_fast = function(data) {
    if (this.root == null) {
        this.root = new Node(data);
        return this.root;
    }
    
    this.push_non_recursive(data, this.root);
}

List.prototype.push_non_recursive = function(data, node) {
    while (node.next != null)  {
        node = node.next;
    }

    node.next = new Node(data);
}

var list = new List();
list.push(10);
list.push(5);
list.push(1);
console.log(list);

var list2 = new List();
list2.push_fast(10);
list2.push_fast(4);
list2.push_fast(3);
console.log(list2);

