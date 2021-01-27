import React, {useRef, useState, useEffect} from 'react';
import "../Style.css";
import useWindow from "../utils/useWindow";

const ArrDraw = (props) => {
    const canvasRef = useRef(null);
    const [width, height] = useWindow();
    let x, y, w, h;
    const draw = ctx => {
        if(width >= 768){
        x = width/300;
        y = height/50;
        w = width/40;
        h = width/40;
        
        }
        else{
        x = 0;
        y = height/50;
        w = width/15;
        h = width/15;
        
        }
        ctx.fillStyle = '#000000';
        for(var i = 0; i < props.data.length; i++) {
            
            ctx.beginPath();
            ctx.rect(x + i*w, y, w, h);
            ctx.stroke();
            (width >= 768) ? ctx.font = "2.5vh Arial": ctx.font = "2vh Arial";
            ctx.textAlign="center"; 
            ctx.textBaseline = "middle";
            ctx.fillText(props.data[i], x + 0.5*w + i*w, y + 0.5*h);
            (width >= 768) ? ctx.font = "2vh Arial": ctx.font = "1.5vh Arial";
            ctx.fillText(i, x + 0.5*w + i*w, y + 1.3*h);
            
        }
        
      }
      
      useEffect(() => {
        
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = 0.1*window.innerHeight;
        // canvas.style.width = window.innerWidth;
        // canvas.style.height = 0.6*window.innerHeight;
        //context.clearRect(0,0,canvas.width, canvas.height);
        
        draw(context);
      }, [draw]);
    

        return ( <canvas className = "canvas" ref = {canvasRef} {...props} />)
    }


export default ArrDraw; 