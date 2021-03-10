import React,{Component} from 'react';
import {
    ButtonWrapper
}from './style'
class Button extends Component{
    render(){

        return(
            <ButtonWrapper type={this.props.type} onClick={this.props.onClick} className={this.props.className} style={this.props.style}>
              { this.props.children }
            </ButtonWrapper>
        )
    }
}
export default Button;