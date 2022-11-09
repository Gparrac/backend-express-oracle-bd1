import React, {useState, useEffect} from "react";
import '../styles/people.css'
import {PeopleList} from "./PeopleList";

//request
import { getGenders } from "../api/genders";
import { getTypeDocument } from "../api/typeDocument";
import { sendPeople } from "../api/people";

export function PeopleDashboard() {
    const [itemsG, setItemsG] = useState([])
    const [itemsTD, setItemsTD] = useState([])
    const [formData, setFormData] = useState({
        nombre:'',
        idGenero:0,
        idDocumento:0,
        edad:0,
        documento:0,
        celular:0,
        direccion:'',
        email:''
    })
    const [idGenero,setIdGenero] = useState(21)
    const [idTp,setTp] = useState(22)
    const fetchApi = async ()=>{
        
        const resG = await getGenders();
        const resTD = await getTypeDocument();
        
        setItemsG(resG)
        setFormData({
            ...formData,
            idDocumento:resTD[0].id,
            idGenero:resG[0].id
        })
        
        setItemsTD(resTD)

        
    }
    useEffect(() => {
        fetchApi()
        
    },[])
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
            idGenero: parseInt(idGenero),
            idDocumento: parseInt(idTp),
            [event.target.edad]: parseInt(event.target.value),
            [event.target.documento]: parseInt(event.target.value),
            [event.target.celular]: parseInt(event.target.value),
            [event.target.direccion]: event.target.value,
            [event.target.email]: event.target.value
        });
        console.log(formData)
    }
    const sendData = (event)=>{
        event.preventDefault();
        const data = {
            nombre:formData.nombre,
            idGenero: parseInt(formData.idGenero),
            idDocumento:parseInt(formData.idDocumento),
            edad:parseInt(formData.edad),
            documento:parseInt(formData.documento),
            celular:parseInt(formData.celular),
            direccion:formData.direccion,
            email:formData.email
        };
        console.log(data)
        sendPeople(data);
        
    }
    return (
        <>
        <h1 className="title" >Registro de usuarios</h1>
        <div className="box">
            <form onSubmit={sendData} className="box__form" id="form">
                <section>
                    <label htmlFor="firstName">Nombre</label>
                    <input className="form__input" onChange={handleInputChange} type="text" id="firstName" value={formData.name}  name="nombre"/>
                        <label htmlFor="lastName">Documento</label>
                        <input className="form__input" onChange={handleInputChange} name="documento" type="number" value={formData.documento} id="lastName"/>
                        <label htmlFor="startDate">email</label>
                            <input className="form__input" onChange={handleInputChange} name="email" type="email" value={formData.email} id="startDate" />
                            <label htmlFor="startDate">edad</label>
                            <input className="form__input" onChange={handleInputChange} name="edad" type="number" value={formData.edad} id="startDate" />
                            <label htmlFor="startDate">celular</label>
                            <input className="form__input" onChange={handleInputChange} name="celular" type="number" value={formData.celular} id="startDate" />

                            </section>
                            <section>
                            <label htmlFor="startDate">Dirección</label>
                            <input className="form__input" onChange={handleInputChange} name="direccion" type="text" id="startDate" />
                                <label htmlFor="regionId">Genero</label>
                                <select id="regionId" className="form__input" name="idGenero" value={formData.idGenero} onChange={handleInputChange}>
                                {itemsG.map((item) => {
                                   return <option value={item.id} key={item.genero + item.id}>{item.genero}</option>
                                })}                                                        
                                </select>
                                <label htmlFor="deptId">Tipo de documento</label>
                                <select id="deptId" className="form__input" name="idDocumento" value={formData.idDocumento} onChange={handleInputChange}>
                                {itemsTD.map((item)=>{
                                   return <option value={item.id} key={item.tipo + item.id}>{item.tipo}</option>
                                })}  
                                                                   
                                                                    
                                </select>
                                        <button type="submit">Registrar</button>
                                    </section>
                                </form>
                            <PeopleList  />
                            </div>                            
                            </>);
}
