import React,{ Fragment, Component} from 'react';
import BookBlock from '../IndexBookPage/components/BookBlock';
import { connect }from 'react-redux';
import { actionCreators } from './store/index';
import SorstFooter from '../../components/sortsItem/SortsFooter';
import {
    BookListMain
}from './style';

class SearchBookList extends Component{
    constructor(props){
        super(props);
        console.log("search  "+ this.props.location.state)
        this.state={
            itemStart:0,
            itemEnd:20,
            pageSize:20
            
        }

    }
    changeItemStartAndEnd(start,end){
        this.setState({
            itemStart:start,
            itemEnd:end
        })

    }
    componentDidMount(){
        let searchName=this.props.location.state;
       
        this.props.getSearchBookList(searchName);
        

    }
    render(){
        let { searchBookList }=this.props;
        const { pageSize , itemEnd , itemStart }=this.state;
        console.log(searchBookList)
        return(
            <Fragment>
                <BookListMain>
                    {
                        searchBookList.slice(itemStart,itemEnd).map((item)=>{
                            return <BookBlock key={item.bid} book={item} className="searchBlock"/>
                        })
                    }
                    {/* <BookBlock book={searchBookList} className="searchBlock"/> */}
                </BookListMain>
                <SorstFooter len={searchBookList.length} pageSize={pageSize} itemStart={itemStart} itemEnd={itemEnd}
                            changeStartAndEnd={this.changeItemStartAndEnd.bind(this)}/>
            </Fragment>
        )
    }
   
}
const mapToState=(state)=>({
    searchBookList:state.getIn(["searchBook","searchBookList"])
})
const mapToDispatch=(dispatch)=>({
    getSearchBookList(searchName){
        dispatch(actionCreators.getSearchBookList(searchName));
    }
    
})
export default connect(mapToState,mapToDispatch)(SearchBookList);