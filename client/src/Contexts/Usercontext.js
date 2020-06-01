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
            getcurrentuser:this.getcurrentuser,
            currentuser:{},
            logout:this.logout,
            userslist:[],
            loading:'none'
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
        
        this.setState({loading:'block'})

        axios.post('/api/user/registeruser', user).then(
            res => {
                swal(res.data)
                this.setState({loading:'none'})
            }
        )
    }

    login=(user)=>{

        this.setState({loading:'block'})
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

                this.setState({loading:'none'})
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

    getcurrentuser=()=>{

        axios.post('/api/user/getcurrentuser',{useremail:localStorage.getItem('useremail')})
        .then((res)=>{
            this.setState({currentuser:res.data[0]},()=>{})
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