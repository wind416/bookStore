import React,{ Component, Fragment } from 'react';
import Button from '../Button/index'
import { connect } from 'react-redux';
import { actionCreators } from '../store/index';
import { 
    RegisterWrapper,
    RegisterTitle,
    RegisterNew
} from './style'
import { ItemNew } from '../../pages/ManagePages/components/BookAlert/style';
import { Redirect } from 'react-router';

//react Component 必须以大写字母开头
 class Regiter extends Component{
     constructor(props){
         super(props);
         this.state={
             phone:"",
             username:"",
             sex:"女",
             password:"",
             checkpwd:"",
             detailAddress:"",
             info:""
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
     handleCheckPwd(){
        const state=this.state;
         if(state.checkpwd!==state.password){
            this.setState({
                info:"两次密码输入不一致"
            })
         }
     }
    handleRegister(){
        const state=this.state;
        // detailAddress:state.detailAddress,
        const user={
            username:state.username,
            phone:state.phone,
            sex:state.sex,
            password:state.password,
           
            city:"福建",
            area:"建阳"

        }
        console.log(user);
        this.props.register(user);
        return <Redirect to={{pathname:'/login'}}/>

    }
    //使用react Hooks
    render(){
     
        return(
            <Fragment>
                
            <RegisterWrapper>
                <form  >
        
                    <RegisterTitle>注册</RegisterTitle>
                    {/* <span className="tips">$infos</span> */}
                    <RegisterNew className="form-group">
                        <label  for="name">账号</label>  
                        {/* style="width:20%;"    */}
                        <input id="userid"  name="phone" value={this.state.phone} 
                                className="form-control" placeholder="请输入手机号" onChange={this.handleChangeInput.bind(this)}/>
                        
                    </RegisterNew>
                    <RegisterNew className="form-group">
                        <label  for="name">昵称</label>     
                        <input id="username"  name="username" value={this.state.username} className="form-control" placeholder="请输入昵称"
                                 onChange={this.handleChangeInput.bind(this)}/>
                        
                    </RegisterNew>
                    <RegisterNew className="radioGroup">
                        <label for="name">性别</label>  
                        <input type="radio" value="1" name="sex" checked={this.state.sex==="男"?true:false}  className="inputRadio"
                                onChange={this.handleChangeInput.bind(this)}/>男
                        <input type="radio" value="0" name="sex"  checked={this.state.sex==="女"?true:false} 
                                onChange={this.handleChangeInput.bind(this)} className="inputRadio" />女
                        <input type="text" style={{width:"34%",opacity:"0"}}/>
                    </RegisterNew>
                    <RegisterNew>
                        <label  for="name">密码</label>  
                        <input  type="text" id="password" name="password" value={this.state.password}
                                 className="form-control" placeholder="请输入密码" onChange={this.handleChangeInput.bind(this)}/>
                        
                    </RegisterNew>
                    <RegisterNew>
                        <label  for="name">确认密码</label>  
                        <input  type="text"  id="password" value={this.state.checkpwd}
                                  name="checkpwd"  placeholder="请再次输入密码" 
                                  onKeyUp={this.handleCheckPwd.bind(this)}
                                  onChange={this.handleChangeInput.bind(this)}/>
                        <span style={{marginLeft:"10px ",color:"red",fontSize:"14px"}}>{this.state.info}</span>
                    </RegisterNew>
                    <RegisterNew className="detail">
                        <label for="name">地址</label>
      
                      
                  
                            <select className="form-control" name="provice" style={{width:"13%",marginRight:"10px"}}>
                            </select>
                       
                            <select className="form-control" name="city"  style={{width:"13%",marginRight:"10px"}}>
                            </select>
                            <select className="form-control" name="area"  style={{width:"13%"}}>
                            </select>
           
                    </RegisterNew>
                
                    <RegisterNew className=" detail">
                        <label for="name">详细地址</label>
                        <textarea className="form-control " value={this.state.detailAddress}
                                 rows="3" name="detailAddress" onChange={this.handleChangeInput.bind(this)}/>
                    </RegisterNew>
             
                    <Button className="success" type="button" style={{marginTop:"10px"}} onClick={this.handleRegister.bind(this)}>注册</Button>
    
                </form>
            </RegisterWrapper>
            </Fragment>
        )
    }
    
}


const mapDispatch = (dispatch) => ({
    register(user){
        dispatch(actionCreators.register(user))
    }
    
})

export default connect(null, mapDispatch)(Regiter);