const data = require("../../data/db.json");

function Tours(){
    return(
<>
 {data.map((item)=>{
   return(
        <div key={item.ID}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name}></img>
        </div>
      )
    })}
    
            
</>
     ) ;
}

export default Tours