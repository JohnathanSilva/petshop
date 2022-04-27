import React, { useEffect, useState } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom';
import { busca } from '../api/api';

import '../assets/css/blog.css'
import ListaCategoria from '../components/ListaCategoria';
import ListaPost from '../components/ListaPost';
import SubCategoria from '../paginas/SubCategoria';


const Categoria = () => {
    const { id } = useParams()
    const { url, path } = useRouteMatch()
    const [subcategorias, setSubCategorias] = useState([])

    useEffect(() => {
      busca(`/categorias/${id}`, (categoria) => {
        setSubCategorias(categoria.subcategorias)
      })
    }, [id])
    return (
      <>
        <div className="container">
          <h2 className="titulo-pagina">Pet Notícias</h2>
        </div>
  
        <ListaCategoria />
        <ul className="lista-categorias container flex">
          {
            subcategorias.map((subcategoria) => (
              <li
                className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
                key={subcategoria}
              >
                <Link to={`${url}/${subcategoria}`}>
                  {subcategoria}
                </Link>
              </li>
            ))
          }
        </ul>
          <switch>
            <Route excat path={`${path}/`}>
                <ListaPost url={`/posts?categoria=${id}`}/> 
            </Route>
            <Route path={`${path}/:subcategorias`}>
              <SubCategoria />
            </Route>
        </switch>
        </>
    );
}

export default Categoria;