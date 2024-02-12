import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Store } from '../Context/ContextData';


const TrsmDynamic = () => {
    const{id} =useParams();
    const [received] = useContext(Store);
    // const {category} =useParams()

    // const matchingItem = received.find(item => item.title === category)
    // console.log(matchingItem)
   

    return(
        <>
        <div className='fx'>

            { received.filter((item)=>item.id===id).map((item,index)=>{
                return(
                    <>
                    <h1>{item.title}</h1>
                    <p>{item.des}</p>
                    <b>History</b><br/>
                    <p>{item.history}</p>
                    <b>Fairs & Festivals</b><br/>
                    <p>{item.fair}</p>
                    <b>Best Time to Visit</b><br/>
                    <p>{item.time}</p>
                    <b>How to Reach :-</b><br/><br/>
                    <b>BY AIR - </b><p>{item.air}</p>
                    <b> BY RAIL - </b><p>{item.rail}</p>
                    <b> BY ROAD - </b><p>{item.road}</p>
                    <br/>
                    <b>Tourist Attractions</b>
                    <p>{item.attraction}</p>






                    
                    


                    </>

                     )})
            }

            

         <h1>duration</h1>
            <div>
                
            </div>

        </div>
        
        </>
    )
}



export default TrsmDynamic;