import React, { Component } from 'react';
import shortid from 'shortid'
import swal from 'sweetalert';


class Text extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "sathya",
            myarray: []
        }
    }


   openalert=()=>{
    swal("Good job!", "You clicked the button!", "info");
   }

  componentDidMount() {
      for(var i=0;i<31;i++)
      {
          console.log(shortid.generate());
      }
  }





    render() {
        return (
            <div>

                <button onClick={this.openalert}>Alert</button>
               

            </div>

        );
    }
}

export default Text;