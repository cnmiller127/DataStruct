import React, {useRef, useState, useEffect} from 'react';
import "../Style.css";
import useWindow from "../utils/useWindow";

const QueueDraw = (props) => {
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
        for(var i = props.data.length - 1; i >= 0; i--) {
            let opp = props.data.length - 1 - i;
            ctx.beginPath();
            ctx.rect(x + opp*w, y, w, h);
            ctx.stroke();
            (width >= 768) ? ctx.font = "2.5vh Arial": ctx.font = "2vh Arial";
            ctx.textAlign="center"; 
            ctx.textBaseline = "middle";
            ctx.fillText(props.data[i], x + 0.5*w + opp*w, y + 0.5*h);
            (width >= 768) ? ctx.font = "2vh Arial": ctx.font = "1.5vh Arial";
            if(i === props.data.length - 1){
                ctx.fillText("FIRST", x + 0.5*w + opp*w, y + 1.3*h);
            }
            else if(i === 0) {
                ctx.fillText("LAST", x + 0.5*w + opp*w, y + 1.3*h);
            }
            
        }
        
      }
      
      useEffect(() => {
        
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = 0.1*window.innerHeight;
        draw(context);
      }, [draw]);
    

        return ( <canvas className = "canvas" ref = {canvasRef} {...props} />)
    }


export default QueueDraw; 