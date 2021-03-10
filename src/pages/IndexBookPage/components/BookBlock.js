import React,{  Component} from 'react';
import { Link } from 'react-router-dom';
import {
    BookBlockWrapper,
    BookCaption
}from '../style'
class BookBlock extends Component{
    render(){
        const {book }=this.props;
        console.log(book)
        return(
            <BookBlockWrapper className={this.props.className} >
                <Link to={{
                        pathname:`/book/${book.id}`,
                        state:book
                        }} >
                <div class="thumbnail"  >
                    <img src={book.image}
                        alt="通用的占位符缩略图" 
                        className="bookImg" onclick=""/>
                    <BookCaption  className={this.props.className}>
                        <p class="bookprice">
                            ￥ {book.price}
                            <span class="oldPrice">￥{book.oldPrice}</span>
                        </p>
                        {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <span>{book.name}</span>
                    <span class="writer">[{book.author},{book.publisher}]</span>
                        
                    </BookCaption>
                </div>
                </Link>
            </BookBlockWrapper>
        )
    }
   
}
export default BookBlock;