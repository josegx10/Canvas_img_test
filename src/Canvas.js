import { useRef } from "react"

import './Canvas.css'
import CanvasDraw from "react-canvas-draw"
import bubis from './assets/Bubis.png'
const Canvas = () => {
    
    const canvasRef = useRef(null);
    
    const descargar =() => {
        

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const img1 = new Image();
        const img2 = JSON.parse(canvasRef.current.getSaveData());

        img1.src =bubis;
        console.log(img1);
        canvas.width = img1.width;
        canvas.height = img1.height;

        ctx.drawImage(img1, 0 , 0);
       
        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5;
        ctx.moveTo(img2.lines[0].points[0].x, img2.lines[0].points[0].y);
        for(let n = 0; n < img2.lines.length; n++){
            for(let m = 0; m < img2.lines[n].points.length; m++){

                ctx.lineTo(img2.lines[n].points[m].x, img2.lines[n].points[m].y )
                

            }
        }
        
       ctx.stroke();

        
        const combinedImage = canvas.toDataURL('image/png');
        const enlace = document.createElement('a');

        enlace.download = "Canvas.png";

        enlace.href =  combinedImage;

        enlace.click();
    }
    
    return (

        <><> <div className="canvas"><CanvasDraw ref={canvasRef} className="canvas-draw" hideInterface={true}  brushRadius={2} brushColor="red" hideGrid={true} style={{ background:0,width: '100%', height:'32vh',  border: '1px solid' }} />
            <button onClick={descargar}>  Descargar </button> </div> 
           
            <div className="images">  <img  src={bubis} />  </div></></>
    )
}

export default Canvas;