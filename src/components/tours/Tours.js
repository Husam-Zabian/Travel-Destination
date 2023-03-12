import Tour from './tour/Tour'

const data = require("../../data/db.json");

function Tours(){
    return(
<>
 {data.map((item)=>{
   return(
            <Tour name = {item.name} image={item.image} key={item.ID} />
      )
    })} 
</>
     ) ;
}

export default Tours;