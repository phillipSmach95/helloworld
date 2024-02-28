import { useEffect, useState } from 'react'
import './Greetings.css'

function Greetings(){
    const [name,setName] = useState("");
    const [width,setWidth] = useState("");
    const [surname,setSurname] = useState("");
    function handleResize(e){
        console.log(e.target.outerWidth);
        setWidth(e.target.outerWidth)
    }
    useEffect(()=>{
        document.title = name + " "+ surname;
        window.addEventListener('resize', handleResize)
        return ()=>{
            window.removeEventListener('resize', handleResize)
        }
    })
    return (
        <>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" value={name} onChange={(e)=>{
                setName(e.target.value);
            }}/>
            <label htmlFor="surname">Surname: </label>
            <input type="text" name="surname" id="surname" value={surname} onChange={(e)=>{
                setSurname(e.target.value);
            }} />
            <label htmlFor="width">Window width: </label>
            <input type="text" name="width" id="width" value={width} onChange={(e)=>{
                setWidth(e.target.value);
            }}/>
        </>
    )
}
export default Greetings