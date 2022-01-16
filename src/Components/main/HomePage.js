import * as React from 'react';
import styles from "../../Styles/HomePage.module.css";

const HomePage = () => {

    return (
        <React.Fragment>
            <div className={styles.home}>
                <p className={styles.homePageText}>
                    Welcome to the SpaceX Launches site.<br/>
                    Here you'll get info about the past, latest and upcoming rocket launches.
                </p>
            </div>
        </React.Fragment>
        
    )
}

export default HomePage;