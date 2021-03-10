/* eslint-disable eqeqeq */
import React,{ Fragment } from 'react';
import Button from '../Button/index';
import { Link } from 'react-router-dom';
export default function LoginButtonWrapper(props) {
    const {loginState, isManage,userInfo ,phone}=props;
    
    if(loginState){
        if(isManage== 2){
            return(
                <Fragment>
                    <Button className="default four small" type="button" onClick={props.loginOut}>退出登录</Button>
                    <Link to={{pathname:"/person/"+phone,
                            state:userInfo}}>
                        <Button  className="personal primary small">hi,{props.phone}</Button>
                    </Link>
                    <Link to="/manager/managerBook">
                        <Button className="success four small">管理书籍  </Button>
                    </Link>
                    <Link to="/manager/managerOrder">
                        <Button  className="info four small" >  管理订单</Button>
                    </Link>
                    
                    <Link to="/manager/managerUser">
                        <Button  className="warning four small" href="AllUser"> 管理用户 </Button>
                    </Link>
                  
                </Fragment>
                )
        }else{
            return(
                <Fragment>
                    <Button className="default four small" type="button" onClick={props.loginOut}>退出登录</Button>
                    <Link to={{pathname:"/person/"+phone,
                            state:userInfo}}>
                        <Button  className="personal primary small">hi,{props.phone}</Button>
                    </Link>
                </Fragment>
            )
        }
        

    }else{
        return(
            <Fragment>
                 <div className="button">
                    <Link to="/login/register">
                            <Button  className="default small" >注册</Button>
                    </Link>
                
                    <Link to="/login">
                            <Button className="primary small" >登录</Button>
                    </Link>
                
                </div>
            </Fragment>
        )
    }
    
  
    
}