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
                Queues may be implemented using linked lists or arrays. Queues have two operations, enqueue and dequeue. Enqueue adds data to the 
                back while dequeue removes and returns the data at the front of the structure. 
                There are also other ways to implement the queue such as the 
                circular buffer (circular queue), priority queues, and dequeues.
                </p>
                <p>There are several draw backs with the implementation of a queue as an array. Enqueueing is O(n) time because everything needs to be shifted in the array. This 
                    can be avoided by tracking the first occupied index in the array, but empty indices will be left in the beginning of the array. The linked list implementation can allow for O(1) enqueue and dequeue operations. If it is singly linked, a pointer at the end 
                    must be maintained for O(1) dequeueing. If it is doubly linked list, no modifications are necessary for constant time operations. 
                </p>
                <ol>Variations
                    <li>Circular buffer - Data is kept in an array with a  front and rear pointer. Data is not removed, instead the data between the front (including) and rear (excluding) pointers define the state of the queue. When they are equal, the queue is empty. When tail is one behind the head it is full. When the pointers get to the end of the array, they have to be set to the other end of the array, imitating a circle.  This is useful in cyclical functions.</li>
                    <li>Priority queue - Data entries have a priority associated with them. The entry with the highest priority will be enqueued next. If priority levels are the same, the FIFO principle is maintained.</li>
                    <li>Deque- Double ended queue that allows for enqueue and dequeue operations at either side. This structure provides many forms of implementation as it may be used as a stack, queue, or hybrid of the two. It allows for O(1) enqueue and dequeue operations at either side. </li>
                </ol>
                <p className = "p-1 px-md-5">  </p>
            </div>
            
                <Button color = "danger" className = "btn" onClick = {handleEQ}>Enqueue</Button>
                <Button color = "success" className = "btn" onClick = {handleDQ}>Dequeue</Button>
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