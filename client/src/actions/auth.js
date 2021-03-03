import { AUTH } from '../constants/actionTypes'
import * as api from '../api'
import { useHistory } from 'react-router-dom'



export const signin = (post) => async(dispatch) => {
    try {
        //login the user
        const history = useHistory()
        history.push('/')
    } catch(error) {
        console.log(error)
    }   
}

export const signup = (formData, history) => async(dispatch) => {
    try {
        //sign up the user
        const history = useHistory()
        history.push('/')
    } catch(error) {
        console.log(error)
    }   
}