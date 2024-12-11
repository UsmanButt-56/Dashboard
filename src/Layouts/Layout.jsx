import React,{useState , useEffect} from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import { Outlet ,useLocation } from 'react-router-dom';
function Layout() {
  const [heading ,setHeading] = useState('');
  const [subHeading ,setSubHeading] = useState('');
  const location = useLocation();

  useEffect(()=> {
    switch (location.pathname){
      case '/dashboard' :
      setHeading('Dash');
      setSubHeading('Board');
      break;
      default:
      setHeading('To');
      setSubHeading('-Do');
    }
  }, [location.pathname]);
  return (
    <>
      <div className='flex flex-col'>
      <Navbar heading={heading} subHeading={subHeading} />
        <div className="flex mt-[95px]">
          <Sidebar />
          <div className="flex-grow ms-24 md:ms-96 sm:me-10 me-1 mt-10 md:mt-14 ">
            {/* sm:mt-14 */}
          <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout;