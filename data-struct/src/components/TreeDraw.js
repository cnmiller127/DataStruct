import React, {useRef, useState, useEffect} from 'react';
import "../Style.css";
import useWindow from "../utils/useWindow";

const TreeDraw = (props) => {
    const canvasRef = useRef(null);
    const [width, height] = useWindow();
    let x, y, w, h, r, blank;
    let colors = ["red", "aqua", "gold", "lavender", "orange"]
    const draw = ctx => {
        if(width >= 768){
            x = width/2;
            y = height/15;
            w = width/10;
            h = width/25;
            r = width/75;
            }
        else if(width >= 768){
        x = width/2;
        y = height/20;
        w = width/15;
        h = width/30; 
        r = width/75;
        }
        else{
        x = 0.6*width;
        y = height/20;
        w = width/4;
        h = width/8;
        r = width/35;
        }
        const H = h;
        const W = w; 
        const R = r; 
        const Blank = blank;
        ctx.fillStyle = '#000000';
        let root = props.data.root;
        let counter = 1;
        const treeDraw = (subroot, xC, yC) => {
            let w, h, r, blank;
            blank = 0;
            w = W;
            h = H;
            r = R; 
            if(counter >= 5) r=r/2;
            ctx.beginPath();
            ctx.arc(xC, yC, r, 0*Math.PI, 2*Math.PI);
            ctx.fillStyle = colors[counter-1];
            ctx.fill();
            ctx.stroke();
            (width >= 768) ? ctx.font = "3vh Arial": ctx.font = "2vh Arial";
            counter >= 5 && (ctx.font = "2vh Arial");
            ctx.textAlign="center"; 
            ctx.textBaseline = "middle";
            ctx.fillStyle = "black";
            ctx.fillText(subroot.val, xC, yC);
            if(subroot.left) {
                w= W/counter; 
                let m = -h/w;
                let c = -m*xC + yC;        
                let aQ = Math.pow(m, 2) + 1;
                let bQ = -2*(xC + m*yC - m*c);
                let cQ = xC*xC + yC*yC + c*c - r*r - 2*c*yC;
                let xQ1 = (-bQ - Math.sqrt(bQ*bQ - 4*aQ*cQ))/(2*aQ);
                let xQ2 = (-bQ + Math.sqrt(Math.pow(bQ, 2) - 4*aQ*cQ))/(2*aQ);
                if(counter >= 4) {
                    cQ = xC*xC + yC*yC + c*c - R*R - 2*c*yC;
                    let cQ2 = xC*xC + yC*yC + c*c - r*r/4 - 2*c*yC
                    xQ2 =  (-bQ + Math.sqrt(Math.pow(bQ, 2) - 4*aQ*cQ2))/(2*aQ);
                }
                let xS = xQ1;
                let yS = m*(xQ1) + c; // y = mx + c; 
                let xE = xQ2 - w;
                let yE = m*(xQ2 - w) + c;
                ctx.beginPath();
                ctx.moveTo(xS, yS);
                ctx.lineTo(xE, yE);
                ctx.stroke();
                counter++;
                treeDraw(subroot.left, xC - w, yC + h);
            }  
            if(subroot.right) {
            w = W/(counter);
            let m = h/w;
            let c = -m*xC + yC;  
            let aQ = Math.pow(m, 2) + 1;
            let bQ = -2*(xC + m*yC - m*c);
            let cQ = xC*xC + yC*yC + c*c - r*r - 2*c*yC;
            let xQ1 = (-bQ - Math.sqrt(bQ*bQ - 4*aQ*cQ))/(2*aQ);
            let xQ2 = (-bQ + Math.sqrt(Math.pow(bQ, 2) - 4*aQ*cQ))/(2*aQ);
            if(counter >= 4) {
                cQ = xC*xC + yC*yC + c*c - R*R - 2*c*yC;
                let cQ2 = xC*xC + yC*yC + c*c - r*r/4 - 2*c*yC
                xQ1 =  (-bQ + Math.sqrt(Math.pow(bQ, 2) - 4*aQ*cQ2))/(2*aQ);
            }
            let xS = xQ2;
            let yS = m*(xQ2) + c; // y = mx + c; 
            let xE = xQ1 + w;
            let yE = m*(xQ1 +  w) + c;
            // ctx.beginPath();
            // ctx.arc(xC, yC, r, 0*Math.PI, 2*Math.PI);
            // ctx.fillStyle = colors[counter-1];
            // ctx.stroke();
            // ctx.fill();
            (width >= 768) ? ctx.font = "3vh Arial": ctx.font = "2vh Arial";
            counter >= 5 && (ctx.font = "1vh Arial");
            ctx.textAlign="center"; 
            ctx.textBaseline = "middle";
            ctx.fillStyle = "black";
            ctx.fillText(subroot.val, xC, yC);
            ctx.beginPath();
            ctx.moveTo(xS, yS);
            ctx.lineTo(xE, yE);
            ctx.stroke();
            counter++;
            treeDraw(subroot.right, xC + w, yC + h);
            }
            counter--;
            //console.log("counterE", counter);
        }
            treeDraw(root, x, y);
    }
        
      
      useEffect(() => {
        
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if(width > 996 & height < 996)  {
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
        }
        else if(width < 996 & height > 996)  {
            canvas.height = window.innerHeight;
            canvas.width = 2*window.innerWidth;
        }
        else if(width < 540) {
            canvas.height = window.innerHeight;
            canvas.width = 2*window.innerWidth;
            console.log("RED")
        }
        
        draw(context);
      }, [draw]);
    

    return ( <canvas className = "canvas" ref = {canvasRef} {...props} />)
    

}


export default TreeDraw; 