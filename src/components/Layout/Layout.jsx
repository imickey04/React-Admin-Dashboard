import moment from 'moment/moment';
import { BiSearch } from 'react-icons/bi';
import css from './Layout.module.css';
import SideBar from '../SideBar/SideBar';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const Layout = () => {

    const { pathname } = useLocation();

    return (
        <div className={css.container}>

            {/* <div>Sidebar</div> */}

            <SideBar />

            {pathname === "/" && <Navigate to="/dashboard" />}
            
            <div className={css.dashboard}>
                <div className={css.topBaseGradients}>
                    <div className='gradient-red'></div>
                    <div className='gradient-orange'></div>
                    <div className='gradient-blue'></div>
                </div>

                <div className={css.header}>

                    <span>{moment().format("dddd, Do MMM YYYY")}</span>
                    
                    <div className={css.searchBar}>
                        <BiSearch size={20} />
                        <input type="text" placeholder='Search' />
                    </div>

                    <div className={css.profile}>
                        <img src="./myProfile.png" title="Mayank Chanabhatti" alt="Profile-Picture" />
                        <div className={css.details}>
                            <span>Mayank Chanabhatti</span>
                            <span>chanabhattimayank@gmail.com</span>
                        </div>
                    </div>
                </div>

                <div className={css.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout
