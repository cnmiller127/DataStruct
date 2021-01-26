import React, {useState, useEffect, useRef} from 'react';
import TreeDraw from "../components/TreeDraw";
import {Button, Form, Input, Label} from "reactstrap";
import "../Style.css";
import TreeClass from "../utils/treeObj";
import bTree from "../utils/balancedTree";
var tree = new bTree();
function Tree () {
    const [method, setMethod] = useState("insert");
    const [treeSrc, setTreeSrc] = useState(tree.tree);
    const [insFormData, setInsFormData] = useState(" ")
    // Menu for selecting method
    const handleInsert = (e) => {
        e.preventDefault();
        setMethod("insert");
    }
    // Methods for tree mutation
    
    // INSERT: 
    const handleChange = (e) => {
        e.preventDefault();
        if(parseInt(e.target.value)){
        setInsFormData(parseInt(e.target.value));
        }
    }

    const handleEnterIns = (e) => {
        e.preventDefault();
        if(insFormData){
            tree.insert(insFormData);
            console.log("direct src: ", tree)
            setTreeSrc({...tree.tree});
        }
    }
  
    useEffect(()=> {
        //console.log(treeSrc);
        console.log("insformData", insFormData);
    })


// THIS IS OUR TEST UNIT
    useEffect(()=> {
        //console.log(treeSrc);
        console.log("insformData", insFormData);
    },[treeSrc, insFormData, method])
    
if(method === "insert") {
    return (
        <div>
            <div className = "row no-gutters justify-content-center p-3">
                <h1 className = "hdr">TREES</h1>
            </div>
            <div className = "row no-gutters justify-content-center p-3">
                <img className = "hdr-img tree-img" src = "https://arbordayblog.org/wp-content/uploads/2018/06/oak-tree-sunset-iStock-477164218.jpg" width = "300" height = "200"></img>
            </div>
            <div className = "row no-gutters pt-3 px-5">
                <p>The binary balanced tree consists of a hierarchy of nodes that store data. Every tree has a root node at the
                    top of the structure. <strong>In the visualizer below, </strong> 
                    the tree is operating on the condition that every parent node has 2 or less children and 
                    the parent's value is greater than its 
                    left child but less than its right child, hence the name: balanced binary tree. The tree stays balanced by keeping track 
                    of how many nodes are present on each side of the tree its sub-tree. A sub-tree may start at any node in the tree other than the root, and includes every 
                    descendent below it. The purpose 
                    of this balancing act is to keep as many nodes in the tree in the binary structure of having a parent and two children as possible. 
                    This allows us to recursively iterate through the tree in O(log n) time, which is faster than O(n) linnear time, which would occur if 
                    the nodes were ordered in a unary structure (i.e arrays).</p>
                    <p>Notice for each level (K) of the tree, the number of nodes increases from the level above it by a factor of two. 
                        Total Nodes(N) = 2<sup>0</sup> + 2<sup>1</sup> + 2<sup>2</sup> + 2<sup>3</sup>... + 2<sup>K</sup>. This
                        simplifies to Total Nodes(N) = 2<sup>K</sup> + 1, where K = 0  at the root node and increases by 1 every
                        level down the tree. 
                    </p>
                    <p>This tree was created in Javascript by creating an object (node) that has a value property, and two other properties that point to its left and right children. Objects are created in the heap memory in Javascript which means they are call by reference.
                        If using C/C++, memory needs to be manually dynamicaly allocated in the heap. Nodes would be created in the heap that point to their children. When accessing information from the tree, a pointer to the address of the root node must be used.
                    </p>
            </div>
            <div className = "row no-gutters px-5">
                <Button color = "info" className = "btn" onClick = {handleInsert}> Insert</Button>
            </div>
            <div className = "row no-gutters px-5">
                <Form className = "form">
                    <Label>Value to Insert: </Label>
                    <Input className = "input" onChange = {handleChange} ></Input>
                    <Button className = "btn" onClick = {handleEnterIns}>Enter</Button>
                </Form>
            </div>
            <div className = "row no-gutters">
                <TreeDraw data = {treeSrc} />
            </div>
        </div>
    )
}


}


export default Tree; 