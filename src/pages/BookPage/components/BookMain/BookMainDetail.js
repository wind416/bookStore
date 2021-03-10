import React,{ Component } from 'react';
import {
    BookMainDetailWrapper
}from '../../style.js'
class BookMainDetail extends Component{
    render(){
        const {book}=this.props;
        return(
            <React.Fragment>
                <BookMainDetailWrapper>
                    <div className="goodsMain">
                                    
                        <span className="goodname">产品名称:&nbsp;${book.name }</span>
                        <span className="mainTil">产品参数:</span>
                        <span className="first">开本：32开</span>
                        <span>纸张：胶版纸</span>
                        <span>包装：精装</span>
                        <span>是否套装：否</span>
                        <span>所属分类:图书&gt;历史&gt;世界史&gt;其他</span>
                
                    </div>
                </BookMainDetailWrapper>
            </React.Fragment>
        )
    }
}
export default BookMainDetail;