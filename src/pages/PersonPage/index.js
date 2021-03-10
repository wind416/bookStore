import React,{Component} from 'react';
import {  HashRouter ,Route , Switch } from 'react-router-dom';
import LeftSide from './components/LeftSide';
import PersonIndex from './components/PersonIndex'
import MyOrder from './components/MyOrder/index';
import UpdateInfo from './components/UpdataInfo/index';
import { connect } from 'react-redux';
import { actionCreators } from './store/index';
import {
    PersonWrapper,
    // MainSection
    
}from './style'
class Person extends  Component{
    
    componentDidMount(){
        this.props.getGusLike();
        this.props.getRecentOrder(this.props.match.params.phone);
        this.props.getUserInfo(this.props.match.params.phone)
     
    }
    render(){
        return(
            <PersonWrapper>
         
                    <HashRouter>
                     <LeftSide phone={this.props.match.params.phone}/>
                        <Switch>
                            <Route path="/person/updateInfo/update"  component={UpdateInfo}/>
                            <Route path="/person/myOrder/orders"  component={MyOrder}/>
                            <Route path="/person/:phone"  component={PersonIndex}/>
                            
                             
                           
                          
                            
                           
                        </Switch>
                
                    </HashRouter>
               
            </PersonWrapper>
        )
    }
}
const mapState = (state) => ({
	user: state.getIn(['person', 'user']),
})

const mapDispatch = (dispatch) => ({
	getGusLike(){
        dispatch(actionCreators.getGusLike())

    },
    getRecentOrder(phone){
        dispatch(actionCreators.getRecentOrder(phone))
    },
    getUserInfo(phone){
        dispatch(actionCreators.getUserInfo(phone))
    }
})
export default connect(mapState,mapDispatch)(Person);