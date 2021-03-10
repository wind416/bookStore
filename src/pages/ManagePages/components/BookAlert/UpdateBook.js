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
class UpdateBook extends Component{
    constructor(props){
        super(props);
        this.state={
            name:props.book.name||"",
            author:props.book.author||"",
            publisher:props.book.publisher||"",
            price:props.book.price||'',
            status:props.book.status||0,
            stock:props.book.stock||0,
            detail:props.book.detail||""

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
    handleUpdateBook(){
        const book={
            "id":this.props.book.id,
            "name":this.state.name,
            "author":this.state.author||"",
            "publisher":this.state.publisher||"",
            "price":this.state.price||'',
            "status":this.state.status||0,
            "stock":this.state.stock||0,
            "detail":this.state.detail||""
        }

        this.props.updateBook(book);

    }
    render(){
            const {showItem,changeHide,showUpdateBook }=this.props;
            console.log(this.state.name)
        return(
         
                <Fragment >
                     <FormTitle className="formTitle">更新书籍</FormTitle> 
                    <form>
                         <ItemNew className="itemNew">        
                            <label>*书籍名称：</label>
                            <input type="text" value={this.state.name} name="name" onChange={this.handleChangeInput}></input>
                         </ItemNew>
                         <ItemNew className="itemNew">
                            <label>*作者：</label>
                            <input type="text" name="author" value={this.state.author} onChange={this.handleChangeInput}></input>
                         </ItemNew>                         
                         <ItemNew className="itemNew">
                            <label>*出版社：</label>
                            <input type="text" name="publisher" value={this.state.publisher} onChange={this.handleChangeInput}></input>
                         </ItemNew>    
                         <ItemNew className="itemNew ">
                            <label>*价格</label>
                            <input type="number" name="price" value={this.state.price} onChange={this.handleChangeInput}></input>
                         </ItemNew>  
                         <ItemNew className="itemNew" >
                            <label>*是否上架</label>
                            <input type="radio" value="1" name="status"
                                    checked={this.state.status===1?true:false}  className="inputRadio"
                                    onChange={this.handleChangeInput}/>是
                            <input type="radio" value="0"  name="status" 
                                    checked={this.state.status===1?true:false}  className="inputRadio" 
                                    onChange={this.handleChangeInput}/>否

                        </ItemNew>
                         <ItemNew className="itemNew " >
                            <label>*库存</label>
                            <input type="number" name="stock" value={this.state.stock} onChange={this.handleChangeInput}></input>
                        </ItemNew>
                         <ItemNew className="itemNew detail" >
                            <label>*详细说明</label>
                            <textarea type="text" name="detail" value={this.state.detail} onChange={this.handleChangeInput}></textarea>
                        </ItemNew>
                        
                         {
                             showItem?<AddBookHide/>:(  <More className="more" onClick={changeHide}>
                                                                <span>更多</span>  
                                                                <i className="iconfont jiantou">&#xe646;</i>
                                                         </More>  
                                                      )
                         }  
                         <button className="comfirm" type="button"  onClick={this.handleUpdateBook.bind(this)}>确定</button>  
                         <span className="cancel" onClick={showUpdateBook}>取消</span>
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
      showUpdateBook(){
          dispatch(actionCreators.showUpdate());
      },
      updateBook(book){
          dispatch(actionCreators.updateBook(book))
      }
     

})

UpdateBook=connect(mapStateToProps,mapDispatchToProps)(UpdateBook);
export default AlertWrapper(UpdateBook);