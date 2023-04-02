import { NavLink } from 'react-router-dom';
import css from './SideBar.module.css';
import { MdSpaceDashboard } from 'react-icons/md '
import { AiFillCalendar , AiOutlineTable } from 'react-icons/ai'
import { FaTasks } from 'react-icons/fa'
import Dashboard from '../../pages/Dashboard/Dashboard';

const SideBar = () => {
    return (
        <div className={css.container}>
            
            <NavLink to="dashboard" className={css.item} title="Go Back To The Dashboard">
                <img src="./logo.png" alt="Logo Picture" className={css.logo} />
            </NavLink>

            <div className={css.menu}>

                <NavLink to="dashboard" className={css.item} title="Dashboard">
                    <MdSpaceDashboard size={30} />
                </NavLink>

                <NavLink to="calendar" className={css.item} title="Calendar">
                    <AiFillCalendar size={30} />
                </NavLink>

                <NavLink to="board" className={css.item} title="Trello Board">
                    <FaTasks size={30} />
                </NavLink>

                <NavLink to="users" className={css.item} title="Users">
                    <AiOutlineTable size={30} />
                </NavLink>

            </div>
        </div>
    )
}

export default SideBar;
