import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o';
import ViewListIcon from '@material-ui/icons/ViewList';


export const Nav = () => {
    return (
        <React.Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
            <div className="container">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link"><HomeIcon style={{ fontSize: 35 }}/></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/add" className="nav-link"><AddDayIcon /></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/list" className="nav-link"><ViewListIcon style={{ fontSize:35}} /></Link>
                        </li>
                    </ul>
                </div>
        </div>
    </nav>
           
        
    </React.Fragment>
    );
    
    
    }