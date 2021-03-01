import { AUTH } from '../constants/actionTypes'
import * as api from '../api'

export const signin = (post) => async(dispatch) => {
    try {
        //login the user
        history.push('/')
    } catch(error) {
        console.log(error)
    }   
}

export const signout = (formData, history) => async(dispatch) => {
    try {
        //sign up the user
        history.push('/')
    } catch(error) {
        console.log(error)
    }   
}