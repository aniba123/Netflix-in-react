import {Routes,Route} from 'react-router-dom';
import Signin from './pages/signin-page/Signin';
import Front from './pages/front-page/Front';
import Getstarted from './pages/getstarted/Getstarted';

const Router = () => {
  return (
    <>
    <Routes>
    <Route  path='/' element={<Front/>}  />
    <Route  path='/signin' element={<Signin/>}  />
    <Route path='/getstarted' element={<Getstarted/>} />
   
    </Routes>
    </>
  )
}

export default Router;