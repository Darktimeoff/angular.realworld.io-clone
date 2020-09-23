import {useRef} from 'react';

export function addDateToFormControls(formControlsCreate, newDate) {
    return new Array(formControlsCreate.length).fill('').map((_, i) => {
        return {
            ...formControlsCreate[i],
            ...newDate[i],
            valid: useRef(false), 
            touched: useRef(false),
            isValid: useRef(false)
        }
    });
}

export function formIsValid(formControls) {
    let isValid = true;
    for(let control of formControls) {
        isValid = control.isValid.current && isValid;
    }
    return isValid;
}

export function controlValid(formControls) {
    for(let i = 0; i < formControls.length; i++) {
        if(formControls[i].touched.current && !formControls[i].isValid.current) return false;
    }
    return true;
}