function Node(data) {
    this.data = data;
    this.right = null;
    this.left = null;
}

function BST() {
    this.root = null;
}

BST.prototype.add = function(data) {
    if (this.root == null) {
        this.root = new Node(data);
        return;
    }

    this.root = this.add_internal(this.root, data);
}

// add_internal allows duplcates and allows 
// non BST to be inserted. This is for testing
// purposes
BST.prototype.add_internal = function(node, data) {
    if (node == null) {
        return new Node(data);
    }

    //if (node.data == data) {
    //    throw 'Duplicates not allowed'; 
    //}

    if (node.data >= data) {
        if (node.left == null) {
            node.left = new Node(data);
            return node;
        }
        node.left = this.add_internal(node.left, data);
        return node;
    }

    if (node.data <= data) {
        if (node.right == null) {
            node.right = new Node(data);
            return node;
        }
        node.right =  this.add_internal(node.right, data);
        return node;
    }

    return null;
}

BST.prototype.find = function(data) {
    if (this.root != null) {
        return this.find_internal(this.root, data); 
    }
    return -1;
}

BST.prototype.find_internal = function(node, data) {
    if (node == null) {
        return null;
    }

    if (node.data == data) {
        return node;
    }

    if (node.data < data) {
        return this.find_internal(node.right, data);
    }

    if (node.data > data) {
        return this.find_internal(node.left, data);
    }

    return null;
}

BST.prototype.findSmallestGreaterThan = function(data) {
    if (this.root != null) {
        return this.findSmallestGreaterThan_internal(this.root, data);
    }
    return null;
}

BST.prototype.findSmallestGreaterThan_internal = function(node, target) {
    if (node == null) {
        return null;
    }    

    if (node.data > target) {
        var result = this.findSmallestGreaterThan_internal(node.left, target);
        if (result == null) {
            // reached the end, so, this must be our node
            return node;
        }
    }

    if (node.data < target) {
        result = this.findSmallestGreaterThan_internal(node.right, target);
        if (result == null) {
            return node;
        }
    }

    return result;
}

BST.prototype.getMinValue = function() {
    var currentNode = this.root;
    var minValue = 9999999;
    while (currentNode != null) {
        if (currentNode.data < minValue) {
            minValue = currentNode.data;
        }
        currentNode = currentNode.left;
    }
    return minValue;
}

BST.prototype.getMaxValue = function() {
    var currentNode = this.root;
    var maxValue = 0;
    while (currentNode != null) {
        if (currentNode.data > maxValue) {
            maxValue = currentNode.data;
        }
        currentNode = currentNode.right;
    }
    return maxValue;
}

BST.prototype.getMax = function(node, max) {
    if (node == null) {
        return max;
    }

    if (node.data > max) {
        return this.getMax(node.right, node.data);
    } else {
        return this.getMax(node.right, max);
    }
    
    return max;
}

BST.prototype.getMin = function(node, min) {
    if (node == null) {
        return min;
    }

    if (node.data < min) {
        return this.getMin(node.left, node.data);
    } else {
        return this.getMin(node.left, min);
    }
    
    return min;
}

BST.prototype.checkBST = function() {
    if (this.root != null) {
        return this.checkBST_internal(this.root);
    }

    return 0;
}

// inefficient version of checkBST that recomputes max on 
// every recursive call
BST.prototype.checkBST_internal = function(node) {
    if (node == null) {
        return 1;
    }
    
    if (node.left != null && this.getMax(node.left, -1) >= node.data) {
        return 0;
    }

    if (node.right != null && this.getMin(node.right, 99999) <= node.data) {
        return 0;
    }

    if (!this.checkBST_internal(node.left) || !this.checkBST_internal(node.right)) {
        return 0;
    }

    return 1;
}

// bad non BST tree
var bst = new BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(4);
bst.add(5);
bst.add(7);

console.log(bst.getMinValue());
console.log(bst.getMaxValue());

console.log(bst.find(1));

console.log(bst.findSmallestGreaterThan(.5));

console.log(bst.checkBST());

// good BST tree
var bst = new BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);

console.log(bst.getMinValue());
console.log(bst.getMaxValue());

console.log(bst.find(1));

console.log(bst.findSmallestGreaterThan(.5));

console.log(bst.checkBST());