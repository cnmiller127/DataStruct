import React, {useRef, useState, useEffect} from 'react';
import "../Style.css";
import useWindow from "../utils/useWindow";

const StackDraw = (props) => {
    const canvasRef = useRef(null);
    const [width, height] = useWindow();
    let x, y, w, h;
    const draw = ctx => {
        if(width >= 768){
        x = width/50;
        y = height/50;
        w = width/30;
        h = width/30;
        
        }
        else{
        x = width/50;
        y = height/50;
        w = width/12;
        h = width/12;
        
        }
        ctx.fillStyle = '#000000';
        for(var i = props.data.length - 1; i >= 0; i--) {
            let opp = props.data.length - 1 - i; 
            ctx.beginPath();
            ctx.rect(x, y + opp*h, w, h);
            ctx.stroke();
            (width >= 768) ? ctx.font = "3vh Arial": ctx.font = "2vh Arial";
            ctx.textAlign="center"; 
            ctx.textBaseline = "middle";
            ctx.fillText(props.data[i], x + 0.5*w, y + 0.5*h + opp*h);
            ctx.font = "2vh Arial";
            ctx.fillText(i, 0.5*x, y + 0.5*h + opp*w);
            
        }
        
      }
      
      useEffect(() => {
        
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = 0.3*window.innerWidth;
        canvas.height = window.innerHeight;
        // canvas.style.width = window.innerWidth;
        // canvas.style.height = 0.6*window.innerHeight;
        //context.clearRect(0,0,canvas.width, canvas.height);
        
        draw(context);
      }, [draw]);
    

        return ( <canvas className = "canvas stkCanvas" ref = {canvasRef} {...props} />)
    }


export default StackDraw; 