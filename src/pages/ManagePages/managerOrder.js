import React,{ Component } from 'react';
import ManagerOrderList from './components/ManagerOrderList';
import ManagerSearchForm from './components/ManagerSearchForm';
import { connect }from 'react-redux';
import { actionCreators } from './store/index'
import {
    ManagerPageWrapper,

} from './style'
class ManagerOrder extends Component{
    componentDidMount(){
        this.props.getOrderList();
    }
    handleSearchOrder(oid){

        this.props.searchOrder(oid)

    }
    render(){
        const { orderList }=this.props;
        return(
            <ManagerPageWrapper>
         
                <ManagerSearchForm search={this.handleSearchOrder.bind(this)} placeholder="请输入订单号"/>
                <ManagerOrderList order={orderList}/>
              
            </ManagerPageWrapper>
        )
    }
}
const mapToState=(state)=>({
    orderList:state.getIn(["manage",'orderList'])
    
})
const mapToDispatch=(dispatch)=>({
    getOrderList(){
        dispatch(actionCreators.getOrderList())
    },
    searchOrder(oid){
        dispatch(actionCreators.searchorder(oid));
    }
})
export default connect(mapToState,mapToDispatch)(ManagerOrder);