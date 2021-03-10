import React,{ Component } from 'react';
import ManagerUserList from './components/ManagerUserList';
import ManagerSearchForm from './components/ManagerSearchForm'
import {
    ManagerPageWrapper,

} from './style'
import { connect }from 'react-redux';
import { actionCreators } from './store/index'
class ManagerUser extends Component{
    componentDidMount(){
        this.props.getUserList();
    }
    handleSearchUser(phone){
        console.log(phone);
        this.props.searchUser(phone)

    }
    render(){
        const { userList }=this.props;
        return(
            <ManagerPageWrapper>
                <ManagerSearchForm search={this.handleSearchUser.bind(this)} placeholder="请输入用户账号"/>
                <ManagerUserList user={userList}/>
              
            </ManagerPageWrapper>
        )
    }
}
const mapToState=(state)=>({
    userList:state.getIn(["manage",'userList'])
    
})
const mapToDispatch=(dispatch)=>({
    getUserList(){
        dispatch(actionCreators.getUserList())
    },
    searchUser(phone){
        dispatch(actionCreators.searchuser(phone))

    }
})
export default connect(mapToState,mapToDispatch)(ManagerUser);