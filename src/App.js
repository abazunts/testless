import React from 'react';
import HeaderContainer from "./ui/Header/Header";
import {Route} from "react-router-dom";
import LoginContainer from "./ui/Login/Login";
import InspectionsHistoryContainer from "./ui/Inspections/InspectionHistory";
import NewInspectionContainer from "./containers/NewInspection";
import injectSheet from "react-jss";
import './resources/less/styles.less'

const App = (props) => {
    return (
        <body >

            <div>
                <HeaderContainer/>
            </div>
            <section className="content home">
                <div>
                    <Route exact path={'/login'} render={() => <LoginContainer/>}/>
                    <Route exact path={'/inspections/:id?'} render={() => <InspectionsHistoryContainer/>}/>
                    <Route exact path={'/inspections/add'} render={() => <NewInspectionContainer/>}/>
                </div>
            </section>
            <footer className="footer">
                <p>All rights reserved for the <a href="#" className="text-underline">Saudi Authority for Intellectual
                    Property</a>
                    © 2019</p>
            </footer>
        </body>
    );
};

const AppContainer = (props) => {
    const [innerWidth, setInnerWidth] = React.useState(0)
    React.useEffect(() => {
        window.addEventListener('resize', () => {
            setInnerWidth(window.innerWidth)
        })
    }, []);

    return <App {...props} innerWidth={innerWidth}/>
};

const styles = {
    background: '#ffffff'
};
export default injectSheet(styles)(AppContainer);

