import React, {useState, useEffect, useRef} from 'react';
import StackDraw from '../components/StackDraw'
import {Button, Form, Input, Label} from "reactstrap";
import "../Style.css";


const Stack = () => {
    let arrSource = [];
    for(let i = 0; i < 10; i++) {
        arrSource.push(Math.floor(Math.random() *20));
    }
    const [method, setMethod] = useState("push");
    const [arr, setArr] = useState(arrSource);
    const [formData, setFormData] = useState(" ");
    const [insFormData, setInsFormData] = useState({index: null, value: null})
    // Menu for selecting method
    const handlePush = (e) => {
        e.preventDefault();
        setMethod("push");
    }
    
    // Methods for array mutation
    //PUSH:
    const handleChange = (e) => {
        e.preventDefault();
        e.target.value ? setFormData(e.target.value) : setFormData(" ");
        
    }
    const handleEnterPush = (e) => {
        e.preventDefault();
        setArr([...arr, formData]);
        
    }
    //POP: 
    const handlePop = (e) => {
        e.preventDefault();
        let temp = arr;
        temp.pop();
        setArr([...temp]);
    }
   
// THIS IS OUR TEST UNIT
    useEffect(()=> {
        console.log("arr: ", arr);
        console.log("insformData", insFormData);
    },[arr, formData, , insFormData, method])
    


    return (
        <div className = "px-2 py-3" >
            <div className = "row no-gutters justify-content-center p-3">
                <h1 className = "hdr">STACKS</h1>
            </div>
            <div className = "row no-gutters justify-content-center">
                <img className = "dish hdr-img" src = "https://images.crateandbarrel.com/is/image/Crate/LoganStackingDinnerPlateWhiteS8SHF15"/>
                <p className = "pt-3 px-5">The Stack operates on the Last In First Out (LIFO) principle. 
                This is analagous to a stack of dishes where the last plate put on the top of the stack is the first 
                plate to be used later. They are useful for converting infix expressions to postfix, backtracking 
                algorithms, and many other functions.</p>
                <p className = "px-5">The push and pop methods are typically O(1) in Javascript. Worst case occurs when 
                size boundaries are encountered and the array needs to be copied to different sized array to 
                accomodate for change which is O(n) time. 
                In C, both functions are O(1) time if implementing the stack using an array. If using a linked list, the 
                list should be flipped so the start is the top of the stack to make it O(1) time rather than traversing 
                to the end of the list which is O(n) time.  </p>
            </div>
            <div className = "row no-gutters" >
                <div className = "col-3">
            </div>
            <div className = "col-4 pr-5 justify-content-end">
                    <Button color = "success" className = "btn" onClick = {handlePush}> Push</Button>
                    <Button color = "warning" className = "btn" onClick = {handlePop}> Pop</Button>
                    <Form className = "">
                        <Label>Value to push: </Label>
                        <Input className = "input" onChange = {handleChange} value = {formData}></Input>
                        <Button className = "btn" onClick = {handleEnterPush}>Enter</Button>
                    </Form>
                </div>
                <div className = "col-3 justify-content-start">
                    <StackDraw data = {arr} />
                </div>
                <div className = "col-2">
                </div>
            </div>
        </div>
    )
}


export default Stack;