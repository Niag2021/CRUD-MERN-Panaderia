//Importando librerias. 
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:8000/trabajadores/'

const CompShowTrabajadores = () => {
    //configurar los hooks
    //Valor y funcion para actualizar.
    const [trabajadores, setTrabajador] = useState([]);

    useEffect(() => {
        getTrabajadores()
    }, [])

    //Procedimiento para mostrar todos los trabajadores. 
    const getTrabajadores = async () => {
        //Peticion con axios. 
        const res = await axios.get(URI)
        //Para obtener la data de la respuesta 
        setTrabajador(res.data)
    }

    //Procedimiento para eliminar un trabajador.  
    const deleteTrabajador = async (id) => {
        //Peticion con axios. 
        //Se para el parametro id. 
        await axios.delete(`${URI}${id}`)
        getTrabajadores()
    }

    return (
        //< ></ >
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table class='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Id.</th>
                                <th>Nombre.</th>
                                <th>Apellido Paterno.</th>
                                <th>Apellido Materno.</th>
                                <th>Edad.</th>
                            </tr>
                        </thead>
                        <tbody>
                            { trabajadores.map ( (trabajador) => (
                                <tr key={ trabajador.id}>
                                    <td>{trabajador.nombre}</td>
                                    <td>{trabajador.apellidoPaterno}</td>
                                    <td>{trabajador.apellidoMaterno}</td>
                                    <td>{trabajador.edad}</td>
                                    <td>
                                        {/*<Link to={`/edit/${trabajador.id}`} className="btn btn-info">Editar</Link>*/}
                                        <button onClick={()=>deleteTrabajador(trabajador.id)} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowTrabajadores