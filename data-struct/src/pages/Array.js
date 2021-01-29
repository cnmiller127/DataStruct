import React, {useState, useEffect, useRef} from 'react';
import ArrDraw from '../components/ArrDraw'
//import ArrComps from '../components/arrComps/arrFns';
import {Button, Form, Input, Label} from "reactstrap";
import "../Style.css";


const Array = () => {
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
    const handlePop = (e) => {
        e.preventDefault();
        setMethod("pop");
    }
    const handleInsert = (e) => {
        e.preventDefault();
        setMethod("insert");
    }
    const handleDelete = (e) => {
        e.preventDefault();
        setMethod("delete");
    }
    const handleShift = (e) => {
        e.preventDefault();
        setMethod("shift");
    }
    const handleUnshift = (e) => {
        e.preventDefault();
        setMethod("unshift");
    }
    // Methods for array mutation
    //Change for push, unshift
    const handleChange = (e) => {
        e.preventDefault();
        e.target.value ? setFormData(e.target.value) : setFormData(" ");
        
    }
    //PUSH 
    const handleEnterPush = (e) => {
        e.preventDefault();
        setArr([...arr, formData]);
        setFormData("");
        
    }
    //POP: 
    const handleEnterPop = (e) => {
        e.preventDefault();
        let temp = arr;
        temp.pop();
        setArr([...temp]);
        setFormData("");
    }
    // INSERT: 
    const handleChangeI = (e) => {
        e.preventDefault();
        e.target.value ? setInsFormData({...insFormData, index: e.target.value}) : setInsFormData({...insFormData, index: " "});
    }
    const handleChangeV = (e) => {
        e.preventDefault();
        e.target.value ? setInsFormData({...insFormData, value: e.target.value}) : setInsFormData({...insFormData, value: " "});
    }
    const handleEnterIns = (e) => {
        e.preventDefault();
        if(insFormData.index < arr.length && insFormData.value){
            console.log("INSHANDLER");
            let temp = arr;
            temp.splice(insFormData.index,0, insFormData.value);
            console.log(temp);
            setArr([...temp]);
            setFormData("");
        }
    }
    // DELETE
    
    const handleEnterDelete = (e) => {
        e.preventDefault();
        if(formData >= 0 && formData < arr.length){
        let temp = arr;
        temp.splice(formData, 1);
        setArr([...temp]);
        setFormData("");
        }
    }
    // Shift
    const handleEnterShift = (e) => {
        e.preventDefault();
        if(formData >= 0 && formData < arr.length){
        let temp = arr;
        temp.shift();
        setArr([...temp]);
        setFormData("");
        }
    }

    //Unshift
    const handleEnterUnshift = (e) => {
        e.preventDefault();
        let temp = arr;
        temp.unshift(formData);
        setArr([...temp]);
        setFormData("");
        
    }


// THIS IS OUR TEST UNIT
    useEffect(()=> {
        console.log("arr: ", arr);
        console.log("insformData", insFormData);
    },[arr, formData, , insFormData, method])
    


    return (
        <div className = "pt-2 p-1 px-md-5 py-md-3">
            <div className = "row no-gutters justify-content-center p-3">
                <h1 className = "hdr">ARRAYS</h1>
            </div>
            <ArrDraw data = {arr} />
            <Button color = "success" className = "btn" onClick = {handlePush}> Push</Button>
            <Button color = "warning" className = "btn" onClick = {handlePop}> Pop</Button>
            <Button color = "info" className = "btn" onClick = {handleInsert}> Insert</Button>
            <Button color = "danger" className = "btn" onClick = {handleDelete}> Delete</Button>
            <Button color = "secondary" className = "btn" onClick = {handleShift}> Shift</Button>
            <Button color = "primary" className = "btn" onClick = {handleUnshift}> Unshift</Button>
            {(method === "push") && (
            <Form className = "form">
                <Label>Value to push: </Label>
                <Input className = "input" onChange = {handleChange} value = {formData} type = "number"></Input>
                <Button className = "btn enterBtn" color = "dark" onClick = {handleEnterPush}>ENTER</Button>
            </Form>
            )}
            {(method === "pop") &&
                <div>
                    <Label className = "btnLabel m-1">Press Enter to pop: </Label>
                    <Button className = "btn enterBtn m-1" color = "dark" onClick = {handleEnterPop}>ENTER</Button>
                </div>
            }
            {(method === "insert") &&
                <div>
                <Form className = "form">
                    <Label className="btnLabel">Index to Insert: </Label>
                    <Input onChange = {handleChangeI} value = {formData.index} type = "number"></Input>
                    <Label>Value to Insert: </Label>
                    <Input className = "input" onChange = {handleChangeV} value = {formData.value} type = "number"></Input>
                <Button className = "btn enterBtn" color = "dark" onClick = {handleEnterIns}>ENTER</Button>
                </Form>
                </div>
            }
            {(method === "delete") &&
                <div>
                    <Form className = "form">
                        <Label className="btnLabel">Index to Delete: </Label>
                        <Input className = "input" onChange = {handleChange} value = {formData} type = "number"></Input>
                        <Button className = "btn enterBtn" color = "dark" onClick = {handleEnterDelete}>ENTER</Button>
                    </Form>  
                </div>
            }
            {(method === "shift") &&
                <div className = "justify-content-center">
                    <Label className = "btnLabel m-1 ">Press Enter to shift: </Label>
                    <Button className = "btn enterBtn m-1" color = "dark" onClick = {handleEnterShift}>ENTER</Button>
                </div>
            }
            {(method === "unshift") &&
                <div>
                    <Form className = "form">
                        <Label className="btnLabel">Value to prepend: </Label>
                        <Input className = "input" onChange = {handleChange} value = {formData} type = "number"></Input>
                        <Button className = "btn enterBtn" color = "dark" onClick = {handleEnterUnshift}>ENTER</Button>
                    </Form>
                </div>
            }
            <div className = "row no-gutters">
                <p>Arrays are objects in Javascript. Often when they are outside of local functions they are stored in the heap, but this can vary depending on the JavaScript engine implementation. Arrays are a linear arrangement of indices that contain data.
                    They are capable of storing primitive data types, other objects (including arrays), and combinations of both in JavaScript. In a lower level language like C, 
                    they can only store one primitive data type and are a fixed size. If arrays are statically allocated, they are stored in the stack memory and the size must be known at compile time.
                    If the size needs to be specified during
                    run-time, the array must be manually dynamically allocated in the heap using the malloc() function, and must be released once it is obsolete by the program using the free() function. In both languages,
                    arrays provide random access retrieval, meaning an index of an array is specified and it is accessed in constant O(1) time.</p>
                <ol> <strong>List of Array Functions </strong>
                    <li>Push- inserts new entry after last index of array</li>
                    <li>Pop - removes and returns last entry in the array</li>
                    <li>Insert -  inserts new entry at a specified index in the array</li>
                    <li>Delete - deletes an entry at a specified index in the array</li>
                    <li>Shift - deletes and returns the first entry (0th index in JS & C) of the array</li>
                    <li>Unshift - inserts new entry at the beginning of the array </li>
                </ol>
                <p>Functions that deal with the end of the array like push and pop are executed in consant time O(1). However, functions
                    that deal with the beginning of the array like shift and unshift take linear time O(n) because all of the data needs to
                    be shifted within the array. Insert and delete (splice in JS) can take O(1) to O(n) time depending on their location in the array (end of array vs. beginning of array, respectively).
                </p>
            </div>
        </div> 
        
    )
}

export default Array;