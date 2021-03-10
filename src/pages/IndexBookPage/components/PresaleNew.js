import React,{Component} from 'react';
import {
    RightNew,
    NewTip,
    NewTitle
    

}from '../style'
class PreSaleNew extends  Component{
    constructor(props){
        super(props);
        this.state={
            presaleList:[]
        }
    }
    render(){
        return(
            
                <RightNew>
                    <NewTip className="preSale">
                        <NewTitle className="newTitle">新书预售</NewTitle>
                        <ul class="listBook">
                            {
                           
                            }
                        </ul>
                
                    </NewTip> 
                </RightNew>
        )
    }
}
export default PreSaleNew;