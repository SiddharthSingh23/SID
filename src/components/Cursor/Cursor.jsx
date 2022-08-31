import { useEffect } from 'react';
import { useState } from 'react';
import { motion } from "framer-motion";
import Navbar from '../Navbar/Navbar'
import './Cursor.css'

export default function CursorBlend() {

    // set default position as 0        // [current data, updated data] = inital data      // array destructuring 
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    });
    
    const [cursorVariant, setCursorVariant] = useState("default");

    // to put effect    
    useEffect(() => {
        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        }

        // listen to mouse move event 
        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        }
    }, []);

    const variants = {

        // set to pointer position - half of 32 (width and height)
        default: {
            x: mousePosition.x-16, 
            y: mousePosition.y-16
        },

        // increase pointer size - half of 120 
        text: {
            height: 120,
            width: 120,
            x: mousePosition.x-60,
            y: mousePosition.y-60,
            mixBlendMode:"difference"       // for color inversion effect 
        },

        nav: {
            height: 16,
            width: 16,
            x: mousePosition.x-8,
            y: mousePosition.y-8,
            mixBlendMode:"difference" 
        },

        normal: {
            height: 12,
            width: 12,
            x: mousePosition.x-6,
            y: mousePosition.y-6,
            
        }
    }

    const textEnter = () => setCursorVariant("text");       // apply text rule 
    const textLeave = () => setCursorVariant("default");    // remove text rule 

    const navEnter = () => setCursorVariant("nav");         // when mouse enters navigation 
    const normal = () => setCursorVariant("normal")

    // main function 
    return (
        <div onMouseEnter={textLeave} onMouseLeave={normal} className="cursor-blend">
            <div onMouseEnter={navEnter} onMouseLeave={textLeave}><Navbar/></div>

            <h1 onMouseEnter={textEnter} onMouseLeave={textLeave} className='title'>
                HELLO<span className='outline'>WORLD!</span>
            </h1>
            
            <motion.div
                className="cursor"
                variants={variants}
                animate={cursorVariant}
            />
        </div>
    );
}