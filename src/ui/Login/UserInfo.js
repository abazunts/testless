import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {NavLink} from "react-router-dom";
import {logout} from "../../redux/loginReducer";

import '../../resources/less/styles.less'

const UserInfo = (props) => {
    const {isAuth, user, logOut} = props;
    return <Fragment>
        <div className="header__dropdown-icon">
            <i className="icon-person"/>
        </div>
        {isAuth ? <>
            <div className="header__dropdown-group">
                <span>Welcome</span>
                <p>{user.userName}</p>
            </div>
            <button onClick={logOut} className="icon-exit"/>
        </> : <NavLink to={'/login'}>Sign In</NavLink>}
    </Fragment>
};


const UserInfoContainer = (props) => {
    const logOut = () => {
        props.logout()
    };
    return <UserInfo {...props} logOut={logOut}/>
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.loginPage.isAuth,
        user: state.loginPage.user,
    }
};

export default compose(
    connect(mapStateToProps, {logout})
)(UserInfoContainer);