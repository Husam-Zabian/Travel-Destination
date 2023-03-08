const data = require("../../data/db.json");

function Tours(){
    return(
<>
 {data.map((item)=>{
   return(
        <div style={{textAlign:"center"}} key={item.ID}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name}></img>
            <hr/>
        </div>
      )
    })}
    
            
</>
     ) ;
}

export default Tours