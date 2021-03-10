import React,{Component,Fragment} from 'react';
import PersonInfo from './PersonInfo';
import RecentOrder from './RecentOrder';
import GusLike from './GusLike';
import { connect } from 'react-redux';

import {
    MainSection
}from '../style'
class PersonIndex extends Component{
    render(){
        const {user ,userrecentOrder , usergusLike}=this.props;
        return(
            <Fragment>
                     <MainSection>
                        <PersonInfo user={user}/>
                        <RecentOrder userrecentOrder={userrecentOrder}/>
                        <GusLike books={usergusLike}/>
                </MainSection>
                
            </Fragment>
        )
    }
}
const mapState = (state) => ({
	user: state.getIn(['person', 'user']),
    usergusLike:state.getIn(["person","usergusLike"]).toJS(),
    userrecentOrder:state.getIn(["person","userrecentOrder"]).toJS(),
})

const mapDispatch = (dispatch) => ({
})
export default connect(mapState,mapDispatch)(PersonIndex);