import {apiInstance} from "./apiInstance";
import {reactLocalStorage} from "reactjs-localstorage";

const loginApi = {
    login(values) {
        return new Promise((res,rej) => {
            if(values.email == 'test@test.com' && values.password == 12345){
                res({status: 'ok', user: {userId: '1', userName: 'Test User', role: 'inspector Head'}})
            } else res({status: 'error', message:'Invalid email or password'})
        })
        // return apiInstance.post('', email, password).then(response => {
        //     return response;
        // }).catch( err => err)
    },

    isAuth() {
        return new Promise((res,rej) => {
            const auth = reactLocalStorage.getObject('auth');
            if(auth.userId){
                res({status: 'ok', auth})
            } else res({status: 'error', message:'You are not authorized'})
        })
        // return apiInstance.get('').then(response => {
        //     return response;
        // }).catch( err => err)
    },

    logout() {
        return new Promise((res,rej) => {
                res({status: 'ok'})
        })
        // return apiInstance.post('', email, password).then(response => {
        //     return response;
        // }).catch( err => err)
    },



};

export default loginApi;