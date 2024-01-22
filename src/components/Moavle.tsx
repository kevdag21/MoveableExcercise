import Moveable from "moveable";
import axios from "axios";
import React, {useState, useRef, useEffect} from "react";

const Moavle:React.FC = () => {
    const [imageUrl, setImageUrl] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const imageRef = useRef<HTMLDivElement>(null); 
    const moveableRef = useRef<Moveable | null>(null); 

    useEffect(()=> {
        if(imageRef.current && !moveableRef.current){
            moveableRef.current = new Moveable(document.body, {
                target: imageRef.current,
                draggable: true,
                resizable: true,
                rotatable: true,
                pinchable: true
            });
            moveableRef.current.on("drag", ({ target, beforeTranslate }) => {
                target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`
            })
            moveableRef.current.on("resize", ({ target, width, height, drag }) => {
                const beforeTranslate = drag.beforeTranslate;
                target.style.width = `${width}px`;
                target.style.height = `${height}px`;
                target.style.transform = `translate(${beforeTranslate[0]}px, ${beforeTranslate[1]}px)`;
            })
            
            moveableRef.current.on("rotate", ({ target, drag }) =>{
                target.style.transform = drag.transform;
            })
        }

        return () => {
            if (moveableRef.current) {
                moveableRef.current.destroy();
                moveableRef.current = null;
            }
        }
    })

    const fetchImage = async () => {
        setLoading(true); 
        try {
            const response = await axios.get("https://source.unsplash.com/random/600x400");
            setImageUrl(response.request.responseURL);   
        }catch (error){
            console.error("Error al obtener la imagen:", error);
        }finally {
            setLoading(false); 
        }
    }

    return(
        <div>
            {loading ? (
                <p>Cargando</p>
            ) : (
                <button onClick={fetchImage}>Cargar Imagen</button>
            )}
            {imageUrl && !loading && (
                <div
                    ref={imageRef}
                    style={{ width: "120px", height:"100px", position:"absolute"}}
                >
                <img 
                    src={imageUrl} 
                    alt="Imagen"
                    style={{width:"100%", height:"100%"}}
                />
                </div>
            )}
        </div>
    )
}

export default Moavle



  




