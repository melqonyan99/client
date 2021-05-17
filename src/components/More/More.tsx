import React from 'react'
import Header from '../Header/Header'
import './more.scss'
import simple from './images/simple.png'
import placemark from './images/placemark.png'
import rulecontrol from './images/rulecontrol.png'
import polyline from './images/polyline.png'

export default () => {
    return (
        <div className="more">
            <div className="more_head">
                More about "Travel With Me"
            </div>
            <div className="more_info">
                Users can make new data on the map with the help of the Yandex.Map editor .In geographies where it is hard to find providers of good map data, user contributions could be used to increase map quality. Any registered Yandex user can edit the map through a simple web editor pending edit moderation.

                In the editor there are five special modes for drawing objects:
           <ul>
                  <li> Scaling and rotation - to rotate objects around their axis and reduce / increase the size.</li> 
                   <li>Angle alignment - makes it easy to draw objects with most corners straight.</li> 
                   <li>Rounding corners - simplifies the drawing of roads and rivers, rounding their corners.</li> 
                   <li>Adhesion - the boundaries of the contours of objects of the same category are joined in one line.</li> 
                   <li>Cutting - helps draw buildings with adjacent borders, as well as high-rise buildings</li> 
                   <li>The editing interface also allows for additional data to be added to certain categories of objects, such as the height of buildings, the direction of traffic at the roads, hours of operation, phone numbers etc.</li> 
           </ul>
            </div>
            <div className="more_section">
                <div className="more_section_first">
                    <div className="more_section_first_image">
                        <img src={simple} alt="simple" />
                    </div>
                    <div className="more_section_first_info">
                        Find any country, any city, any object with the help of a map.The service provides detailed maps of the whole world. It includes a search, information about traffic jams, routing and street panoramas.
                    </div>
                </div>
                <div className="more_section_second">
                    <div className="more_section_second_info">
                        Mark the desired object, country, or city with a special marker․
                    </div>
                    <div className="more_section_second_image">
                        <img src={placemark} alt="simple" />

                    </div>
                </div>
                <div className="more_section_third">
                    <div className="more_section_third_image">
                        <img src={polyline} alt="simple" />
                    </div>
                    <div className="more_section_third_info">
                        Mark any two objects, and you'll see the space between them.

                    </div>
                </div><div className="more_section_fourth">
                    <div className="more_section_fourth_info">
                        Mark on any two objects and know the distance between them.
                    </div>
                    <div className="more_section_fourth_image">
                        <img src={rulecontrol} alt="simple" />

                    </div>
                </div>

            </div>
        </div>
    )
}