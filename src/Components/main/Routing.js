import UpcomingLaunches from '../launches/UpcomingLaunches';
import PastLaunches from '../launches/PastLaunches';
import LatestLaunches from '../launches/LatestLaunches';
import HomePage from './HomePage';
import LaunchInfo from "./LaunchInfo";

import {
  Routes,
  Route
} from 'react-router-dom';
import React from 'react';

function Routing() {
  return (
    <React.Fragment>
        <Routes>
            <Route path="/launches/upcoming/*" element={<UpcomingLaunches/>}></Route>
            <Route path="/launches/past/*" element={<PastLaunches/>}></Route>
            <Route path="/launches/latest/*" element={<LatestLaunches/>}></Route>
            <Route exact path="/" element={<HomePage/>}></Route>
            <Route path="/launch/:id" element={<LaunchInfo/>}/>
        </Routes>  
    </React.Fragment>
  );
}

export default Routing;
