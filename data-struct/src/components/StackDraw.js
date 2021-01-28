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
        w = width/8;
        h = width/50;
        
        }
        else{
        x = width/20;
        y = height/50;
        w = width/8;
        h = width/16;
        
        }
        ctx.fillStyle = '#000000';
        for(var i = props.data.length - 1; i >= 0; i--) {
            let opp = props.data.length - 1 - i; 
            ctx.beginPath();
            ctx.rect(x, y + opp*h, w, h);
            ctx.stroke();
            (width >= 768) ? ctx.font = "2.5vh Arial": ctx.font = "2vh Arial";
            ctx.textAlign="center"; 
            ctx.textBaseline = "middle";
            ctx.fillText(props.data[i], x + 0.5*w, y + 0.5*h + opp*h);
            (width >= 768) ? ctx.font = "2vh Arial": ctx.font = "1.5vh Arial";
            ctx.fillText(i, 0.5*x, y + 0.5*h + opp*h);
            
        }
        
      }
      
      useEffect(() => {
        
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = 0.3*window.innerWidth;
        canvas.height = window.innerHeight;
        context.clearRect(0, 0, canvas.width, canvas.height);
        draw(context);
      }, [draw]);
    

        return ( <canvas className = "canvas stkCanvas" ref = {canvasRef} {...props} />)
    }


export default StackDraw; 