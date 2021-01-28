import React, {useRef, useState, useEffect} from 'react';
import "../Style.css";
import useWindow from "../utils/useWindow";

const QueueDraw = (props) => {
    const canvasRef = useRef(null);
    const width = window.innerWidth;
    const height = window.innerHeight;
    let x, y, w, h;
    const draw = ctx => {
        if(width >=  768 && height > 998) {
            x = width/75;
            y = height/50;
            w = width/20;
            h = width/10;
        }
        else if(width >= 768){
        x = width/20;
        y = height/50;
        w = width/25;
        h = width/15;
        }
        else{
        x = width/20;
        y = height/50;
        w = width/16;
        h = width/12;
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
            (width >= 768) ? ctx.font = "1.2vh Arial": ctx.font = "1vh Arial";
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
        
        if(width > 996 & height < 996)  {
            canvas.height = window.innerHeight;
            canvas.width = 2*window.innerWidth;
        }
        else if(width >= 768 & height >= 768)  {
            canvas.height = window.innerHeight;
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


export default QueueDraw; 