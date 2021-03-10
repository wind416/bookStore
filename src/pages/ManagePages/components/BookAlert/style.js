import styled from "styled-components"

export const FormTitle=styled.div`
    box-shadow: 0 .5px 1px rgb(55, 116, 122);
    height:40px;
    background-color: rgb(53, 113, 121);
    color:white;
    line-height:40px;
    padding-left:10px;

`
export const ItemNew=styled.div`
    width:100%;
    height:30px;
    padding:10px;
    margin-top:10px;
    overflow: hidden;
    color:rgb(116, 115, 115);
    font-size:14px;
    display:flex;
    justify-content:center;
    align-items:center;
  
    &.detail{
        height:50px;
    }
   
    label{
        float: left;
        width:100px;
        line-height: 30px;
        font-size:15px;
        color:rgb(116, 115, 115);
    }
    .hidden{
        display: none;
    }
    .inputRadio{
        width:14px;
        height:14px;
     
        
    }
    input, select,textarea{
        width:45%;
        height:30px;
        border-radius: 5px;
        border-width: .5px;
        border-style: solid;
        border-color: rgb(214, 214, 214);
        box-shadow: 0 1px 1px rgb(233, 233, 233);
    }
    textarea{
        height:50px;
    }
    input:focus, select:focus,textarea:focus{
        border-color:  rgb(235, 234, 234);
        outline: 0;
        -webkit-box-shadow: inset 0 .5px 1px rgba(0,0,0,.075),0 0 2px rgb(187, 186, 186);
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px  rgb(187, 186, 186);
    }
    &.itemInfo{
        height:100px;
    }
`
export const More=styled.div`
    margin-top:15px;
    width:100%;
    font-size:14px;
    color:rgb(158, 157, 157);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    i{
        font-size:30px;
        line-height: 22px;
        padding-top: 8px;
    }
`
export const BookHideWrapper=styled.div`
    width:100%;
    height: 100%;
   
`
export const  ItemInfo=styled.div`
    width:100%;
    // margin:2px 2px 2px 15px;
    height:40px;
    line-height: 50px;
    padding:10px 0 0 10px;
    font-size:12px;
    
    
    &.litterEntry{
        height:170px;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-wrap:wrap;
    }
    label{
        float: left;
        width:100px;
        line-height: 30px;
        font-size:15px;
        color:rgb(116, 115, 115);
    }
`
export const ImgItem=styled.div`
    float:left;
    width:90px;
    height:85px;
    margin-right:3px;
    // overflow:hidden;
    // border:1px solid rgb(104,104, 104);
    .imaEntry{
        width:100%;
        height:100%;
 

    }

`


