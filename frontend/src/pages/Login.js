import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IS_LOGIN } from '../helper/config';
// import  API_URL  from "../helper/config";
import appRequest from "../hooks/useAxios";



const Login = () => {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        if (IS_LOGIN) {
            navigate("/");
        }
    }, [])
    
    
    const loginHandel =  async () => {
        try {
            let response = await appRequest.post("/auth/login" , {email,password});
            localStorage.setItem('user' , response.data);
        } catch (error) {
            console.log(error.response.data.message);
        }    
    }
    
    

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12 text-center">
                    <h3>Login</h3>
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <label>Email</label>
                        <input type={'email'} className={`form-control`} required onChange={(e) => { setEmail(e.target.value)}} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type={'password'} className={`form-control`} required onChange={(e) => { setPassword(e.target.value)}} />
                    </div>
                    <div className="form-group text-left">
                        <button className="btn btn-primary mt-3" onClick={loginHandel}>Login</button>
                    </div>
                </div>
                    <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}


export default Login;