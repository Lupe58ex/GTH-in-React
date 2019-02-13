import React, { Component }  from 'react';
import axios from 'axios';

class Login extends Component { 
    constructor(){
        super();
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            email:'',
            password:''
        }
    }

    onChangeEmail(e){
        this.setState ({
            email:e.target.value
        })
    }
    onChangePassword(e){
        this.setState ({
            password:e.target.value
        })
    }

    onSubmit(e)
    {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        axios.post('http://localhost:8000/api/register',user)
        .then(res=>console.Login(res.data));
    }
   
    render(){
        return (
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                <div className='form-group'>
                    <input 
                    type='email' 
                    className='form-control' 
                    id='email' 
                    placeholder='email'
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    />
                    <input  
                    className='form-control' 
                    id='password' 
                    placeholder='password'
                    value={this.state.password}
                    onChange={this.password}/>

                </div>
                <button type='submit' className='btn'>Enviar</button>
                </form>
            </div>
        );
    }
}
export default Login;