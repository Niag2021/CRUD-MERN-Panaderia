//Librerias a utilizar en el componente.
import axios from "axios"; 
import { useState } from "react"; 
import { Navigate, useNavigate } from "react-router-dom"; 

const URI = 'http:///localhost:8000/trabajadores'

const CompCreateTrabajadores = () => {
    const [nombre, setNombre] = useState('')
    const [apellidoPaterno, setApellidoPaterno] = useState('')
    const [apellidoMaterno, setApellidoMaterno] = useState('')    
    const [edad, setEdad] = useState('')
    const navigate = useNavigate()

    //Procedimiento para guardar.
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {nombre: nombre, apellidoPaterno: apellidoPaterno, apellidoMaterno: apellidoMaterno, edad: edad })
        navigate('/')
    }

    return (
        <div>
            <h3>Create POST</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Nombre.</label>
                    <input value={nombre} onChange={ (e)=>setNombre(e.target.value)} type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Apellido Paterno.</label>
                    <input value={apellidoPaterno} onChange={ (e)=>setApellidoPaterno(e.target.value)} type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                <label className='form-label'>Apellido Materno.</label>
                    <input value={apellidoMaterno} onChange={ (e)=>setApellidoMaterno(e.target.value)} type="text" className='form-control' />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Edad.</label>
                    <input value={edad} onChange={ (e)=>setEdad(e.target.value)} type="number" className='form-control' />
                </div>
                <button type="submit" className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}

export default CompCreateTrabajadores
