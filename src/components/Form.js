import React , {useEffect, useState}  from 'react';
import {validate}  from './validate';
import {notify} from './toast'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from  './Form.module.css';
import { Link } from 'react-router-dom';

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
        setErrors(validate(data,'signup'));
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
       <div className={styles.container}>
         <form onSubmit={submitHandler} className={styles.formContainer}>
            <h1 className={styles.header}>Sign Up</h1>
            <div className={styles.formFeild}>
                <label>Name</label>
                <input type="text" name='name' value={data.name} onChange={changeHandler} onFocus={touchHandler} className={(errors.name && touch.name ? styles.unCompleted : styles.formInput)}/>
                {errors.name && touch.name && <span>{errors.name}</span>}
            </div>
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
            <div className={styles.formFeild}>
                <label>Confirm Password</label>
                <input type="password" name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={touchHandler} className={(errors.confirmPassword && touch.confirmPassword ? styles.unCompleted : styles.formInput)}/>
                {errors.confirmPassword && touch.confirmPassword && <span>{errors.confirmPassword}</span>}

            </div>
            <div className={styles.checkboxContainer}>
                <div className={styles.formFeild}>
                    <label>I accept terms of privacy</label>
                    <input type="checkbox" name='isAccepted' value={data.isAccepted} onChange={changeHandler} onFocus={touchHandler}/>
                    {errors.isAccepted && touch.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
            </div>
            <div className={styles.formButtons}>
                <Link to='/login'>Login</Link>
                <button type='submit'>sign up</button>
            </div>
            <ToastContainer />
        </form>
       </div>
    );
};

export default Form;