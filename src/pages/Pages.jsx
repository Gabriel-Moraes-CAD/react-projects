import React from 'react'
import {Route, Routes} from "react-router-dom";
import MainPage from '../components/MainPage';
import SpaceProFigGridDetails from '../components/SpaceProFigGridDetails';
import SpaceProMain from '../components/SpaceProMain';
import SpaceProSpaceGDetails from '../components/SpaceProSpaceGDetails';


function Pages() {
  return (
     <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/spaceProMain" element={<SpaceProMain/>}/>
            <Route path="/spaceprospacegdetails/:image" element={<SpaceProSpaceGDetails/>}/>
            <Route path="/spaceprofiggriddetails/:id" element={<SpaceProFigGridDetails/>}/>
    </Routes>
  )
}

export default Pages