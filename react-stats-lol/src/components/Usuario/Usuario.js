import './Usuario.css'
export const Usuario = (props)=>{
    //Desetructurar el objeto props para facilitar el uso
    //asi como esta abajo seria sin desetructurarlo
    /*<h1>{props.nombre}</h1>
    <p>{props.edad}</p>*/
    //<p>{props.nacionalidad}</p>
    const {nombre,edad,nacionalidad} = props;
    return <div className="listUsuarios">
        <h1>{nombre}</h1>
        <p>{edad}</p>
        <p>{nacionalidad}</p>
    </div>

}
