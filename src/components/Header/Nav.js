import React,{ Component } from 'react';
import ButtonLogin from './ButtonLogin';
import { Link }from 'react-router-dom'
import {
    Nav,
    NavBar,

}from './style';
export default  class NavWrapper extends Component{
    render(){
        const {loginState,loginOut,userInfo, isManage ,phone}=this.props;
        return(
            <Nav>
                          
                            <NavBar>
                               <Link to="/"> <i className="iconfont book">&#xe67e;</i></Link>
                                {/* <img className="ICON" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=932807446,2927126340&fm=26&gp=0.jpg" alt="书店"></img> */}
                                
                            </NavBar>   
                                      
                            <div className="buttonWrapper">
                                    
                                    <ButtonLogin phone={phone} loginState={loginState} isManage={isManage} userInfo={userInfo} loginOut={loginOut}/>
                                    
                                
                                
                            </div> 
    
                    </Nav>
        )
    }
   

}