import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { busca } from '../api/api';
import '../assets/css/blog.css';

const ListaCategoria = () => {
    
    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        busca(`/categorias`,setCategorias)
    }, [])
    return(
        <uL className="lista-categorias container flex">
            {
               categorias.map((categoria) =>(
                   <Link to={`/categoria/${categoria.id}`}>
                       <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
                            {categoria.nome}
                       </li>
                   </Link>
               )) 
            }
        </uL>
    );
}

export default ListaCategoria;