import React, {useRef, useState, useEffect} from 'react';
import "../Style.css";
import useWindow from "../utils/useWindow";

const ListDrawS = (props) => {
    const canvasRef = useRef(null);
    const width = window.innerWidth;
    const height = window.innerHeight;
    let x, y, w, h, lw, al;
    let arrowAng = 20 * Math.PI/180;
    const draw = ctx => {
        // Ipad
        if(width >= 768 && height > 998) {
            x = width/300;
            y = height/50;
            w = width/25;
            h = width/30;
            lw = width/50;
            al = 12;
        }
        else if(width >= 768){
        x = width/300;
        y = height/50;
        w = width/40;
        h = width/40;
        lw = width/50;
        al = 12;
        }
        else if(width < 768 && width > 540){
            x = width/150;
            y = height/50;
            w = width/35;
            h = width/25;
            lw = width/30;
            al = 123;
            }
        else{
        x = 0;
        y = height/50;
        w = width/15;
        h = width/15;
        lw = width/30;
        al = 5;
        
        }
        ctx.fillStyle = '#000000';
        let p = props.data.front;
        console.log(props.data);
        let i = 0;
        while(p) {
            ctx.beginPath();
            ctx.fillStyle = "orange";
            ctx.rect(x + i*w + i*lw, y, w, h);
            ctx.fill();
            ctx.stroke();
            ctx.beginPath();
            ctx.fillStyle = "blue";
            ctx.rect(x + i*w + i*lw, y + h, w, h);
            ctx.fill();
            ctx.stroke();
            if(p.next) {
                ctx.beginPath();
                ctx.moveTo(x + w + i*(w + lw), y + 1.5*h); 
                ctx.lineTo(x + w + i*(w + lw) + lw, y + 1.5*h);
                ctx.moveTo(x + w + i*(w + lw) + lw, y + 1.5*h);
                ctx.lineTo(x + w + i*(w + lw) + lw - al*Math.cos(arrowAng), y + 1.5*h + al*Math.sin(arrowAng));
                ctx.moveTo(x + w + i*(w + lw) + lw, y + 1.5*h);
                ctx.lineTo(x + w + i*(w + lw) + lw - al*Math.cos(arrowAng), y + 1.5*h - al*Math.sin(arrowAng));
                ctx.stroke();
            }
            (width >= 998) ? ctx.font = "2vh Arial": ctx.font = "1.5vh Arial";
            ctx.textAlign="center"; 
            ctx.textBaseline = "middle";
            ctx.fillStyle = "black";
            ctx.fillText(p.val, x + 0.5*w + i*w + i*lw, y + 0.5*h);
            ctx.fillStyle = "white";
            (width >= 998) ? ctx.font = "0.7vw Arial": ctx.font = "1vw Arial";
            i===0 ? ctx.fillText("FRONT", x + 0.5*w + i*w + i*lw, y + 1.3*h): ctx.fillText("*PTR", x + 0.5*w + i*w + i*lw, y + 1.3*h)
            ctx.fillText(i, x + 0.5*w + i*w + i*lw, y + 2.3*h)
            p = p.next;
            i++;
        }
        
      }
      
      useEffect(() => {
        
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        
        if(width > 996 && height < 996)  {
            canvas.height = window.innerHeight*0.2;
            canvas.width = 2*window.innerWidth;
        }
        else if(width > 996 && height > 996)  {
            canvas.height = window.innerHeight*0.1;
            canvas.width = 2*window.innerWidth;
        }
        else if(width < 996 && height > 996)  {
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


export default ListDrawS; 