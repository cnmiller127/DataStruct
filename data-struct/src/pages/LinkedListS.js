import React, {useState, useEffect, useRef} from 'react';
import {Button, Form, Input, Label} from "reactstrap";
import "../Style.css";
import List from "../utils/sLinkedList";
import ListDrawS from '../components/ListDrawS';

var listSrc = new List();
for(let i = 0; i < 10; i++) {
    listSrc.prepend(Math.floor(Math.random()*20));
}
function LinkedListS (props)  {
    const [method, setMethod] = useState("prepend");
    const [list, setList] = useState(listSrc.list);
    const [formData, setFormData] = useState("");
    const [insFormData, setInsFormData] = useState({index: "", value: ""})
    // Menu for selecting method
    const handleAppend = (e) => {
        e.preventDefault();
        setMethod("append");
    }
    const handlePrepend = (e) => {
        e.preventDefault();
        setMethod("prepend");
    }
    const handleInsert = (e) => {
        e.preventDefault();
        setMethod("insert");
    }
    const handleDelete = (e) => {
        e.preventDefault();
        setMethod("delete");
    }
    const handleDelF = (e) => {
        e.preventDefault();
        setMethod("delF");
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        setMethod("update");
    }
    // Methods for array mutation
    //Change for push, unshift
    const handleChange = (e) => {
        e.preventDefault();
        e.target.value ? setFormData(e.target.value) : setFormData("");
        
    }
    //Append
    const handleEnterAppend = (e) => {
        e.preventDefault();
        if(formData){
            listSrc.append(formData);
            setList({...listSrc.list});
            setFormData("");
        }
        else {
            setFormData("Invalid Entry")
        }
        
    }
    //PRepend: 
    const handleEnterPrepend = (e) => {
        e.preventDefault();
        if(formData){
            listSrc.prepend(formData);
            setList({...listSrc.list});
            setFormData("");
        }
        else {
            setFormData("Invalid Entry")
        }
    }
    // INSERT: 
    const handleChangeI = (e) => {
        e.preventDefault();
        e.target.value ? setInsFormData({...insFormData, index: Number(e.target.value)}) : setInsFormData({...insFormData, index: " "});
    }
    const handleChangeV = (e) => {
        e.preventDefault();
        e.target.value ? setInsFormData({...insFormData, value: Number(e.target.value)}) : setInsFormData({...insFormData, value: " "});
    }
    const handleEnterIns = (e) => {
        e.preventDefault();
        if(insFormData.index >= 0 && insFormData.index <= list.length){
            listSrc.insert(insFormData.index, insFormData.value);
            setList({...listSrc.list});
            setInsFormData({index: "", value: ""});
        }
        else {
            setInsFormData({...insFormData, index: "Invalid Entry", value: ""})
        }
    }
    // DELETE
    
    const handleEnterDelete = (e) => {
        e.preventDefault();
        if(formData){
            if(formData >= 0 && formData < list.length){
                listSrc.delete(formData);
                setList({...listSrc.list});
                setFormData("");
            }
            else {
                setFormData("INV!")
            }
        }
    }
    // Delete first node
    const handleEnterDelF = (e) => {
        e.preventDefault();
            listSrc.delF();
            setList({...listSrc.list});
            setFormData("");
    }

    //Update
    const handleEnterUpdate = (e) => {
        e.preventDefault();
        if(insFormData.index >= 0 && insFormData.index < list.length){
            console.log(Number(insFormData.index))
            listSrc.update(insFormData.index, insFormData.value);
            setList({...listSrc.list});
            setInsFormData({index: "", value: ""});
        }
        
        else {
            setInsFormData({...insFormData, index: "Invalid Entry", value: ""})
        }
}
// THIS IS OUR TEST UNIT
    useEffect(()=> {
        console.log("list: ", list);
        console.log("insformData", insFormData);
    },[list, formData, , insFormData, method])
    


    return (
        <div className = "pt-2 p-1 px-md-5 py-md-3">
            <div className = "row no-gutters justify-content-center p-3">
                <h1 className = "hdr">LINKED LISTS</h1>
            </div>
            <ListDrawS data = {list} />
            <Button color = "success" className = "btn" onClick = {handlePrepend}>Prepend</Button>
            <Button color = "primary" className = "btn" onClick = {handleDelF}> Delete First Node</Button>
            <Button color = "info" className = "btn" onClick = {handleInsert}> Insert</Button>
            <Button color = "danger" className = "btn" onClick = {handleDelete}> Delete</Button>
            <Button color = "secondary" className = "btn" onClick = {handleAppend}>Append</Button>
            <Button color = "success" className = "btn" onClick = {handleUpdate}> Update</Button>
            
            {(method === "prepend") && (
            <Form className = "form" onSubmit = {handleEnterPrepend}>
                <Label>Value to prepend: </Label>
                <Input className = "input" onChange = {handleChange} value = {formData} type = "number"></Input>
                <Button className = "btn enterBtn" color = "dark" onClick = {handleEnterPrepend}>ENTER</Button>
            </Form>
            )}
            {(method === "delF") &&
                <div>
                    <Label className = "btnLabel m-1">Press Enter to delete first node: </Label>
                    <Button className = "btn enterBtn m-1" color = "dark" onClick = {handleEnterDelF}>ENTER</Button>
                </div>
            }
            {(method === "insert") &&
                <div>
                <Form className = "form" onSubmit = {handleEnterIns}>
                    <Label className="btnLabel">Index to Insert: </Label>
                    <Input onChange = {handleChangeI} value = {insFormData.index} type = "number"></Input>
                    <Label>Value to Insert: </Label>
                    <Input className = "input" onChange = {handleChangeV} value = {insFormData.value} type = "number"></Input>
                <Button className = "btn enterBtn" color = "dark" onClick = {handleEnterIns}>ENTER</Button>
                </Form>
                </div>
            }
            {(method === "delete") &&
                <div>
                    <Form className = "form" onSubmit = {handleEnterDelete}>
                        <Label className="btnLabel">Index to Delete: </Label>
                        <Input className = "input" onChange = {handleChange} value = {formData} type = "number"></Input>
                        <Button className = "btn enterBtn" color = "dark" onClick = {handleEnterDelete}>ENTER</Button>
                    </Form>  
                </div>
            }
            {(method === "append") &&
                <div className = "justify-content-center">
                    <Label className = "btnLabel m-1 ">Press Enter to append: </Label>
                    <Input className = "input" onChange = {handleChange} value = {formData} type = "number"></Input>
                    <Button className = "btn enterBtn m-1" color = "dark" onClick = {handleEnterAppend}>ENTER</Button>
                </div>
            }
            {(method === "update") &&
                <div>
                    <Form className = "form" onSubmit = {handleEnterUpdate}>
                        <Label className="btnLabel">Index to Update: </Label>
                        <Input onChange = {handleChangeI} value = {insFormData.index} type = "number"></Input>
                        <Label>Updated value: </Label>
                        <Input className = "input" onChange = {handleChangeV} value = {insFormData.value} type = "number"></Input>
                        <Button className = "btn enterBtn" color = "dark" onClick = {handleEnterUpdate}>ENTER</Button>
                    </Form>
                </div>
            }
            <div className = "row no-gutters">
                <p>Linked Lists are linear data structures where nodes are joined together with pointers. They can be singly or doubly linked. In a singly
                    linked list, nodes only have pointers to the next node while doubly linked lists have pointers to both the
                    previous and next node. Singly linked lists use less memory because each node has just one pointer, but doubly linked lists allow for bi-directional
                    traversal which is more efficient for accessing data towards the end of the list. In both lists, accessing the first node is O(1) time,
                    but in a singly linked list, accessing data towards the end of this list is roughly O(n) time due to traversing from the first node.
                    In a doubly linked list, pointers can be placed at the front and end of the list, so it is O(1) time to access the first and last nodes. It is also possible
                    to link the rear of the list to the front to create a circular linked list. This can be implemented on singly and doubly linked lists. Circular lists can be implemented
                    without any pointers to null which means less edge cases. It can be difficult to know which part of the list is being referenced with the circular implementation.
                </p>
                <p>Linked lists and arrays are both linear data structures but they have certain pros and cons. 
                    In lower level languages like C, Linked lists are dynamic so memory can be allocated in run time to create a list of any size  (unless heap is full). They can also store non-primitive data types.
                    Linked lists require more memory than arrays because of the extra space required for two pointers in each node.  
                    Arrays are of a fixed size, and store primitive data types only, but they do provide O(1) random access when extracting data at a specified index. Linked lists 
                    require sequential access meaning the list needs to be traversed until the node is found with the correct data (worst case O(n)).
                    Linked lists are more efficient at insert and delete operations because all of the data does not need to be shifted, and removed nodes are freed from memory.
                    </p>
                <ol> <strong>List of Linked List Operations </strong>
                    <li>Prepend- inserts new node at beginning of list</li>
                    <li>Append - insert new node at end of list</li>
                    <li>Insert -  inserts new node at a specified node in the list</li>
                    <li>Delete - deletes a node at a specified node in the list</li>
                    <li>Update - data is updated in a specified node</li>
                    <li>Search - locates a specified piece of data and returns it</li>
                </ol>
            </div>
        </div> 
        
    )

}

export default LinkedListS;