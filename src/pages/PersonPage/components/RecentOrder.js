import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button/index'
import {
    RecentOrderWrapper,
    OrderTitle,
    OrderItem
}from '../style'
class  RecentOrder extends  Component{
   
    render(){
        let { userrecentOrder }=this.props;
        // userrecentOrder=[...userrecentOrder]
        return(
            <RecentOrderWrapper>
                <OrderTitle class="goodsTitle"> 最近订单</OrderTitle>
                <div class="col">
                    <ul class="lg-list">
                        {
                            userrecentOrder.map((item)=>{
                                return (
                                    <OrderItem class="lg-item" key={item.oid}>
                                       
                                        <img src={item.image} alt="订单图片"/>
                                        <p class="detail">送达：{item.detailAddress }&nbsp;&nbsp;&nbsp;联系方式:{userrecentOrder.userid }</p>
                                        <Link to={{
                                                pathname:`/book/commentBook/${item.oid}`,
                                                state:item
                                            }}>
                                            <Button className="primary">评价</Button>
                                        </Link>
                                    </OrderItem>
                            )
                            })
                        }
                       
                    </ul> 
                </div>
            </RecentOrderWrapper>
        )
    }
}

export default RecentOrder;