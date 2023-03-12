

function Tour(props){
    return(
    <div style={{textAlign:"center"}} key={props.key}>
             <h3>{props.name}</h3>
            <img src={props.image} alt={props.name}></img>
            <hr/>
    </div>
    );
}

export default Tour;