import React,{Component} from 'react';
import {
    NewWrapper,
    FormNew
}from './style.js'
// eslint-disable-next-line import/no-anonymous-default-export
export default (WrapperComponent)=>{
   return class  extends Component{
        render(){
            return(
                <NewWrapper className="newWrapper" id="newWrapper">
                      <FormNew className="formNew">
                        <WrapperComponent {...this.props}/>
                     </FormNew>  
                </NewWrapper>
            )
        }
    }
}