import React , {useEffect, useState}  from 'react';
import {validate}  from './validate';
import {notify} from './toast'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
    const [data,setData] = useState({
        name: '',
        email:'',
        password:'',
        confirmPassword: '',
        isAccepted: false,
    })
    const [touch,setTouch] = useState({});
    const [errors ,setErrors] = useState({});
    useEffect(() =>{
        setErrors(validate(data));
        // console.log(errors);
    },[data])
    
    const changeHandler =event => {
        if(event.target.name ==='isAccepted') {
            setData({...data,[event.target.name]:event.target.checked})
        }else {
            setData({...data , [event.target.name]:event.target.value})
        }
        console.log(data);
    }
    const touchHandler =event => {
        setTouch({...touch,[event.target.name]:true})
    }
    const submitHandler=event => {
        event.preventDefault();
        if(!Object.keys(errors).length) {
            // console.log(data);
            notify('you Sighned in successfully' , 'success')
        }else {
            notify('invalid data' , 'error')
            setTouch({
                name: true,
                email:true,
                password:true,
                confirmPassword: true,
                isAccepted: true ,
            })
        }
    }

    return (
        <form onSubmit={submitHandler}>
            <h1>Sign Up</h1>
            <div>
                <label>Name</label>
                <input type="text" name='name' value={data.name} onChange={changeHandler} onFocus={touchHandler} />
                {errors.name && touch.name && <span>{errors.name}</span>}
            </div>
            <div>
                <label>Email</label>
                <input type="text" name='email' value={data.email} onChange={changeHandler} onFocus={touchHandler}/>
                {errors.email && touch.email && <span>{errors.email}</span>}

            </div>
            <div>
                <label>Password</label>
                <input type="password" name='password' value={data.password} onChange={changeHandler} onFocus={touchHandler} />
                {errors.password && touch.password && <span>{errors.password}</span>}

            </div>
            <div>
                <label>Confirm Password</label>
                <input type="password" name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={touchHandler}/>
                {errors.confirmPassword && touch.confirmPassword && <span>{errors.confirmPassword}</span>}

            </div>
            <div>
                <label>I accept terms of privacy</label>
                <input type="checkbox" name='isAccepted' value={data.isAccepted} onChange={changeHandler} onFocus={touchHandler}/>
                {errors.isAccepted && touch.isAccepted && <span>{errors.isAccepted}</span>}

            </div>
            <div>
                <a href='/'>Login</a>
                <button type='submit'>sign up</button>
            </div>
            <ToastContainer />
        </form>
    );
};

export default Form;