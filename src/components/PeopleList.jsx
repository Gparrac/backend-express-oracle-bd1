import React, {useState, useEffect} from "react";
import { getPeople } from "../api/people";
import '../styles/people.css';
export function PeopleList() {
    const [itemsP, setItemsP] = useState([])
    const fetchApi = async ()=>{
        
        const resP = await getPeople();
        setItemsP(resP)
    }
    useEffect(() => {
        fetchApi()
        
    },[])
    return ( 
        <table className="col__table">
        <thead>
        <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th className="disable">Genero</th>
            <th >edad</th>
            <th className="disable">documento</th>
            <th className="disable">celular</th>
            <th className="disable">email</th>
            <th >dirección</th>
            </tr>
        </thead>
        <tbody>
            {itemsP.map((item,index)=>{
                return (
                    <tr>
                <th>{item.idPersona}</th>
                <th>{item.nombre}</th>
                <th className="disable">{item.genero}</th>
                <th >{item.edad}</th>
                <th className="disable">{item.documento}</th>
                <th className="disable">{item.celular}</th>
                <th className="disable">{item.email}</th>
                <th >{item.direccion}</th>
        
            </tr>
                )
            })  }


        </tbody>
    </table>
     );
}

