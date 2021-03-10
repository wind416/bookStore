import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {
    LeftNew,
    NewTip,
    NewTitle

}from '../style'
class NewBook extends  Component{
    render(){
        let {newBookList}=this.props;
        // newBookList=[...newBookList];
        return(
    
                <LeftNew class="rightSection">
                    <NewTip class="newTips">
                        <NewTitle class="newTitle">最新动态</NewTitle>
                        <ul class="listBook">
                            {
                                newBookList.map((item)=>{
                                    return(
                                        <li>
                                            <Link to={{ pathname:'/book/'+item.id,
                                                        state:item}}>{item.detail}</Link>
                                        </li>
                                    )
                                })
                                
                                    
                            }
                        </ul>
                
                    </NewTip> 
                </LeftNew>
        )
    }
}
export default NewBook;