import React,{Component}from 'react';
// import {   Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import NavWrapper from './Nav'
import { Link } from 'react-router-dom';
import Button from '../Button/index'
import {
    HeaderWrapper,

    SearchBook
}from './style';
class Header extends Component{
    
    constructor(props){
        super(props);
        this.state={
            searchName:""
        }
        this.handleChangeInput=this.handleChangeInput.bind(this)
    }
    handleChangeInput(e){
        this.setState({
            searchName:e.target.value
        })

    }
    render(){
       
        const {loginState,loginOut,userInfo, isManage ,phone}=this.props;
        return(
            <HeaderWrapper>
                <NavWrapper phone={phone} loginState={loginState} loginOut={loginOut} userInfo={userInfo} isManage={isManage}/>
                <SearchBook>
                    <Link  to="/">网上书店</Link>
                        <div>
                            <input type="text" className="search" 
                                    value={this.state.searchName} onChange={this.handleChangeInput} placeholder="Search"/>
                            <Link to={{
                                pathname:'/searchBOOK',
                                state:this.state.searchName

                            }}>
                                <Button className="primary ">搜索</Button>
                            </Link>
                        </div>
                    
                 
                    
                </SearchBook>  
            </HeaderWrapper>
        )
    }
}
const mapState = (state) => ({
	loginState: state.getIn(['common', 'login']),
    userInfo:state.getIn(["common","userInfo"]),
    isManage:state.getIn(["common","isManage"]),
    phone:state.getIn(["common","phone"])
})

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem){
		dispatch(actionCreators.login(accountElem.value, passwordElem.value))
	},
    loginOut(){
        dispatch(actionCreators.loginOUt());
    }
    
})

export default connect(mapState, mapDispatch)(Header);