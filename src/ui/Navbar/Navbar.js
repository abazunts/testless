import React, {Fragment} from 'react'
import {NavLink, withRouter} from "react-router-dom";
import '../../resources/less/styles.less'

const Navbar = (props) => {
    const {classes, i18n, location} = props;
    return <Fragment><ul className="header-menu js-sidebar">
        <li className={location.pathname === '/' ? "header-menu__item active" : "header-menu__item js-submenu-toggler"}>
            <NavLink exact to={'/'} className="header-menu__link" >
                <i className="icon-home"/>
                <span>Home</span>
            </NavLink>
        </li>
        <li className={location.pathname === '/inspections' ? "header-menu__item active" : "header-menu__item js-submenu-toggler"}>
            <NavLink to={'/inspections'} className="header-menu__link">
                <i className="icon-apps"/>
                <span>Inspections</span>
            </NavLink>
        </li>
        <li className={location.pathname === '/services' ? "header-menu__item active" : "header-menu__item js-submenu-toggler"}>
            <NavLink to={'/services'} className="header-menu__link">
                <i className="icon-services"/>
                <span>Services</span>
            </NavLink>
        </li>
        <li className={location.pathname === '/works' ? "header-menu__item active" : "header-menu__item js-submenu-toggler"}>
            <NavLink to={'/works'} className="header-menu__link">
                <i className="icon-services"/>
                <span>Works</span>
            </NavLink>
        </li>
        <li className={location.pathname === '/resources' ? "header-menu__item active" : "header-menu__item js-submenu-toggler"}>
            <NavLink to={'/resources'} className="header-menu__link">
                <i className="icon-resources"/>
                <span>Resources</span>
            </NavLink>
        </li>
        <li className={location.pathname === '/support' ? "header-menu__item active" : "header-menu__item js-submenu-toggler"}>
            <NavLink to={'/support'} className="header-menu__link">
                <i className="icon-support"/>
                <span>Support</span>
            </NavLink>
        </li>
    </ul>
    </Fragment>
};


const NavbarContainer = (props) => {
    return <Navbar {...props}/>
};

export default withRouter(NavbarContainer);


