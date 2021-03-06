import {Component, PureComponent} from "react";
import axios from "axios";



class Login extends PureComponent{
    constructor(){
        super()
        // initialising the state
        this.state = {
            name:"Hariom",
            loading:0,
            errorMessage:"Invalid Credentials"
        }
    }
    user ={}
    handleEmail = (event)=>{
        this.user.email = event.target.value
      }
    handlePassword = (event)=>{
         this.user.password = event.target.value
       }
    handleName = (event)=>{
        this.user.name= event.target.value
      }
    login = (event)=>{
        event.preventDefault()
        let apiurl = "https://apifromashu.herokuapp.com/api/login"
        axios({
            method:"post",
            url:apiurl,
            data:this.user
        }).then((response)=>{
            console.log('response',response)
            if(response.data.token){
                this.props.loggedin()
                this.props.history.push("/")
                console.log(this.props)
            }
            else{
                alert("Invalid Credentials")
            }
        },(error)=>{
            console.log('error',error)
        })
       
    }
    
    render(){
        return (
            <div style={{width:"50%" , margin:"auto"}}>
                              
                <form>
                <h1>Login Here</h1>
               
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input onChange={this.handleEmail} type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input onChange={this.handlePassword} type="password" class="form-control"  placeholder="Password" />
                </div>
                <div>
                <label className="errormessage">{this.state.errorMessage}</label>
                <button style={{float:"right"}} onClick={this.login} type="submit" class="btn btn-primary">Login</button>
                </div>
                </form>
            </div>
        )
    }
}

export default Login