import React , {useEffect, useState}  from 'react';
import {validate}  from './validate';
import {notify} from './toast'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from  './Form.module.css';
import { Link } from 'react-router-dom';

const Form = () => {
    const [data,setData] = useState({
        email:'',
        password:'',
    })
    const [touch,setTouch] = useState({});
    const [errors ,setErrors] = useState({});
    useEffect(() =>{
        setErrors(validate(data));
        // console.log(errors);
    },[data])
    
    const changeHandler =event => {
      
            setData({...data , [event.target.name]:event.target.value})
        
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
                email:true,
                password:true,
            })
        }
    }

    return (
       <div className={styles.container}>
         <form onSubmit={submitHandler} className={styles.formContainer}>
            <h1 className={styles.header}>Login</h1>
       
            <div className={styles.formFeild}>
                <label>Email</label>
                <input type="text" name='email' value={data.email} onChange={changeHandler} onFocus={touchHandler} className={(errors.email && touch.email ? styles.unCompleted : styles.formInput)}/>
                {errors.email && touch.email && <span>{errors.email}</span>}

            </div>
            <div className={styles.formFeild}>
                <label>Password</label>
                <input type="password" name='password' value={data.password} onChange={changeHandler} onFocus={touchHandler} className={(errors.password && touch.password ? styles.unCompleted : styles.formInput)}/>
                {errors.password && touch.password && <span>{errors.password}</span>}

            </div>
           
            <div className={styles.formButtons}>
                <Link to='/signup'>Sign up</Link>
                <button type='submit'>Login</button>
            </div>
            <ToastContainer />
        </form>
       </div>
    );
};

export default Form;