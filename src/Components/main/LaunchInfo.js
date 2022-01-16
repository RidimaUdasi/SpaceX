import React from 'react';
import styles from "../../Styles/LaunchInfo.module.css";

const LaunchInfo = (props) => {
    
    let obj = JSON.parse(sessionStorage.getItem('launchDetails'));

    return (
        <React.Fragment>
            <div className={styles.info}>
                <h2><span>Launch Name - </span> <span>{obj.name}</span></h2>
                <h3><span>Launch Date - </span> <span>{new Date(obj.date_utc).toGMTString()}</span></h3>
                <h4><span>Flight Number - </span> <span>{obj.flight_number}</span></h4>
                <hr/>
                <p><span>Details - </span> <span>{obj.details}</span></p>
                <p><span>Success - </span><span>{obj.success}</span></p>
                <p><span>List of Payload - </span><span>{obj.payloads}</span></p>
                <p><span>Youtube - </span><span>{obj.links.youtube_id}</span></p>
                <p><span>Read More - </span><span>{obj.links.article}</span></p>
                <p><span>Wikipedia - </span><span>{obj.links.wikipedia}</span></p>
            </div>
        </React.Fragment>
    )
    
}

export default LaunchInfo;