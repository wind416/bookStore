import React,{Component}from 'react';
import {
    Nav,
    NavBar
}from '../Header/style'
class Footer extends Component{
    
    render(){
        return(
            <div>
                <Nav className="footBar">
                        <p >Copyright © 2013-2020 网上书店  All Rights Reserved. 备案号：闽ICP备15012807号-1</p>
                </Nav>
            </div>
        )
    }
}
export default Footer;