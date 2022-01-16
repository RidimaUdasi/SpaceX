import React from 'react';
import styles from '../../Styles/Card.module.css';
import dummyImage from "../../Images/dummyImg.jpg";

const Card = (props) => {

    const formattedDate = new Date(props.date).toGMTString();
    let imgSrc = null;
    let details = null;

    if(props.imgSrc === null) {
        imgSrc = dummyImage;
    }
    else {
        imgSrc = props.imgSrc
    }

    if(props.details == null) {
        details = "Details unavailable";
    }
    else {
        details = props.details;
    }

    const clickHandler = () => {
        console.log("from card" + props.fullInfo);
        if(sessionStorage.getItem('launchDetails')) {
            sessionStorage.removeItem('launchDetails')
        }
        sessionStorage.setItem('launchDetails', props.fullInfo);
    }

    return (
        <React.Fragment>
                <div className={styles.card} onClick = {clickHandler}>
                    <img src={imgSrc} alt="RocketInfo" className={styles.img}/>
                    <div className={styles.container}>
                        <h3>{props.name}</h3>
                        <p><span>Launch Date - </span><span>{formattedDate}</span></p>
                        <p><span>Flight Number - </span><span>{props.flightNum}</span></p>
                        <p><span>Flight Details - </span><span>{details}</span></p>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Card;