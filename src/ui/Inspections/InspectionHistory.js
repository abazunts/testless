import React from 'react';
import MaterialTable from 'material-table';
import {connect} from "react-redux";
import {compose} from "redux";
import {translate} from "react-i18next";
import {Redirect, withRouter} from "react-router-dom";
import InspectionInfo from "./InspectionInfo";
import injectSheet from "react-jss";
import Button from "../../elements/Button/button";
import 'react-table/react-table.css'

const styles = {
    addButton: {
        marginBottom: '20px',
        textAlign: 'right',
    },

};

const InspectionsHistory = (props) => {
    const {t, classes, addNewForm} = props;
    return <div>
        {!props.id ?
            <div>
                <div className={classes.addButton}>
                    <Button title={t("inspections.btnNewInspection")} onClick={addNewForm}/>
                </div>
                <MaterialTable
                    title="Inspections"
                    columns={props.columns}
                    options={{
                        headerStyle: {
                            position: 'sticky',
                            top: '0',
                            minHeight: '2em'
                        }
                    }}
                    data={props.data}
                    onRowClick={(event, rowData) => {
                        props.history.push(`../inspections/${rowData.id}`);
                    }}
                />
            </div>
            : props.id !== 'add' && <InspectionInfo id={props.id}/>}

    </div>
};

const InspectionsHistoryContainer = (props) => {
    const {columnsTable, t, isAuth} = props;
    const addNewForm = () => {
        props.history.push(`../inspections/add`);
    };
    const columns = Object.keys(columnsTable).map(key => ({title: t('inspections.' + key), field: key}));
    return <>
        {/*{!isAuth && <Redirect to={'/login'}/>}*/}
        <InspectionsHistory {...props} columns={columns} addNewForm={addNewForm}/>
        </>
};

const mapStateToProps = (state, props) => {
    return {
        data: state.historyPage.data,
        columnsTable: state.historyPage.columnsTable,
        id: props.match.params.id,
        isAuth: state.loginPage.isAuth
    }
};


export default compose(
    injectSheet(styles),
    withRouter,
    connect(mapStateToProps, null),
    translate("common"),
)(InspectionsHistoryContainer)