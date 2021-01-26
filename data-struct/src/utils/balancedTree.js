function Node (val){
    val ? this.val = val : this.val = null;
    val ? this.freq = this.freq = 1 : this.freq = 0; // change later
    this.left = null;
    this.right = null;
}
function bTree () { 
    this.tree = {};
    this.tree.root = new Node();
    this.tree.count = 0;
    this.tree.leftCount = 0;
    this.tree.rightCount = 0;
}
bTree.prototype.insert = function (val) {
    this.tree.count++;
    
    const rIns = (root, val, prev) => {
        console.log("INSERT: ", val)
        //console.log("LEFTCOUNT: ", leftCount(root));
        //console.log("RIGHTCOUNT: ", rightCount(root));
        if(!root.val) {
            //console.log("ROOT", root);
            root.val = val;
        } 
        else if(val > root.val){
            this.tree.rightCount++;
            if(root.right){
                //console.log("Recursion_right");
                rIns(root.right, val, root);
            }
            else{
                let q = new Node(val);
                root.right = q; 
            }
        }
        else if(val < root.val){
            this.tree.leftCount++;
            if(root.left){
                //console.log("Recursion_left");
                rIns(root.left, val, root);
            }
            else{
                let q = new Node(val);
                root.left = q; 
            }
        }
        console.log("after rIns: ", this.tree);
}
const arRight = (root, prev) => {
    let p = root;
    let val = p.val;
    let nodes = lR(root);
    if(nodes.parent !== root){
        nodes.leaf.right ? nodes.parent.left = nodes.leaf.right : nodes.parent.left = null;
    
        nodes.leaf.left = p.left;
        nodes.leaf.right = p.right; 
    }
    else {
        nodes.leaf.left = p.left;
    }
        p.right = null;
        p.left = null;
    console.log("Node.leafAfter", nodes.leaf);
    if(prev) {
        console.log("arRight prev bfr", String(prev.right.val), String(prev.left.val));
        prev.val > nodes.leaf.val ? prev.left = nodes.leaf : prev.right = nodes.leaf;
        console.log("arRight prev aftr", String(prev.right.val), String(prev.left.val));
    }
    else{
        this.tree.root = nodes.leaf;
    }
    rIns(nodes.leaf, val, prev); // IDEALLY SHOULD INSERT NODE RATHER THAN VAL IN THIS CASE SINCE NODE EXISTS
    return nodes.leaf; 
}
const arLeft = (root, prev) => {
    let p = root;
    let val = p.val; 
    let nodes = gL(root);
    if(nodes.parent !== p) {
    nodes.leaf.left ? nodes.parent.right = nodes.leaf.left : nodes.parent.right = null;
    nodes.leaf.right = p.right;
    nodes.leaf.left = p.left;
    }
    else {
        nodes.leaf.right = p.right;
    }
    p.right = null;
    p.left = null;
    p = null;
    console.log("Node.leafAfter", nodes.leaf);
    if(prev) {
        console.log("arRight prev bfr", String(prev.right.val), String(prev.left.val));
        prev.val > nodes.leaf.val ? prev.left = nodes.leaf : prev.right = nodes.leaf;
        console.log("arRight prev aftr", String(prev.right.val), String(prev.left.val));
    }
    else{
        this.tree.root = nodes.leaf;
    }
    rIns(nodes.leaf, val, prev); // IDEALLY SHOULD INSERT NODE RATHER THAN VAL IN THIS CASE SINCE NODE EXISTS

    return nodes.leaf; 

}
const balance = (root, val, prev) => {
    let rS, lS;
    if(val > root.val) {
        rS = 0;
        lS = 0;
    }
    else{
        rS = 0;
        lS = 0;
    }
    if(rightCount(root, rS) > leftCount(root, lS)+1){
        console.log("LEFTCOUNT: ", leftCount(root, lS));
        console.log("RIGHTCOUNT: ", rightCount(root, rS));
        console.log("RC ROOT: ", root);
        if(!prev){
            this.tree.root = arRight(root, prev);
            root = this.tree.root;
        }
        else{
           root = arRight(root, prev);
        }
        this.tree.rightCount--;
    }
    else if(leftCount(root, lS) > rightCount(root, rS) + 1) {
        console.log("LEFTCOUNT: ", leftCount(root, lS));
        console.log("RIGHTCOUNT: ", rightCount(root, rS));
        console.log("LC ROOT: ", root);
        if(!prev){
            this.tree.root = arLeft(root, prev);
            root = this.tree.root;
        }
        else {
            root = arLeft(root, prev);
        }
        this.tree.leftCount--;
    }
    if(root.left) {
        balance(root.left, val, root);
    }
    if(root.right) {
        balance(root.right, val, root);
    } 

}
    //HELPER FUNCTIONS
    function gL(root) {
        if(root){
            if(root.left) {
                let parent = root;
                let lC = root.left; 
                while(lC.right) {
                    parent = lC; 
                    lC = lC.right; 
                }
            return {parent: parent, leaf: lC}; 
            }
        }
    }
    function lR(root) {
        if(root){
            if(root.right){
                let rC = root.right;
                let parent = root;
                while(rC.left) {
                    parent = rC;
                    rC = rC.left; 
                }
        return {parent: parent, leaf: rC}; 
            }
        }
    }
    
    function leftCount(root, count) {
        const rlc = (root) => {
            if(root.left){
                count++;
                rlc(root.left);
            }
            if(root.right){
                count++;
                rlc(root.right);
            }
        }
        if(root){ 
            if(root.left){
                count++;
                rlc(root.left);
            }
    }
        return count; 
    }
    
    function rightCount(root, count) {
        const rlc = (root) => {
            if(root.left){
                count++;
                rlc(root.left);
            }
            if(root.right){
                count++;
                rlc(root.right);
            }
        }
        if(root){ 
            if(root.right){
                count++;
                rlc(root.right);
            }
    }
        return count; 
    }
    //MAIN: 
    rIns(this.tree.root, val, null);
    console.log("TREE preBal: ", this);
    balance(this.tree.root, val, null);
    console.log("TREE: aftrBal ", this);
}

export default bTree;

