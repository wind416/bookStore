/* eslint-disable no-useless-constructor */
import React,{Component, Fragment} from 'react';
import {connect} from 'react-redux'
import AlertWrapper from '../../../../components/alertItem/HighalertWrapper';
import AddBookHide from './AddBookHide';

import { actionCreators } from '../../store/index';
import {
    FormTitle,
    ItemNew,
    More


}from './style'
class AddBook extends Component{
   constructor(props){
       super(props)
       this.state={
            name:"",
            author:"",
            publisher:"",
            price:"",
            status:0,
            stock:0,
            detail:""
       }
       this.handleChangeInput=this.handleChangeInput.bind(this)
   }
   handleChangeInput(e){
    const target = e.target;
    const value = target.name === 'status' ? target.checked : target.value;
    const name = target.name;

    this.setState({
        [name]: value
    });
 }
    handleSubmitBook(){
        const state=this.state;
        const book={
            name:state.name,
            author:state.author,
            publisher:state.publisher,
            price:state.price,
            status:state.status,
            stock:state.stock,
            detail:state.detail
        }
        console.log("submit");
        this.props.submitBook(book);
    }
    render(){
            const {showItem,changeHide,showAddBook}=this.props;
  
        return(
         
                <Fragment >
                     <FormTitle className="formTitle">新建书籍</FormTitle> 
                    <form>
                         <ItemNew className="itemNew">        
                            <label>*书籍名称：</label>
                            <input type="text" name="name" required onChange={this.handleChangeInput}></input>
                         </ItemNew>
                         <ItemNew className="itemNew">
                            <label>*作者：</label>
                            <input type="text" name="author" required onChange={this.handleChangeInput}></input>
                         </ItemNew>                         
                         <ItemNew className="itemNew">
                            <label>*出版社：</label>
                            <input type="text" placeholder="出版社" name="publisher" required onChange={this.handleChangeInput}></input>
                         </ItemNew>    
                         <ItemNew className="itemNew ">
                            <label>*价格</label><input type="number" name="price" placeholder="价格" required onChange={this.handleChangeInput}></input>
                         </ItemNew>  
                         <ItemNew className="itemNew" >
                            <label>*是否上架</label>
                            <input type="radio" value="1" name="status" checked={this.state.status===1?true:false} 
                                    className="inputRadio" onChange={this.handleChangeInput}/>是
                            <input type="radio" value="0" name="status" checked={this.state.status===0?true:false} 
                                    className="inputRadio" onChange={this.handleChangeInput}/>否
                            <input type="text" style={{width:"30%",opacity:"0"}}/>

                        </ItemNew>
                         <ItemNew className="itemNew " >
                            <label>*库存</label>
                            <input type="number" placeholder="库存" name="stock" required onChange={this.handleChangeInput}></input>
                        </ItemNew>
                         <ItemNew className="itemNew detail" >
                            <label>*详细说明</label>
                            <textarea type="text" name="detail" required onChange={this.handleChangeInput}></textarea>
                        </ItemNew>
                        
                         {
                             showItem?<AddBookHide/>:(  <More className="more" onClick={changeHide}>
                                                                <span>更多</span>  
                                                                <i className="iconfont jiantou">&#xe646;</i>
                                                         </More>  
                                                      )
                         }  
                         <button className="comfirm" type="button" onClick={this.handleSubmitBook.bind(this)}>确定</button>  
                         <span className="cancel" onClick={showAddBook}>取消</span>
                    </form>
                </Fragment>
            
        )
    }
}
const mapStateToProps=(state)=>({
    showItem:state.getIn(['manage','showItem'])

})
const mapDispatchToProps=(dispatch)=>({
      changeHide(){
          dispatch(actionCreators.changeHide());
      },
      showAddBook(){
          dispatch(actionCreators.showNew());
      },
      submitBook(book){
          dispatch(actionCreators.submitBook(book))
      }

})

AddBook=connect(mapStateToProps,mapDispatchToProps)(AddBook);
export default AlertWrapper(AddBook);