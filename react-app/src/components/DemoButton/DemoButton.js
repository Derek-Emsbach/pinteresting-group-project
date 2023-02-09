import * as sessionActions from '../../store/session'
import { useDispatch } from "react-redux";
import { useEffect ,useState} from "react";
import { useHistory } from "react-router-dom";
import { getAllPins } from '../../store/pin';

const DemoButton =({email,password})=>{
    const dispatch = useDispatch();
    const history = useHistory()

 useEffect(() =>{
    dispatch(sessionActions.login({email, password}))

 },[dispatch])


history.push('/')

}
export default DemoButton