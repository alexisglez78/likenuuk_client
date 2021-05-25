import React,{useState} from 'react'
import { Redirect } from 'react-router';
import Cabecera from '../shared/Cabecera';
import { BiAddToQueue } from "react-icons/bi";
import '../dashboard/dashboard.css'
import { AiOutlineCloseCircle,AiFillEdit } from "react-icons/ai";





export default function Dashboard() {
    let login = true;
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    if (!login) {
        return <Redirect to="/login" />
    } else {
        return <div>
            <Cabecera />
            <div className="container mt-4">
                <table class="table table-striped table-inverse table-responsive">
                    <thead class="thead-inverse">
                        <tr>
                            <th>Name</th>
                            <th>Specie</th>
                            <th>Sex</th>
                            <th>Color</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">sdfsdf</td>
                                <td>sdfsdf</td>
                                <td>sdfdfsfd</td>
                                <td>sdfdfsfd</td>
                                <td>
                                    {/* <button title="" className="noButton text-success"><BiAddToQueue/>
                                    </button> */}
                                    <button title="delete" className="noButton text-danger"><AiOutlineCloseCircle/>
                                    </button>
                                    <button title="update" className="noButton text-info"><AiFillEdit/>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                </table>
                <div className="row text-end">
                    <div className="col-md-2 ">
                        <button className="btn btn-success" onClick={()=>setShow(true)}>Agregar nueva mascota</button>
                    </div>
                </div>
                {/* <Modal onClick={handleShow} handleClose={handleClose}/> */}
            </div>
        </div>
    }
}
