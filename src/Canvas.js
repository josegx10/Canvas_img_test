import { useRef, useState } from "react";

import "./Canvas.css";
import { ReactSketchCanvas } from "react-sketch-canvas"; // Libreria https://www.npmjs.com/package/react-sketch-canvas
import bubis from "./assets/Bubis.png";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [canvasProps, setCanvasProps] = useState({
    // aqui se agregen todos los props a usar en la imagen
    backgroundImage: bubis,
    exportWithBackgroundImage: true,
  });
  const descargar = async () => {
    const exportImage = canvasRef.current?.exportImage; // Con los props que se agregaron se descargara el canvas junto a la imagen a la vez

    if (exportImage) {
      const exportedDataURI = await exportImage("png");
      const image = document.createElement("a");

      image.download = "Canvas.png";

      image.href = exportedDataURI;

      image.click();
    }
  };

  const limpiar = () => {
    canvasRef.current.clearCanvas();
  };

  return (
    <>
      <>
        {" "}
        <div className="canvas">
          <ReactSketchCanvas
            ref={canvasRef}
            width="90%"
            height="28vh"
            strokeWidth={4}
            strokeColor="red"
            {...canvasProps}
          />
          <button onClick={descargar}> Descargar </button>{" "}
          <button onClick={limpiar}> Limpiar </button>
        </div>
      </>
    </>
  );
};

export default Canvas;
