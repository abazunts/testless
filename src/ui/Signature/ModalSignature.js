import React from 'react';
import Modal from 'react-modal';
import Signature from "./index";
import Button from "../../elements/Button/button";
import injectSheet from "react-jss";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: 'auto',
        height: 'auto',
    }
};

let styles = {
    button: {
        cursor: 'pointer',
        textAlign: 'center',
        fontSize: '12px',
        background: '#0065a1',
        border: 'none',
        borderRadius: '25px',
        color: 'white',
        padding: '10px',
        width: '100px'

    }
};

class ModalSignature extends React.Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        };


    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    render() {
        return (
            <div>
                {/*<Button onClick={this.openModal} title={this.props.t('inspections.addSignature')} background={'#0065a1'}/>*/}
                <div className={this.props.classes.button} onClick={this.openModal}>{this.props.t('inspections.addSignature')}</div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <Signature {...this.props} onClick={this.closeModal}/>
                </Modal>
            </div>
        );
    }
}

export default injectSheet(styles)(ModalSignature)