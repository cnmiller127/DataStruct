import React, {useState, useEffect, useRef} from 'react';
import TreeDraw from "../components/TreeDraw";
import {Button, Form, Input, Label} from "reactstrap";
import "../Style.css";
import TreeClass from "../utils/treeObj";

function Tree () {
    let tree = new TreeClass();
    tree.insert(6);
    tree.insert(11);
    tree.insert(3);
    tree.insert(1);
    tree.insert(5);
    tree.insert(9);
    tree.insert(11);
    tree.insert(4);
    tree.insert(2);
    tree.insert(7);
    tree.insert(8);
    tree.insert(10);
    tree.insert(12);
    //____BASIC TREE:
    // tree.insert(1);
    // tree.insert(3);
    // tree.insert(5);
    // tree.insert(8);
    // tree.insert(9);
    // tree.insert(10);
    const [method, setMethod] = useState("insert");
    const [treeSrc, setTreeSrc] = useState({...tree.tree});
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
  


// THIS IS OUR TEST UNIT
    useEffect(()=> {
        //console.log(treeSrc);
        console.log("insformData", insFormData);
    },[treeSrc, insFormData, method])
    
if(method === "insert") {
    return (
        <div>
            <Button color = "info" className = "btn" onClick = {handleInsert}> Insert</Button>
            <Form className = "form">
                <Label>Value to Insert: </Label>
                <Input className = "input" onChange = {handleChange} ></Input>
                <Button className = "btn" onClick = {handleEnterIns}>Enter</Button>
            </Form>
            <TreeDraw data = {treeSrc} />
        </div>
    )
}


}


export default Tree; 