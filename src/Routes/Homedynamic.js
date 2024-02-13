import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Store } from '../Context/ContextData';

const Homedynamic = () => {
    const{id ,category} =useParams();
    const [received] = useContext(Store);

    const selecteditem  = received.filter(item => item.id=== parseInt(id,5));
    console.log(selecteditem)

    const categoryData = selecteditem.filter(item => item.category === category )
    console.log(categoryData)





   
    
    return(
        <>
        <div className='fx'>

        { received.filter((item)=>item.id===id).map((item,index)=>{
                return(
                    <>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>








                    
                    


                    </>

                     )})
            }

          




            




        </div>
        
        </>
    )
}


export default Homedynamic;