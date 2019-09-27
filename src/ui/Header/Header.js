import React, {Fragment} from 'react'
import NavbarContainer from "../Navbar/Navbar";
import UserInfoContainer from "../Login/UserInfo";
import {translate} from "react-i18next";
import '../../resources/less/styles.less'
import {compose} from "redux";
import {connect} from "react-redux";
import {authMe} from "../../redux/loginReducer";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const {changeLanguage} = props;
    const {t, i18n} = props;
    return <Fragment>
        <header className='header'>
            <div className="header-wrap">
                <NavLink to={"/"} className="logo">
                    <span>Beta</span>
                </NavLink>
                <ul className="header-menu js-sidebar">
                    <NavbarContainer i18n={i18n}/>
                </ul>
                <div className="header-actions">
                    {i18n.language === 'en' ?
                        <button onClick={() => changeLanguage("ar")}
                                className="header-actions__lang js-lang-toggler">{t("code.ar")} </button>
                        : <button onClick={() => changeLanguage("en")}
                                  className="header-actions__lang js-lang-toggler">{t("code.en")}</button>
                    }
                    <div className="header-notification js-notifications-toggler">
                        <i className="icon-bell"/>
                    </div>
                    <div className="header__dropdown js-profile-toggler">
                        <UserInfoContainer/>
                    </div>
                </div>
            </div>
        </header>
    </Fragment>
};


const HeaderContainer = (props) => {
    const [activeBtn, setActiveBtn] = React.useState('en');
    React.useEffect(() => {
        props.authMe()
    }, []);
    const changeLanguage = (lng) => {
        const {i18n, changeDirection} = props;

        setActiveBtn(lng);
        // if (lng === "ar") {
        //     changeDirection(true);
        // } else {
        //     changeDirection(false);
        // }
        i18n.changeLanguage(lng);
    };
    return <Header {...props} activeBtn={activeBtn} changeLanguage={changeLanguage}/>
};

export default compose(
    connect(null, {authMe}),
    translate("common"),
)(HeaderContainer);