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
            subH = width/15;
            subW =  width/35;
            r = width/75;
            blank = 18*(width)/1350;
            
            }
        else if(width >= 768){
        x = width/2;
        y = height/20;
        w = width/20;
        h = width/20; 
        r = width/50;
        blank = 18*(width)/768;
        
        }
        else{
        x = width/2;
        y = height/30;
        w = width/5;
        h = width/5;
        r = width/35;
        blank = 18*(width)/320;
        }
        const H = h;
        const W = w; 
        const Blank = blank;
        ctx.fillStyle = '#000000';
        let root = props.data.root;
        //console.log("Props: ", props.data);
        let isRoot = true;
        let counter = 1;
        const treeDraw = (subroot, xC, yC) => {
            let w, blank;
            ctx.beginPath();
            ctx.arc(xC, yC, r, 0*Math.PI, 2*Math.PI);
            ctx.stroke();
            (width >= 768) ? ctx.font = "3vh Arial": ctx.font = "2vh Arial";
            ctx.textAlign="center"; 
            ctx.textBaseline = "middle";
            ctx.fillText(subroot.val, xC, yC);
            //console.log("counterS", counter);
            w = W/counter;
            blank = Blank/counter + (counter-1)*4;
            if(subroot.left) {
                let xS = xC - blank;
                let yS =  yC + h/w*(xC - xS);
                let xE = xC - w + blank;
                let yE =  yC + h/w*(xC - xE);
                ctx.beginPath();
                ctx.moveTo(xS, yS);
                ctx.lineTo(xE, yE);
                ctx.stroke();
                counter++;
                treeDraw(subroot.left, xC - w, yC + h);
            }  
            if(subroot.right) {
            //console.log("counterRIGHT", counter)
            let xS = xC + blank;
            let yS =  yC - h/w*(xC - xS);
            let xE = xC + w - blank;
            let yE =  yC - h/w*(xC - xE);
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