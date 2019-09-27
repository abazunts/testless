import React from "react";
import {compose} from "redux";
import {translate} from "react-i18next";
import injectSheet from "react-jss";
import {connect} from "react-redux";
import {addInspection, initInspectionForm, setInspection} from "../redux/historyReducer";
import {withRouter} from "react-router-dom";
import NewInspection from "../ui/Inspections/NewInspectionForm";
import {getDateTimeToString} from "../utils/getDateTimeToString";

const NewInspectionContainer = (props) => {
    const [inspectorSignature, setInspectorSignature] = React.useState(null);
    const [signature, setSignature] = React.useState(null);
    const [violations, setViolations] = React.useState([]);

    const useStateData = {
        signature,
        setSignature,
        violations,
        setViolations,
        inspectorSignature,
        setInspectorSignature
    };

    const startTime = getDateTimeToString(new Date());

    const getPosition = () => {
        props.initInspectionForm()
    };

    React.useEffect(() => {
        props.initInspectionForm()
    }, []);

    const cancel = () => {
        props.history.push(`../inspections`);
    };

    const onSubmit = (values) => {
        const data = {...values, violations, signature, inspectorSignature};
        debugger
        props.addInspection(data);
        props.history.push(`../inspections`);

    };
    return <NewInspection {...props} onSubmit={onSubmit} cancel={cancel} useStateData={useStateData} startTime={startTime} getPosition={getPosition} />
};

const mapStateToProps = (state) => {
    return {
        nationality: state.historyPage.nationality,
        violationItems: state.historyPage.violationItems,
        violation: state.historyPage.violation,
        shopLocation: state.historyPage.shopLocation,
        startTime: state.historyPage.startTime,
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {setInspection, addInspection, initInspectionForm})
)(NewInspectionContainer);