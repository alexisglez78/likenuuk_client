import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router';
import Cabecera from '../shared/Cabecera';
import { BiAddToQueue } from "react-icons/bi";
import '../dashboard/dashboard.css'
import { AiOutlineCloseCircle, AiFillEdit } from "react-icons/ai";
import Modals from '../shared/Modals';
import { LevelItem } from 'bloomer';




export default function Dashboard() {
    let login = true;
    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpen2, setIsOpen2] = React.useState(false);
    const [modalIsOpen3, setIsOpen3] = React.useState(false);
    const [masc, setmasc] = useState()
    const [name, setname] = useState('')

    const [specie, setspecie] = useState('')
    const [sex, setsex] = useState('')
    const [color, setcolor] = useState('')
    const [mascotas, setmascotas] = useState([0])
    function openModal() {
        setIsOpen(true);
    }
    function openModal2(e) {
        // console.log(e.currentTarget.id);
        // let numero = Number(e.currentTarget.id)
        // console.log(numero);
        // setmasc(mascotas[numero])
        // setname(mascotas[numero].name)
        // setspecie(mascotas[numero].specie)
        // setsex(mascotas[numero].sex)
        // setcolor(mascotas[numero].color)
        setIsOpen2(true);
    }

    function openModal3(e) {
        console.log(e.currentTarget.id);
        setmasc(Number(e.currentTarget.id))
        setIsOpen3(true);
    }

    function getData() {
        fetch('http://localhost:3000/pet', {
            method: 'GET'
        })
            .then((resp) => resp.json())
            .then(res => {
                setmascotas(res.data)
            })
    }

    useEffect(() => {
        getData()
    }, [])
    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    function closeModal2() {
        setIsOpen2(false);
    }
    function closeModal3() {
        setIsOpen3(false);
    }
    function onSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/pet', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                specie: specie,
                sex: sex,
                color: color
            })

        })
            .then((resp) => resp.json())
            .then(res => {
                if (res.error) {
                    alert('Hubo un error intente mas tarde')
                } else {
                    alert(res.data)
                    closeModal()
                    getData()
                    setname('')
                    setspecie('')
                    setsex('')
                    setcolor('')
                }
            })

    }
    function onSubmit2(e) {
        e.preventDefault()
        fetch('http://localhost:3000/pet', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: masc,
                name: name,
                specie: specie,
                sex: sex,
                color: color
            })

        })
            .then((resp) => resp.json())
            .then(res => {
                if (res.error) {
                    alert('Hubo un error intente mas tarde')
                } else {
                    alert(res.data)
                    closeModal()
                    getData()
                    setname('')
                    setspecie('')
                    setsex('')
                    setcolor('')
                }
            })

    }
    function eliminar(e) {
        e.preventDefault()
        fetch("http://localhost:3000/pet?id=" + masc + "", {
            method: 'DELETE',
        })
            .then((resp) => resp.json())
            .then(res => {
                console.log(res);
                if (res.error) {
                    alert('Hubo un error intente mas tarde')
                } else {
                    alert(res.data)
                    getData()
                    closeModal3()

                }
            })

    }
    let mascotasList = mascotas.map((key) => {
        return (
            <tr id={key.idpet}>
                <td>{key.name}</td>
                <td>{key.species}</td>
                <td>{key.sex}</td>
                <td>{key.color}</td>
                <td>
                    <button id={key.idpet} title="delete" onClick={(e) => openModal3(e)} className="noButton text-danger"><AiOutlineCloseCircle />
                    </button>
                    <button id={key.idpet} title="update" onClick={(e) => { openModal2(e) }} className="noButton text-info"><AiFillEdit />
                    </button>
                </td>
            </tr>
        )
    });

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
                        {mascotasList}
                    </tbody>
                </table>
                <div className="row text-end">
                    <div className="col-md-2 ">
                        <button className="btn btn-success" onClick={() => openModal()}>Agregar nueva mascota</button>
                    </div>
                </div>
                <Modals openModal={openModal} modalIsOpen={modalIsOpen} afterOpenModal={afterOpenModal} closeModal={closeModal}
                    childs={
                        <div >
                            <div className="w-100 mb-2">Agregar nueva mascota </div>
                            <div className="row">
                                <div className="col">
                                    <form onSubmit={(e) => onSubmit(e)}>
                                        <Inputs
                                            id="name"
                                            value={name}
                                            onChange={(e) => setname(e.target.value)}
                                        />
                                        <Inputs
                                            id="specie"
                                            value={specie}
                                            onChange={(e) => setspecie(e.target.value)}
                                        />
                                        <Inputs
                                            id="sex"
                                            value={sex}
                                            onChange={(e) => setsex(e.target.value)}
                                        />
                                        <Inputs
                                            id="color"
                                            value={color}
                                            onChange={(e) => setcolor(e.target.value)}
                                        />
                                        <input className="mt-3" type="submit" value="Agregar" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    }
                >

                </Modals>
                <Modals
                    openModal={openModal2}
                    modalIsOpen={modalIsOpen2}
                    closeModal={closeModal2}
                    childs={
                        <div >
                            <div className="w-100 mb-2">Modificar una mascota </div>
                            <div className="row">
                                <div className="col">
                                    <form onSubmit={(e) => onSubmit2(e)}>
                                        <Inputs
                                            id="name"
                                            value={name}
                                            onChange={(e) => setname(e.target.value)}
                                        />
                                        <Inputs
                                            id="specie"
                                            value={specie}
                                            onChange={(e) => setspecie(e.target.value)}
                                        />
                                        <Inputs
                                            id="sex"
                                            value={sex}
                                            onChange={(e) => setsex(e.target.value)}
                                        />
                                        <Inputs
                                            id="color"
                                            value={color}
                                            onChange={(e) => setcolor(e.target.value)}
                                        />
                                        <input className="mt-3" type="submit" value="Agregar" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    }
                />
                <Modals
                    openModal={openModal3}
                    modalIsOpen={modalIsOpen3}
                    closeModal={closeModal3}
                    childs={
                        <div >
                            <div className="w-100 mb-2">Esta seguro de eliminar una mascota ? </div>
                            <div className="row justify-content-end">
                                <div className="col-md-1">
                                    <button className="btn btn-danger w-2" onClick={(e) => { eliminar(e) }}>Aceptar</button>

                                </div>
                            </div>
                        </div>
                    }
                />

            </div>
        </div>
    }
}

export const Inputs = (props) => {
    return <div>
        <label htmlFor="name">{props.id}</label>
        <input type="text" id={props.id} value={props.value} className="form-control" onChange={props.onChange} />
    </div>
}