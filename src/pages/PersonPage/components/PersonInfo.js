import React,{Component} from 'react';
import {
    PersonInfoWrapper,
    NavBar,
    NavHeader
}from '../style'
class PersonInfo extends  Component{
    render(){
        const { user }=this.props;
        return(
       
                <PersonInfoWrapper class="personInfo">
                    <NavBar class="navbar navbar-default" role="navigation">
                            <div class="container-fluid">
                            <NavHeader class="navbar-header">
                                <img className="phone" src="http://img7x1.ddimg.cn/imghead/15/9/9921910134921-1_o.png?=5792" alt="个人头像"/>
                               
                                    <span className="userName">{user.phone}</span>
                                   
                                
                            </NavHeader>
                        
                            </div>
                        
                    </NavBar>
                    <ul class="breadcrumb order">
                            <li class="first"><span>待付款</span></li>
                            <li><span>待发货</span></li>
                            <li><span>待收货</span></li>
                            <li><span>待评价</span></li>
                            <li><span>退款</span></li>
                    </ul>
                </PersonInfoWrapper>
      
        )
    }
}
export default PersonInfo;