import React,{ Component } from 'react';
import ManagerBookList from './components/ManagerBookList';
import ManagerSearchForm from './components/ManagerSearchForm';
import { connect }from 'react-redux';
import { actionCreators } from './store/index'
import AddBook from './components/BookAlert/AddBook';
import UpdateBook from './components/BookAlert/UpdateBook'
import {
    ManagerPageWrapper,

} from './style'
class ManagerBook extends Component{
    constructor(props){
        super(props);
        this.state={
            book:false,
            user:false,
            order:false,
            updateByBook:null
        }
    }
    componentDidMount(){
        this.props.getBookList();
    }
    handleSearchBook(name){
        this.props.searchBook(name)
    }
    handleUpdateBook(book){
        if(book){
            book=JSON.parse(JSON.stringify(book));
            this.setState({
                updateByBook:book
            })
           
        }
         
        this.props.showUpdateBook();

    }
    render(){
        const { bookList , showNew  , showAddBook , updateNew  , deleteBook }=this.props;
        console.log(updateNew)
        return(
            <ManagerPageWrapper>
                {
                    showNew?(<div className="new">
                                    <AddBook/>
                                </div>
                            ):""
                }
                {
                    updateNew?(<div className="new">
                                    <UpdateBook book={this.state.updateByBook}/>
                                </div>
                            ):""
                }
                <ManagerSearchForm search={this.handleSearchBook.bind(this)} placeholder="请输入书籍名"/>
                <ManagerBookList showAddBook={ showAddBook } 
                                 deleteBook={deleteBook}
                                 showUpdataBook={this.handleUpdateBook.bind(this)} book={ bookList }/>
            </ManagerPageWrapper>
        )
    }
}
const mapToState=(state)=>({
    bookList:state.getIn(["manage",'bookList']),
    showNew:state.getIn(['manage','showNew']),
    updateNew:state.getIn(["manage","updateNew"])
    
})
const mapToDispatch=(dispatch)=>({
    getBookList(){
        dispatch(actionCreators.getBookList())
    },
    searchBook(name){
        dispatch(actionCreators.searchbook(name))
    },
    showAddBook(){
        dispatch(actionCreators.showNew());
    },
    showUpdateBook(){
        dispatch(actionCreators.showUpdate())
    },
    deleteBook(id){
        dispatch(actionCreators.deleteBook(id))
    }
})
export default connect(mapToState,mapToDispatch)(ManagerBook); 