import React from 'react';
import Services from './Services';
import { useEffect  , useState} from 'react';
import WithoutLogin from './WithoutLogin';
import Spinner from './Spinner.js';

const Home = (props) => {
  const [isLogin, setisLogin] = useState(false);
  const [isAdmin , setisAdmin] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setisLogin(true);
    }
    if(localStorage.getItem('admin')){
      setisAdmin(true);
    }
  }, [])
  return (
    <div>
      {/* <Spinner/> */}
      {<WithoutLogin></WithoutLogin>}
      {/* <div className='container'>{isLogin && isAdmin && <Services showAlert={props.showAlert}></Services>}</div> */}
    </div>
  )
}
export default Home;