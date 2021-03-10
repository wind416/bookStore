import React,{Component} from 'react';
import BookBlock from '../../IndexBookPage/components/BookBlock';
import {
    GusLikeWrapper,
    GusTitle,
  
}from '../style'
class GusLike extends  Component{
    render(){
        let {books}=this.props;

        return(
            <GusLikeWrapper>
                <GusTitle class="gusTitle"> 猜你喜欢</GusTitle>
                <div class="col-sm-6 col-md-4">
                    {
                        books.slice(0,6).map((item)=>{
                            return(
                               <BookBlock className="col-3" key={item.id} book={item}/>
                            )
                        })
                    }
	         
	            </div>
	
            </GusLikeWrapper>
        )
    }
}
export default GusLike;