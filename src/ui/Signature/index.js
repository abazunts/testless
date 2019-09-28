import SignaturePad from 'react-signature-canvas';
import style from './style.module.css'
import React from "react";
import Button from "../../elements/Button/button";


const Signature = (props) => {


    let sigPad = {};
    const clear = () => {
        sigPad.clear()
    };
    const trim = () => {
        props.setDataURL(sigPad.getTrimmedCanvas().toDataURL('image/png'));
        props.onClick();
    };

    return <div>
        <div className={style.signature}>
            <SignaturePad canvasProps={{className: style.sigPad}}
                          ref={(ref) => {
                              sigPad = ref
                          }}/>
        </div>
        <div className="modal-footer text-right b-t mt-lg">
            <button onClick={clear}
                    className="btn btn--brand-outline btn--rect btn--long js-services-works-modal-close mr-lg btn--no-shadow">{props.t("inspections.clearButton")}
            </button>
            <button onClick={props.onClick}
                    className="btn btn--brand-outline btn--rect btn--long js-services-works-modal-close mr-lg btn--no-shadow">{props.t("inspections.closeButton")}
            </button>
            <button onClick={trim}
                    className="btn btn--brand btn--long btn--no-shadow js-services-modal-toggler">{props.t("inspections.saveButton")}</button>
        </div>

    </div>
};

export default Signature