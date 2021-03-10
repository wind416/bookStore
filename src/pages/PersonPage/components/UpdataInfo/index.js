import Cascader  from '../../../../components/Cascader/index';
import React,{ Component } from 'react';

import { connect } from 'react-redux';
import { actionCreators } from '../../store/index';
import {
    UpdateInfoWrapper,
    MainSection,
    UpdateTitle,
    UpdateForm,
    Button
}from './style'
class UpdateInfo extends Component{
    constructor(props){
        super(props)
      
        
        this.state={
            username:props.user.username||"",
            sex:props.user.sex||"女"
        }
    }
    handleChangeInput(e){
        const target = e.target;
        const value = target.name === 'sex' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
     }
    handleUpdateSubmit(){
        const user={
            "username":this.state.username,
            "sex":this.state.sex,

        }
        this.props.changePerson(user)
    }
    render(){
        const { user }=this.props;

        
        return(
            <UpdateInfoWrapper>
 
                <MainSection>
                    <UpdateTitle class="data">
                        <span>基本资料</span>
                    </UpdateTitle>
                    <UpdateForm  id="stuForm" >
                    
                        <div class="data1">
                            <img src="http://img7x1.ddimg.cn/imghead/15/9/9921910134921-1_o.png?=5792" alt="个人头像"/>
                            <span >{user.phone}</span>
                        </div>
                        <div class="form-group">
                            <label  for="name">昵称</label>     
                            <input id="username"  name="username" className="name" 
                                   value={this.state.username} onChange={this.handleChangeInput.bind(this)}/>
                                
                        </div>
                    
                        <div class="form-group">
                            <label for="name">性别</label>  
                            <div class="radio" >
                                <label class="radio-inline">
                                <input name="sex" type="radio" value="男" checked={this.state.sex==="男"?true:false}
                                                  onChange={this.handleChangeInput.bind(this)}/>男</label>
                            </div>
                            <div class="radio">
                                <label class="radio">
                                <input name="sex" type="radio" value="女" 
                                                checked={this.state.sex==="女"?true:false}
                                                onChange={this.handleChangeInput.bind(this)}/>女</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="name">地址</label>  
                            <Cascader/>
                        </div>
                    <Button class="btn btn-primary" type="button" onClick={this.handleUpdateSubmit.bind(this)}>提交</Button>
                    </UpdateForm> 
                </MainSection>

            </UpdateInfoWrapper>
        )
    }
}
const mapState = (state) => ({
	user: state.getIn(['person', 'user'])
})
const mapDispatch = (dispatch) => ({
	changePerson(user){
		dispatch(actionCreators.updatePersonInfo(user));
	}
})
export default connect(mapState,mapDispatch)(UpdateInfo);;