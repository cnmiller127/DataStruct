import React, {useState, useEffect, useRef} from 'react';
import QueueDraw from '../components/QueueDraw'
import {Button, Form, Input, Label} from "reactstrap";
import "../Style.css";


const Queue = () => {
    let arrSource = [];
    for(let i = 0; i < 10; i++) {
        arrSource.push(Math.floor(Math.random() *20));
    }
    const [method, setMethod] = useState("enQ");
    const [arr, setArr] = useState(arrSource);
    const [formData, setFormData] = useState(" ");
    const [insFormData, setInsFormData] = useState({index: null, value: null})
    // Menu for selecting method
    const handleEQ = (e) => {
        e.preventDefault();
        setMethod("enQ");
    }
    const handleDQ = (e) => {
        e.preventDefault();
        setMethod("dQ");
    }
    
    // Methods for array mutation
    //Enqueue:
    const handleChange = (e) => {
        e.preventDefault();
        e.target.value ? setFormData(e.target.value) : setFormData(" ");
    }
    const handleEnterEQ = (e) => {
        e.preventDefault();
        let temp = arr;
        temp.unshift(formData);
        setArr([...temp]);
        setFormData("");
        
    }
    //Dequeue: 
    const handleEnterDQ = (e) => {
        e.preventDefault();
        let temp = arr;
        temp.pop();
        setArr([...temp]);
        setFormData("");
    }
   
// THIS IS OUR TEST UNIT
    useEffect(()=> {
        console.log("arr: ", arr);
        console.log("insformData", insFormData);
    },[arr, formData, , insFormData, method])
    


    return (
        <div className = "px-2 py-3" >
            <div className = "row no-gutters justify-content-center p-3">
                <h1 className = "hdr">Queue</h1>
            </div>
            <div className = "row no-gutters justify-content-center" >
                <img className = "rounded img-hdr img-fluid" src = "https://img.freepik.com/free-vector/people-line-waiting-pay_23-2148206445.jpg?size=626&ext=jpg"/>
            </div>
            <div className = "row no-gutters justify-content-center">
                <p className = "pt-2 px-1 pt-md-3 px-md-5">The Queue operates on the First In First Out (FIFO) principle.
                Queues may be implemented using linked lists or arrays. Queues have two functions, enqueue and dequeue. Enqueue adds data to the 
                back while dequeue removes and returns the data at the front of the structure. 
                There are also other ways to implement the queue such as the 
                circular queue.
                </p>
                <p className = "p-1 px-md-5">  </p>
            </div>
            
                <Button color = "success" className = "btn" onClick = {handleEQ}>Enqueue</Button>
                <Button color = "warning" className = "btn" onClick = {handleDQ}>Dequeue</Button>
                <div className = "row no-gutters" >
                {(method === "enQ") && (
                <Form className = "form">
                    <Label>Value to enqueue: </Label>
                    <Input className = "input" onChange = {handleChange} value = {formData} type = "number"></Input>
                    <Button className = "btn enterBtn" color = "dark" onClick = {handleEnterEQ}>ENTER</Button>
                </Form>
                )}
                {(method === "dQ") &&
                    <div className = "">
                        <Label className = "btnLabel">Press Enter to dequeue: </Label>
                        <Button className = "btn enterBtn" color = "dark" onClick = {handleEnterDQ}>ENTER</Button>
                    </div>
                }
                <div className = "row no-gutters justify-content-center p-md-3">
                    <QueueDraw data = {arr} />
                </div>
            </div>
        </div>
    )
}


export default Queue;