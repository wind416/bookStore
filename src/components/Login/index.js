import React,{ Component, Fragment } from 'react';
import NavWrapper from '../Header/Nav';
import { connect } from 'react-redux';
import { actionCreators } from '../store/index'
import { HashRouter , Switch ,Route } from 'react-router-dom';
import Login from './Login';
import Register from './register'
 class LoginRegisterPage extends Component{
    render(){
        const { loginOut , loginState , userInfo ,isManage }=this.props;
        return(
            <Fragment>
                <NavWrapper loginState={loginState} loginOut={loginOut} userInfo={userInfo} isManage={isManage}/>
                <HashRouter>
                    <Switch>
                        <Route path="/login/register" component={Register} />
                        <Route path="/login"  component={Login}/>
                        
                    </Switch>
                </HashRouter>
            </Fragment>
          
        )
    }
}
const mapState = (state) => ({
	loginState: state.getIn(['common', 'login']),
    userInfo:state.getIn(["common","userInfo"]),
    isManage:state.getIn(["common","isManage"])
})

const mapDispatch = (dispatch) => ({
    loginOut(){
        dispatch(actionCreators.logout());
    }
    
})
export default connect(mapState, mapDispatch)(LoginRegisterPage);