import React ,{Component,createContext} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';
export const Userprovider=createContext();
class usercontext extends Component {
        constructor(props) {
        super(props);
        this.state = { 
            
            getallusers:this.getallusers,
            register:this.register,
            login:this.login,
            deleteuser:this.deleteuser,
            logout:this.logout,
            userslist:[]
         }
    }

    getallusers=()=>{
        axios.post('/api/user/getusers').
        then((res)=>{
             this.setState({userslist:res.data})
           
        }).
        catch((err)=>{
            console.log(err);
        })
    }
    register=(user)=>{
        

        axios.post('/api/user/registeruser', user).then(
            res => {
                swal(res.data)
            }
        )
    }

    login=(user)=>{
        axios.post('/api/user/loginuser', user).then(
            res => {
                if (res.data.token) {
                    localStorage.setItem('loggedin', res.data.token);
                    localStorage.setItem('useremail',user.email);
                    console.log(res.data.token);
                    swal('Login Successfull','Dont forget to do logout after session','success').
                    then(()=>{
                        return window.location = '/products';
                    })
                  
                }
                else if (res.data == '1') {
                    swal('Email verification is pending','','warning')
                }
                else {
                    swal('Invalid Username or Password','','error')
                }
            }
        )
    }

    deleteuser=(useremail)=>{
          
       axios.post('/api/user/deleteuser',{useremail:useremail}).
       then((res)=>{
           alert(res.data);
           this.state.getallusers();
       }).
       catch((err)=>{
           alert(err.data);
       })
       

    }



    render() { 
        return ( 

            <Userprovider.Provider value={{...this.state}}>

                  {this.props.children}

            </Userprovider.Provider>

         );
    }
}
 
export default usercontext;