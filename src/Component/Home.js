
import React, { useContext } from 'react';
import { Store } from '../Context/ContextData';
import "./Compo.css"


const Home = () => {

    const [received] = useContext(Store);


    return(
        <>
        <div className='fx'>
            <h1>The India Tourism - Guided & Customized Private Tour to India</h1>
      <p> India Tourism is an unequivocally welcoming nation, that bestows reverence and love for its visitors. A nation which follows only one belief blindly "Atithi Devo Bhava" which means "Guest is equivalent to God". There is so much to discover, a land with varied civilizations, deep-rooted ideologies. uncountable faiths, that is also related to particular historical stories. India Tourism provides an outstanding rich heritage, tasty cuisines from numerous parts of the world, a multitude of enticing sightseeing spots, and much more while visiting this beautiful country. An avid traveler will simply find his place here.</p>

<p className='clr'>Culture-India Tourism</p>

<p>India is the country that quickly and last experiences on their mind get into one's heart. Perhaps there is no other nation with such a rich mixture of races, vivid colors, language, food, a land overloaded with vibrancy and intense inconsistencies. His country is the birthplace of Hinduism, Buddhism, Jainism and Sikhism: People in any area can be spotted adopting their own special cultural and retigious traditions. Yoga is undeniably the biggest destination for spiritual visitors, and Rishikesh, situated in Northern India, is commonly regarded as the country's Yoga hub. Your trip to India will definitely send you goosebumps and a memory like a rollercoaster ride.</p>

<p className='clr'>Architecture of India - India Tourism</p>

<p>India has 32 UNESCO World Heritage-listed sites around the country, making it an epitome of historical wonders, if we speak about the architectural beauty of India has an extensive array of attractive forts, palaces, temples and its ruins and shrines as well. India itself is an international tourist bundle, they only need to select a destination according to their desires and prepare their itinerary. If you have a deep urge to discover a wonderland on this planet, then pack our bags and come to India, a land that is truly blessed with an abundance of natural wonder.</p>

<p className='clr'>Explore India - India Tourism</p>

<p>Well, every part of the world has a different tole to tell, with enchanting elegance and majestic culture, Northern India is truly blessed, one can get absolutely soaked in valleys and waterfalls and lush greenery of Himalayan ranges. The western part of the world has a striking beauty of architectural wonder, and what people enjoy about this place is the contemporary lifestyle. And we're talking about the regions of the Sunderbans or the eastern part of India, well, no one can argue that this area is blessed with the scenic beauty of high hills, ondulating rivers and waterfalls. Finally, the southern area is blessed with planting and foliage loads, an exotic destination in the entire world, a combination of enticing beach sites, Tourists continue to see hills and waterfalls again and again! There are plenty of great reasons to visit India Tourism, so we have already offered a mini-tour.</p>



  <h2>Find your Ideal Tour Packages</h2>

  <p>

Travel in India is like nothing you’ve ever experienced, from the magnificence Taj Mahal to the highlights of Kerala, Goa and India, this is a great trip for first-time visitors as it encompasses all of the major tourist destinations.

  </p>

<div className='container1'>

     
{received.filter((item) => item.category === "home" && item.id >= 1 && item.id <= 4)

    .map((item, index) => {
        return (
            <div className="container" key={index}>
                <img
                    src={item.photo} 
                    alt="not found"
                />
                <div id="Description2">
                    <h3>{item.title}</h3>
                </div>
            </div>
        );
    })}

</div>


<h2>Find your Perfect Holiday Destination</h2>
<p>

Check out this India most iconic heritage, natural beauty, colourful, cultural and spiritual Attractions India. Beaches, backwaters, vast stretches of deserts, snow-laden peaks and Indian wildlife sanctuaries make the country one of the best winter destinations.  

  </p>




<div className='container1'>

     
{received.filter((item) => item.category === "home" && item.id >= 5 && item.id <= 10)
    .map((item, index) => {
        return (
            <div className="container3" key={index}>
                <img
                    src={item.photo} 
                    alt="not found"
                />
                <div id="Description2">
                    <h3>{item.title}</h3>
                </div>
            </div>
        );
    })}

</div>



        </div>
        
        </>
    )
}


export default Home;