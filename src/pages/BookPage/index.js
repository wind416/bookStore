import React,{Component} from 'react';
import BookImgShow from './components/BookImgShow';
import BookDetail from './components/BookDetail';
import BookMain from './components/BookMain';
import { connect } from 'react-redux';
import { actionCreators } from './store/index'
import {
    BookPageWrapper
}from './style'
class BookPage extends  Component{

    // getDerivedStatrFromProps(nextProps,prevState){
    

    // }
    
    componentDidMount(){
        this.props.getBookInfo(this.props.match.params.id);
    }
    render(){
        const { comment , bookimg ,book}=this.props;
        return(
            <BookPageWrapper>
                <BookImgShow bookimg={bookimg}/>
                <BookDetail book={book}/>
                <BookMain book={book} comment={comment}/>
            </BookPageWrapper>
        )
    }
}
const mapStateToProps=(state)=>({
    comment:state.getIn(["book","comment"]).toJS(),
    book:state.getIn(["book","bookInfo"]),
    bookimg:state.getIn(["book","bookimg"]),

   

})
const mapDispatchToProps=(dispatch)=>({
    getBookInfo(bid){
       dispatch(actionCreators.getBookInfo(bid))
   }
})
export default connect(mapStateToProps,mapDispatchToProps)(BookPage);