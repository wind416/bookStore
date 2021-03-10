import React,{Component} from 'react';
import Button from '../../../components/Button/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actionCreators } from '../store/index';

import {
    BookDetailWrapper
}from '../style'
class BookDetail extends  Component{
    handleBuyBook(){
        if(this.props.loginState){
            this.props.buyBook(this.props.phone,this.props.book.id);
        }else{
            alert("请先登录账号")
        }

    }
    render(){
        const { book  ,buySuccess}=this.props;
        if(!buySuccess){
            return(
                <BookDetailWrapper>
                        <span className="title">{book.name}</span>
                        <p className="detail">{book.detail}</p>
                        <div className="writerMess">
                            <span className="writer">作者:{book.author }</span>
                            <span className="publisher">出版社:{book.publisher }</span>
                        </div>
                        <div className="price">
                            <span >￥{book.price }</span>
                        </div>
                        <Button className="primary four" style={{float:'left'}} onClick={this.handleBuyBook.bind(this)}>立即购买</Button>
                    </BookDetailWrapper>
            )
        }else{
            return <Redirect to={{pathname:"/person/"+this.props.phone}}/>
        }
        
    }
    componentWillUnmount(){
        this.props.buySuccessMethod(false)
    }

}
const mapTostate=(state)=>({
    loginState:state.getIn(["common","login"]),
    phone:state.getIn(["common","phone"]),
    buySuccess:state.getIn(['book',"buySuccess"])


})
const mapToDispatch=(dispatch)=>({
    buyBook(phone,bid){
        dispatch(actionCreators.buyBook(phone,bid))
    },
    buySuccessMethod(value){
        dispatch(actionCreators.buySuccess(value))
    }
})
export default connect(mapTostate,mapToDispatch)(BookDetail);