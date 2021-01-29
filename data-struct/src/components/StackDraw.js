import React, {useRef, useState, useEffect} from 'react';
import "../Style.css";
import useWindow from "../utils/useWindow";

const StackDraw = (props) => {
    const canvasRef = useRef(null);
    const width = window.innerWidth;
    const height = window.innerHeight;
    let x, y, w, h;
    const draw = ctx => {
      if(width >= 768 && height > 998) {
        x = width/50;
        y = height/50;
        w = width/8;
        h = height/25;
    }
    else if(width >= 768){
    x = width/50;
    y = height/50;
    w = width/25;
    h = width/20;
    }
    else if(width < 768 && width > 540){
        x = width/50;
        y = height/50;
        w = width/10;
        h = width/15;
        }
    else{
    x = width/20;
    y = height/50;
    w = width/6;
    h = width/10;    
    }
        ctx.fillStyle = '#000000';
      if(height >= 998) {
        ctx.font = "18px Arial";
      }
      else if (height < 998 && height >= 540) {
          ctx.font = "16px Arial";
      }
      else {
          ctx.font = "12px Arial";
      }
        for(var i = props.data.length - 1; i >= 0; i--) {
            let opp = props.data.length - 1 - i; 
            ctx.beginPath();
            ctx.rect(x, y + opp*h, w, h);
            if(i === props.data.length - 1) {
              ctx.fillStyle = "gold";
              ctx.fill();
            }
            else{
              ctx.fillStyle = "white";
              ctx.fill();
            }
            ctx.stroke();
            ctx.textAlign="center"; 
            ctx.textBaseline = "middle";
            ctx.fillStyle = "black";
            ctx.fillText(props.data[i], x + 0.5*w, y + 0.5*h + opp*h);
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