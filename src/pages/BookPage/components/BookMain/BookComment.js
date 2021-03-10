import React,{ Component } from 'react';
import {
    BookCommentWrapper,
    CommentBlock
}from '../../style.js'
class BookComment extends Component{
    render(){
        const {comment}=this.props;
        return(
            <React.Fragment>
                <BookCommentWrapper>
                    {
                        comment.map((item)=>{
                            return(
                                <CommentBlock className="comblock" key={item.id}>
                                    <p className="content">评价：&nbsp;{comment.content }</p>
                                    <span className="uName">{comment.userid }</span>
                                </CommentBlock>
                            )
                        })
                    }
                    
                </BookCommentWrapper>
            </React.Fragment>
        )
    }
}
export default BookComment;