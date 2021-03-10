import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginTitle,LoginBox ,LoginRoot,RegisterTitle ,RegisterWrapper} from './style';
import Button from '../Button/index'
import { actionCreators } from '../store';

class Login extends PureComponent {
	constructor(props){
		super(props);
		this.state={
			account:"",
			password:""
		}
	}
	handleChangeAccount(e){
		let value=e.target.value;
        value=value.replace(/\D/g,'')
		if(value.length>=12){
			value=value.substring(0,11);
		}
        this.setState({
			account:value
		})

	}
	handleChangePwd(e){
		this.setState({
			password:e.target.value
		})
	}
	checkInput(){
		const {account,password}=this.state;
		if(!account||!password){
			alert("账户或密码为空");
		}else if(account.length<11){
			alert("账户是11位的");
		}
		else if(password.length>12){
			alert("密码是由12位由字母,数字,下划线组成的字符");
		}
		else if(password.match(/^(w|d|_)/g)){
			alert("密码只能由字母,数字,下划线组成");
		}else {
			this.props.login(account,password);
		}

	}
	render() {
		const {loginState}=this.props;
		if (!loginState) {
			return (
			
				<LoginRoot >
					<div className="leftImg">
						<img src="" alt="装饰图片"></img>
					</div>
				<LoginWrapper>
					<LoginTitle>登录</LoginTitle>
					<form className="login">
						
						<LoginBox style={{marginLeft:"0px"}}>
							<label for="name">账号</label>
							<input type="text" placeholder='账号' name="account" onChange={this.handleChangeAccount.bind(this)} value={this.state.account}/>
						</LoginBox>
						<LoginBox style={{marginLeft:"0px"}}>
							<label for="name">密码</label>
							<input placeholder='密码' name='password' type="password" onChange={this.handleChangePwd.bind(this)} value={this.state.password}/>
							<i ref={(icon) => {this.showIcon = icon}} className="iconfont show" >&#xe675;</i>
							
						</LoginBox>
						<Button className="primary middle" type="button" style={{right:"20px"}} onClick={this.checkInput.bind(this)}>登录</Button>
						</form>
				</LoginWrapper>
				</LoginRoot>	
			)
		}else {
			return <Redirect to='/index'/>
		}
	}
}

const mapState = (state) => ({
	loginState: state.getIn(['common', 'login']),
   
})

const mapDispatch = (dispatch) => ({
	login(accountElem, passwordElem){
		dispatch(actionCreators.login(accountElem, passwordElem))
	}
    
})


export default connect(mapState, mapDispatch)(Login);