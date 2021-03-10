import React,{Component} from 'react';
import BookMainDetail from './BookMainDetail';
import BookComment from './BookComment';
import {
    BookMainWrapper,
    DetailTitle,
}from '../../style'
class BookMain extends  Component{
    constructor(props){
        super(props);
        this.state={
            showComment:false
        }
    }
    handleChangeShowComment(value){
        this.setState({
            showComment:value
        })

    }
    render(){
        const {book,comment}=this.props;
        const {showComment}=this.state;
        return(
            <BookMainWrapper>
                <DetailTitle>
                    <span className={ showComment?"til":"active til" }
                          onClick={this.handleChangeShowComment.bind(this,false)}>书本详情</span>
                    <span className={ showComment?"active til":"til" } 
                          onClick={this.handleChangeShowComment.bind(this,true)}>评论</span>
                </DetailTitle>  
                {
                    showComment? <BookComment comment={comment}/>:  <BookMainDetail book={book}/>   
                }
             
              
                
               
            </BookMainWrapper>
        )
    }
}
export default BookMain;