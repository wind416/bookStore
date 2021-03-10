import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {
    LeftSideWrapper,
    LeftLi
}from '../style';

class LeftSide extends  Component{
    render(){
        return(
            <LeftSideWrapper>
                <div className="col-sm-2">
                <ul className="nav nav-pills nav-stacked">
            
                    <LeftLi className="active">
                        <a href="#">全部功能</a>
                    </LeftLi>
                    <LeftLi><Link to={{pathname:"/person/"+this.props.phone}}>我的资料</Link></LeftLi>
                    <LeftLi><Link to="/person/updateInfo/update"
                                        >修改个人资料</Link>
                    </LeftLi>
                    <LeftLi><Link to="/person/myOrder/orders"
                                    >我的订单</Link></LeftLi>
                </ul>
                </div> 
            </LeftSideWrapper>
        )
    }
}
export default LeftSide;