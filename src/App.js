
import {Route, Routes} from 'react-router-dom';
import './App.css';
// import Header from './Component/Header/Header';
// import Datafetch from './Component/FEtch/Datafetch';

import Shared from './Component/Shared/Shared';
import Main from './Component/Main/Main';

function App() {
  return (
    <>
    <Shared/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      {/* <Route path='/abebe' element={<Banner/>}/> */}
    
    </Routes>
    </>
  )
}
export default App;
