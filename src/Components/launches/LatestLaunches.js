import React, {useEffect, useState} from 'react';
import Card from "../shared-components/Card";
import {Link} from 'react-router-dom';
import '../../Styles/Launches.css';

const LatestLaunches = () => {

    const [latestLaunches, setLatestLaunches] = useState([]);

    useEffect(()=> {
        fetch("https://api.spacexdata.com/v4/launches/latest")
        .then((res) => res.json())
        .then(response => {setLatestLaunches([response]);
            console.log(response);})
    },[])

    return (
        <React.Fragment>
            <div className='title'>
                <p className='titleText'>LATEST LAUNCHES</p>
            </div>
            <div className='mainDiv'>
                <ul>
                {latestLaunches.map( (item,key) => (
                    <li>
                        <Link to={'/launch/' + item.id} className='cardLink'>
                            <Card 
                            imgSrc = {item.links.patch.small} 
                            name = {item.name}
                            date = {item.date_utc} 
                            flightNum = {item.flight_number} 
                            details = {item.details}
                            key={key}
                            id={item.id}
                            fullInfo={JSON.stringify(item)}/> 
                        </Link>
                    </li>
                            
                ))}
                </ul>
            </div>  
        </React.Fragment>
    )
}

export default LatestLaunches;