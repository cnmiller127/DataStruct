
function Node (val){
    val ? this.val = val : this.val = null;
    val ? this.freq = this.freq = 1 : this.freq = 0; // change later
    this.left = null;
    this.right = null;
}
function Tree () { 
    this.tree = {};
    this.tree.root = new Node();
    this.tree.count = 0;
}
Tree.prototype.insert = function (val) {
    this.tree.count++; 
    console.log("INSERT: ", val)
    const rIns = (root, val, prev) => {
        if(!root.val) {
            console.log("ROOT", root);
            root.val = val;
        }    
        else if(val > root.val){
            if(root.right && root.left){
                console.log("Recursion_right");
                rIns(root.right, val, root);
            }
            else{
            right(root, val, prev, this.tree);
            }
        }
        else if(val < root.val){
            if(root.right && root.left){
                console.log("Recursion_left");
                rIns(root.left, val, root);
            }
            else{
            left(root, val, prev, this.tree);
            }
        }
    
}
    rIns(this.tree.root, val, null);
    
}

function right(root, val, prev, tree) {
    let q = new Node(val);
    console.log("bfr right ops:", root);
    if(!root.right){
        root.right = q;
        console.log("R0", root);
    }
    else{
        //Right child becomes head, new node becomes right child
        if(val > root.right.val) {
            console.log("R1", root);
            let nRoot = root.right;
            nRoot.right = q;
            nRoot.left = root;
            root.right = null;
            if(prev) {
                if(prev.val > root.val){
                    prev.left = nRoot;
                }
                else{
                    prev.right = nRoot;
                }
            }
            else {
                tree.root = nRoot;
            }

        }
        else{
            console.log("R2", root);
            q.left = root;
            q.right = root.right;
            root.right = null;
            if(prev) {
                if(prev.val > root.val){
                    prev.left = q;
                }
                else{
                    prev.right = q;
                }
            }
            else {
                tree.root = q;
            }
        }
    }
}
function left(root, val, prev, tree) {
    let q = new Node(val);
    if(!root.left){
        console.log("L0", root);
        root.left = q;
    }
    else{
        //Left child becomes head, new node becomes right 
        console.log("L1", root);
        if(val < root.left.val) {
            let nRoot = root.left;
            nRoot.left = q;
            nRoot.right = root;
            root.left = null;
            if(prev) {
                if(prev.val > root.val){
                    prev.left = nRoot;
                }
                else{
                    prev.right = nRoot;
                }
            }
            else {
                tree.root = nRoot;
            }

        }
        else{
            console.log("L2", root);
            q.right = root;
            q.left = root.left;
            root.left = null;
            if(prev) {
                if(prev.val > root.val){
                    prev.left = q;
                }
                else{
                    prev.right = q;
                }
            }
            else {
                tree.root = q;
            }
        }
    }
}

export default Tree;

