//Librerias a utilizar en el componente.
import axios from 'axios' 
import {useState, useEffect} from 'react' 
import {Link} from 'react-router-dom' 

const URI = 'http:///localhost:8000/trabajadores'

//Funcion 
const CompShowTrabajadores = () => {
    //Configuracion de lo hooks
    const [trabajadores, setTrabajadores] = useState([]) 

    useEffect( ()=>{
        getTrabajadores()
    }, [])

    //Procedimiento para listar todos los trabajadores. 
    const getTrabajadores = async () => {
        const res = await axios.get(URI)
        //respuesta
        setTrabajadores(res.data)
    }

    //Procedimiento para eliminar un trabajador a traves del id.
    const deleteTrabajador = async (id) => {
        axios.delete(`${URI}${id}`)
        getTrabajadores()
    }

    return(
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'><i class="fa-solid fa-plus"></i></Link>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido Paterno</th>
                                <th>Apellido Materno</th>
                                <th>Edad</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {trabajadores.map( (trabajador) => (
                                <tr key={trabajador.id}>
                                    <td>{trabajador.nombre}</td>
                                    <td>{trabajador.apellidoPaterno}</td>
                                    <td>{trabajador.apellidoMaterno}</td>
                                    <td>{trabajador.edad}</td>
                                    <td>
                                        <Link to={`/edit/${trabajador.id}`} className="btn btn-info"><i class="fa-solid fa-pencil"></i></Link>
                                        <button onClick={()=>deleteTrabajador(trabajador.id)} className='btn btn-danger'><i class="fa-solid fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowTrabajadores