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
        <div className={style.buttons}>
            <div className={style.button}>
                <Button onClick={clear} title={props.t("inspections.clearButton")} width={'60px'}/>
            </div>
            <div className={style.button}>
                <Button onClick={trim} title={props.t("inspections.saveButton")} width={'60px'}/>
            </div>
            <div className={style.button}>
                <Button onClick={props.onClick} title={props.t("inspections.closeButton")} width={'60px'}/>
            </div>
        </div>
    </div>
};

export default Signature