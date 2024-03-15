import Link from 'next/link';
import './main.css'
const User = () => {
    return (
        <div class="usetable">
            <Link
                class="addbutton"
                href="/user">
                Add User
            </Link>
            <table border={1} cellPadding={10} cellSpacing={0}>
                <thead>
                    <tr>
                        <th>S .No.</th>
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>Ubicacion</th>
                        <th>Participantes</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>juanito </td>
                        <td>12-09-2024</td>
                        <td>Bogota D.C</td>
                        <th>1200</th>
                        <td className='actionButon'>
                            <button>Delete</button>
                            <Link className='link'
                                href="/edit">
                                Editar
                            </Link>

                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default User