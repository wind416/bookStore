import React,{ Component } from 'react';

import BookBlock from './BookBlock';
import  {
    BookItemWrapper,
    BookItemTitle,
    
} from '../style';
class BookItem extends  Component{
    
    render(){
        let { bookList }=this.props;
        return(
          
                <BookItemWrapper>
                    <BookItemTitle class="newBookTitle">最新上架 </BookItemTitle>
                    <div class="row">

                        {
                            bookList.map((item)=>{
                                return(
                                   <BookBlock key={item.id} book={item}/> 
                                )
                               
                            })
                        }
                     
                    </div>
                </BookItemWrapper>
   
            
        )
    }
}
export default BookItem;