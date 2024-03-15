import react from 'react'
import { Link } from 'react-router-dom'
import './main.css'
const Edit = () => {
    return (
        <div class="adduser">
            <a href="/">Vover</a>
            <h3>Agregar nuevo Usuario</h3>

            <form class="adduserfrom">
                <div class="inputgroud">
                    <label htmlFor="fname">Nombre</label>
                    <input type="text" id="fname" name="fnama" autoComplete='off' placeholder='Evento' />
                </div>

                <div class="inputgroud">
                    <label htmlFor="lname">Fecha</label>
                    <input type="text" id="lname" name="lnama" autoComplete='off' placeholder='Fecha' />
                </div>
                <div class="inputgroud">
                    <label htmlFor="uname">Ubicacion</label>
                    <input type="text" id="uname" name="uname" autoComplete='off' placeholder='Ubicacion' />
                </div>
                <div class="inputgroud">
                    <label htmlFor="pnama">Participantes</label>
                    <input type="text" id="pname" name="pnama" autoComplete='off' placeholder='Participantes' />
                </div>

                <div class="inputgroud">
                    <button type='submit'>Add User</button>
                </div>

            </form>
        </div>
    )
}

export default Edit