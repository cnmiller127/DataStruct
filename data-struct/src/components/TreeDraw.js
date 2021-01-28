import React, {useRef, useState, useEffect} from 'react';
import "../Style.css";
import useWindow from "../utils/useWindow";

const TreeDraw = (props) => {
    const canvasRef = useRef(null);
    const [width, height] = useWindow();
    console.log(width, height);
    let stW = 900;
    let stH = 900;
    let ratio = stW/stH; 
    let x, y, w, h, r
    let colors = ["red", "deepskyblue", "lime", "mediumpurple", "yellow", "salmon", "white", "white"];
    const draw = ctx => { 
        x = width/2;
        y = 0.1*height;
        w = width * (200/stW);
        h = height * (150/stH);
        r = width*(20/stW);
       
        const H = h;
        const W = w; 
        const R = r; 
        ctx.fillStyle = '#000000';
        let root = props.data.root;
        let counter = 1;
        const treeDraw = (subroot, xC, yC) => {
            let w, h, r;
            w = W;
            h = H;
            r = R; 
            if(counter < 5) {
                if(width >= 768 && height >= 998){
                    ctx.font = "1.5vh Impact";
                }
                else if(width >= 768){
                    ctx.font = "2.5vh Impact";
                }
                else{
                    ctx.font = "2vh Impact";
                }
            }
            else{
                if(width >= 768 && height >= 998){
                    ctx.font = "1.1vh Impact";
                    r = 0.5*r;
                }
                else if(width >= 768){
                    ctx.font = "2vh Impact";
                    r= 0.5*r;
                }
                else{
                    ctx.font = "1.2vh Impact";
                    r = 0.55*r;
                }
                
            }
            ctx.beginPath();
            ctx.arc(xC, yC, r, 0*Math.PI, 2*Math.PI);
            ctx.fillStyle = colors[counter-1];
            ctx.fill();
            ctx.stroke();
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
            ctx.beginPath();
            ctx.moveTo(xS, yS);
            ctx.lineTo(xE, yE);
            ctx.stroke();
            counter++;
            treeDraw(subroot.right, xC + w, yC + h);
            }
            counter--;
        }
            treeDraw(root, x, y);
    }
        
      
      useEffect(() => {
        
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
            canvas.width = ratio * width;
            canvas.height = height*1200/stH;
        context.clearRect(0, 0, canvas.width, canvas.height);
        draw(context);
      }, [draw]);
    

    return ( <canvas className = "canvas" ref = {canvasRef} {...props} />)
    

}


export default TreeDraw; 