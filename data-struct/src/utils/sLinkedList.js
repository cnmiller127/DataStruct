import React from "react";

function Node(val) {
    //val ? this.val = val : this.val = null;
    this.val = val;
    this.next = null;
}
function sLinkedList () {
    this.list = {};
    this.list.front = null;
    this.list.rear = null;
    this.list.length = 0;
}

sLinkedList.prototype.prepend = function (val) {
    let q = new Node(val);
    if(!this.list.front) {
        this.list.front = q;
        this.list.rear = q;
        console.log("p1", this.list)
    }
    else {
        q.next = this.list.front;
        this.list.front = q;
        console.log("p2", this.list)
    }
    this.list.length++;
}
sLinkedList.prototype.append = function (val) {
    let q = new Node(val);
    console.log("q ap", q)
    if(!this.list.front){
        this.list.front = q;
        this.list.rear = q;
        console.log("ap1", this.list)
    }
    else {
        this.list.rear.next = q;
        this.list.rear = q; 
        console.log("ap2", this.list)
    }
    this.list.length++;
}

sLinkedList.prototype.delF = function (val) {
    if(this.list.front){
        let p = this.list.front;
        if(this.list.front.next) {
            this.list.front = this.list.front.next;
            this.list.length--;
        }
        else{
            this.list.front = null;
            this.list.length--;
        }
    }
}
sLinkedList.prototype.insert = function (index, val) {
    let p = this.list.front;
    let count = 0;
    if(index === 0) {
        this.prepend(val);
    }
    else if(index === this.list.length) {
        this.append(val);
    }
    else {
    while(p.next) {
        if(count === index - 1){
            let q = new Node(val);
            q.next = p.next;
            p.next = q;
            this.list.length++;
            break;
        }
        p = p.next;
        count++;
       } 
}
}

sLinkedList.prototype.delete = function (index) {
    let p = this.list.front;
    let count = 0;
    if(index === 0) {
        this.list.front = this.list.front.next; 
        this.delF();
    }
    
    while(p.next) {
        if(count === this.list.length - 2) {
            p.next = null;
            this.list.length--;
            return;
        }
        if(count === index - 1){
            let q = p.next;
            p.next = q.next;
            q.next = null; // q goes to garbage collection
            this.list.length--;
            return;
        }
        p = p.next;
        count++;
    } 
}

sLinkedList.prototype.update = function (index, val) {
    let p = this.list.front;
    let count = 0;
    console.log("IN THE WORKS UPDATE")
    while(p) {
        if(count === index) {
            p.val = val; 
            return;
        }
        p = p.next;
        count++;
    }
}



export default sLinkedList;