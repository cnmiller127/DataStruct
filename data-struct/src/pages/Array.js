import React, {useState, useEffect, useRef} from 'react';
import ArrDraw from '../components/ArrDraw'
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
    const handleInsert = (e) => {
        e.preventDefault();
        setMethod("insert");
    }
    const handleDelete = (e) => {
        e.preventDefault();
        setMethod("delete");

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
    // INSERT: 
    const handleChangeI = (e) => {
        e.preventDefault();
        e.target.value ? setInsFormData({...insFormData, index: parseInt(e.target.value)}) : setInsFormData({...insFormData, index: " "});
        
    }
    const handleChangeV = (e) => {
        e.preventDefault();
        e.target.value ? setInsFormData({...insFormData, value: parseInt(e.target.value)}) : setInsFormData({...insFormData, value: " "});
    }
    const handleEnterIns = (e) => {
        e.preventDefault();
        if(insFormData.index < arr.length && insFormData.value){
            console.log("INSHANDLER");
            let temp = arr;
            temp.splice(insFormData.index,0, insFormData.value);
            console.log(temp);
            setArr([...temp]);
        }
    }
    // DELETE
    
    const handleEnterDelete = (e) => {
        e.preventDefault();
        if(formData >= 0 && formData < arr.length){
        let temp = arr;
        temp.splice(formData, 1);
        setArr([...temp]);
        }
    }


// THIS IS OUR TEST UNIT
    useEffect(()=> {
        console.log("arr: ", arr);
        console.log("insformData", insFormData);
    },[arr, formData, , insFormData, method])
    

if(method === "push") {
    return (
        <div >
            <ArrDraw data = {arr} />
            <Button color = "success" className = "btn" onClick = {handlePush}> Push</Button>
            <Button color = "warning" className = "btn" onClick = {handlePop}> Pop</Button>
            <Button color = "info" className = "btn" onClick = {handleInsert}> Insert</Button>
            <Button color = "danger" className = "btn" onClick = {handleDelete}> Delete</Button>
            <Form className = "form">
                <Label>Value to push: </Label>
                <Input className = "input" onChange = {handleChange} value = {formData}></Input>
                <Button className = "btn" onClick = {handleEnterPush}>Enter</Button>
            </Form>
        </div>
    )
}
if(method === "insert") {
    return (
        <div>
            <ArrDraw data = {arr} />
            <Button color = "success" className = "btn" onClick = {handlePush}> Push</Button>
            <Button color = "warning" className = "btn" onClick = {handlePop}> Pop</Button>
            <Button color = "info" className = "btn" onClick = {handleInsert}> Insert</Button>
            <Button color = "danger" className = "btn" onClick = {handleDelete}> Delete</Button>
            <Form className = "form">
                <Label>Index to Insert: </Label>
                <Input onChange = {handleChangeI} value = {formData.index}></Input>
                <Label>Value to Insert: </Label>
                <Input className = "input" onChange = {handleChangeV} value = {formData.value}></Input>
                <Button className = "btn" onClick = {handleEnterIns}>Enter</Button>
            </Form>
        </div>
    )
}
if(method === "delete") {
    return (
        <div>
            <ArrDraw data = {arr} />
            <Button color = "success" className = "btn" onClick = {handlePush}> Push</Button>
            <Button color = "warning" className = "btn" onClick = {handlePop}> Pop</Button>
            <Button color = "info" className = "btn" onClick = {handleInsert}> Insert</Button>
            <Button color = "danger" className = "btn" onClick = {handleDelete}> Delete</Button>
            <Form className = "form">
                <Label>Index to Delete: </Label>
                <Input className = "input" onChange = {handleChange} value = {formData}></Input>
                <Button className = "btn" onClick = {handleEnterDelete}>Enter</Button>
            </Form>
        </div>
    )
}

}

export default Array;