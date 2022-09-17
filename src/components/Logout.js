
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const LogOUt = () => {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();
    const handleLogout = async  () => {
        try {
            await logout();
            navigate('/');
            console.log('You are logged out')
          } catch (e) {
            console.log(e.message);
          }
      
    }
    return ( 
        <div>
     
            <p className='absolute right-0 top-0 mr-40'> { user && user.email}</p>
            <br></br>
            <br></br>
            <button onClick={handleLogout} className=" bg-green-500  absolute right-0 top-0  hover:bg-green-700 text-white uppercase text-sm font-semibold px-10 py-3 rounded">
                Log out
            </button>
        </div>
     );
}
 
export default LogOUt;