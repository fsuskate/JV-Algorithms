function Node(data) {
    this.data = data;
    this.right = null;
    this.left = null;
}

function BST() {
    this.root = null;
}

BST.prototype.push_internal = function(node, data) {
    if (node == null) {
        node = new Node(data);        
    }

    if (data > node.data) {
        node.right = this.push_internal(node.right, data);
    } else if (data < node.data) {
        node.left = this.push_internal(node.left, data);
    }

    return node;
}

BST.prototype.push = function(data) {
    this.root = this.push_internal(this.root, data);
}

BST.prototype.traverse_internal = function(node) {
    if (node == null) {
        return;
    }

    this.traverse_internal(node.left);

    console.log(node.data);

    this.traverse_internal(node.right);
}

BST.prototype.traverse = function() {
    this.traverse_internal(this.root);
}

BST.prototype.reverse_internal = function(node) {
    if (node == null) {
        return;
    }

    this.reverse_internal(node.right);

    console.log(node.data);

    this.reverse_internal(node.left);
}

BST.prototype.reverse = function() {
    this.reverse_internal(this.root);
}

var bst = new BST();
for (var i = 0; i < 10; i++) {
    var num = Math.random();
    num = (num * 100) - (num * 100 % 1)
    bst.push(num);
}

bst.traverse();

bst.reverse();

var bstString = new BST();
bstString.push("Liz");
bstString.push("Cisco");
bstString.push("Marisol");
bstString.push("Jake");
bstString.push("Tyler");
bstString.push("Albert");
bstString.push("Walker");
bstString.push("Brenda");
bstString.traverse();
bstString.reverse();

