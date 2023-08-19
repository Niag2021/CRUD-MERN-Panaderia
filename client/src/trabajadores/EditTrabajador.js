import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = 'http://localhost:8000/trabajadores/' 

const CompEditTrabajador = () => {
    //Configurar Hooks
    const [nombre, setNombre] = useState('')
    const [apellidoPaterno, setApellidoPaterno] = useState('')
    const [apellidoMaterno, setApellidoMaterno] = useState('')
    const [edad, setEdad] = useState('')
    const navigate = useNavigate()
    const {id} = useParams() 

    //Procedimiento para actualizar. 
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            nombre: nombre, 
            apellidoPaterno: apellidoPaterno, 
            apellidoMaterno: apellidoMaterno, 
            edad: edad 
        })
        navigate('/')        
    }

    useEffect( ()=> {
        getTrabajadorById()
    }, [])

    const getTrabajadorById = async () => {
        const res = await axios.get(URI+id)
        setNombre(res.data.nombre)
        setApellidoPaterno(res.data.apellidoPaterno)
        setApellidoMaterno(res.data.apellidoMaterno)
        setEdad(res.data.edad)
    }

    return(
        <div>
            <h3>Edit Post</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre</label>
                    <input value={nombre} onChange={ (e)=> setNombre(e.target.value)} type="text" className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Apellido Paterno</label>
                    <input value={apellidoPaterno} onChange={ (e)=> setApellidoPaterno(e.target.value)} type="text" className='form-control'/>
                </div>
                <div className='mb-3'>
                <label className='form-label'>Apellido Materno</label>
                <input value={apellidoMaterno} onChange={ (e)=> setApellidoMaterno(e.target.value)} type="text" className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Edad</label>
                    <input value={edad} onChange={ (e)=> setEdad(e.target.value)} type="number" className='form-control'/>
                </div>
                <button type='submit' className='btn btn-primary'>Actualizar</button>
            </form>     
        </div>
    )



}

export default CompEditTrabajador