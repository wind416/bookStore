import React,{Component} from 'react';
import NewBook from './components/New';
import Carousel from './components/Carousel';
import PreSaleNew from './components/PresaleNew';
import Hot from './components/Hot'
import BookItem  from './components/BookItem';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';
import  { toJS }  from 'immutable'

import {
    IndexBookWrapper,
    IndexLeftWrapper,
    IndexRightWrapper,
    
}from './style';
class IndexBook extends  Component{
    
    componentDidMount(){
        this.props.getBannerList();
        this.props.getBookList();
        this.props.getHotList();
        this.props.getNewList();
        


    }
    render(){
        let { imgList , hotList ,bookList ,newBookList }=this.props;
        console.log(bookList)
        return(
            <IndexBookWrapper>
                
              <IndexLeftWrapper>
                <NewBook newBookList={newBookList}/>
                <Hot hotList={ hotList }/>
              </IndexLeftWrapper>
                
              <IndexRightWrapper>
                    <Carousel imgList={ imgList }/>
                    {/* <PreSaleNew/> */}
                    
                    <section>
                        
                        <BookItem bookList={bookList}/>
                    </section>
              </IndexRightWrapper>
            </IndexBookWrapper>
        )
    }
}
const mapState = (state) => ({
	imgList: state.getIn(['index', 'imgList']).toJS(),
    hotList:state.getIn(["index","hotList"]).toJS(),
    bookList:state.getIn(["index","bookList"]).toJS(),
    newBookList:state.getIn(["index","newBookList"]).toJS()
})

const mapDispatch = (dispatch) => ({
	getBookList(){
		dispatch(actionCreators.getBookList());
	},
    getHotList(){
        dispatch(actionCreators.getHotList());
    },
    getBannerList(){
        dispatch(actionCreators.getBannerList());
    },
    getNewList(){
        dispatch(actionCreators.getNewBookList());
    }
})
export default connect(mapState,mapDispatch)(IndexBook);