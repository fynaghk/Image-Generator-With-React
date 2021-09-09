import React, { Component } from 'react';
import Card from '../card'

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
               <Card name="fidan" surname="naghiyeva" age="20"/>
               <Card name="fidan" surname="naghiyeva" age="20"/>
            </div>
         );
    }
}
 
export default Main;
