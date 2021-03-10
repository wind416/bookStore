import React,{ Component } from 'react';
import Button from '../../../../components/Button/index';
import { connect } from 'react-redux';
import { actionCreators }from '../../store/index';
import {
    CommentBookWrapper,
    CommentTitle,
    CommentB

}from '../../style'
import { Redirect } from 'react-router';
class CommentBook extends Component{
    constructor(props){
        super(props)
        this.state={
            content:''
        }

    }
    handleChangeInput(e){
        this.setState({
            content:e.target.value
        })
    }
    handleCommentBook(){
        let data={
            userid:this.props.phone,
            oid:this.props.match.params.oid,
            content:this.state.content
        }
        console.log(data)
        this.props.commentBook(data);
        


    }
    render(){
        if(!this.props.successComment){
            return(
                <CommentBookWrapper>
                   <CommentTitle class="comTitle">
                        <h4>评价书本</h4>
                        </CommentTitle>
                        
                        <CommentB class="com">
                         
                            <img src="" className="bookImg" alt="商品图片"></img>
                            {/* style="display:block;border:1px solid #CCC;" */}
                            <textarea rows="10" cols="90" value={this.state.content} onChange={this.handleChangeInput.bind(this)}
                                        placeholder="服务态度是否良好，售后服务是否到位?" name="content"></textarea>
                            
                   
                            <Button className="primary middle" onClick={this.handleCommentBook.bind(this)}>提交</Button>
                    </CommentB>
                    
                </CommentBookWrapper>
        )
    }else{
        return <Redirect to={{pathname:"/person/"+this.props.phone}}/>
    }
        
      
    }
    componentWillUnmount(){
        this.props.successComment(false)
    }
}
const mapToState=(state)=>({
    phone:state.getIn(["common","phone"]),
    commentSuccess:state.getIn(['book',"commentSuccess"])

})
const maptoDipatch=(dispatch)=>({
    commentBook(data){
        dispatch(actionCreators.commentBook(data))
    },
    successComment(value){
        dispatch(actionCreators.changeSuccessComment(value))
    }
})
export default connect(mapToState,maptoDipatch)(CommentBook);