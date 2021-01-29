import React, {useRef, useState, useEffect} from 'react';
import "../Style.css";
import useWindow from "../utils/useWindow";

const ArrDraw = (props) => {
    const canvasRef = useRef(null);
    const width = window.innerWidth;
    const height = window.innerHeight;
    let x, y, w, h;
    const draw = ctx => {
        if(width >= 768){
        x = width/300;
        y = height/50;
        w = width/20;
        h = width/20;
        
        }
        else{
        x = 0;
        y = height/50;
        w = width/15;
        h = width/15;
        
        }
        ctx.fillStyle = '#000000';
        for(var i = 0; i < props.data.length; i++) {
            ctx.fillStyle = "black";
            ctx.strokeStyle = "yellow";
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.rect(x + i*w, y, w, h);
            ctx.stroke();
            ctx.fill();
            ctx.fillStyle = "yellow";
            (width >= 768) ? ctx.font = "2.5vh Arial": ctx.font = "2vh Arial";
            ctx.textAlign="center"; 
            ctx.textBaseline = "middle";
            ctx.fillText(props.data[i], x + 0.5*w + i*w, y + 0.5*h);
            (width >= 768) ? ctx.font = "2vh Arial": ctx.font = "1.5vh Arial";
            ctx.fillStyle = "black";
            ctx.fillText(i, x + 0.5*w + i*w, y + 1.3*h);
            
        }
        
      }
      
      useEffect(() => {
        
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if(width > 996 & height < 996)  {
          canvas.height = window.innerHeight*0.2;
          canvas.width = 2*window.innerWidth;
      }
      else if(width >= 768 & height >= 768)  {
          canvas.height = window.innerHeight*0.2;
          canvas.width = 2*window.innerWidth;
      }
      else if(width < 996 & height > 996)  {
          canvas.height = window.innerHeight*0.08;
          canvas.width = 2*window.innerWidth;
      }
      else if(width < 540) {
          canvas.height = window.innerHeight*.25;
          canvas.width = 3*window.innerWidth;
      }
        context.clearRect(0, 0, canvas.width, canvas.height);
        draw(context);
      }, [draw]);
    

        return ( <canvas className = "canvas" ref = {canvasRef} {...props} />)
    }


export default ArrDraw; 