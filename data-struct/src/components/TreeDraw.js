import React, {useRef, useState, useEffect} from 'react';
import "../Style.css";
import useWindow from "../utils/useWindow";

const TreeDraw = (props) => {
    const canvasRef = useRef(null);
    const [width, height] = useWindow();
    let x, y, w, h, r, subH, subW, blank, subBlank;
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
        x = width/2;
        y = height/20;
        w = width/4;
        h = width/6;
        r = width/35;
        }
        const H = h;
        const W = w; 
        const Blank = blank;
        ctx.fillStyle = '#000000';
        let root = props.data.root;
        let counter = 1;
        const treeDraw = (subroot, xC, yC) => {
            let w, h, blank;
            blank = 0;
            w = W/counter;
            h = H; 
            ctx.beginPath();
            ctx.arc(xC, yC, r, 0*Math.PI, 2*Math.PI);
            ctx.stroke();
            (width >= 768) ? ctx.font = "3vh Arial": ctx.font = "2vh Arial";
            ctx.textAlign="center"; 
            ctx.textBaseline = "middle";
            ctx.fillText(subroot.val, xC, yC);
            if(subroot.left) {
                let m = -h/w;
                let c = -m*xC + yC;        
                let aQ = Math.pow(m, 2) + 1;
                let bQ = -2*(xC + m*yC - m*c);
                let cQ = xC*xC + yC*yC + c*c - r*r - 2*c*yC;
                let xQ1 = (-bQ - Math.sqrt(bQ*bQ - 4*aQ*cQ))/(2*aQ);
                let xQ2 = (-bQ + Math.sqrt(Math.pow(bQ, 2) - 4*aQ*cQ))/(2*aQ);
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
            let m = h/w;
            let c = -m*xC + yC;  
            let aQ = Math.pow(m, 2) + 1;
            let bQ = -2*(xC + m*yC - m*c);
            let cQ = xC*xC + yC*yC + c*c - r*r - 2*c*yC;
            let xQ1 = (-bQ - Math.sqrt(bQ*bQ - 4*aQ*cQ))/(2*aQ);
            let xQ2 = (-bQ + Math.sqrt(Math.pow(bQ, 2) - 4*aQ*cQ))/(2*aQ);
            let xS = xQ2;
            let yS = m*(xQ2) + c; // y = mx + c; 
            let xE = xQ1 + w;
            let yE = m*(xQ1 +  w) + c;
            ctx.beginPath();
            ctx.arc(xC, yC, r, 0*Math.PI, 2*Math.PI);
            ctx.stroke();
            (width >= 768) ? ctx.font = "3vh Arial": ctx.font = "2vh Arial";
            ctx.textAlign="center"; 
            ctx.textBaseline = "middle";
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
        canvas.width = window.innerWidth;
        canvas.height = 2*window.innerHeight;
        
        draw(context);
      }, [draw]);
    

    return ( <canvas ref = {canvasRef} {...props} />)
    

}


export default TreeDraw; 