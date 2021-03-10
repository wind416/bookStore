import styled from "styled-components";

export const  NewWrapper =styled.div`
    // position: absolute;
    // top:0;
    // height:100%;
    width:100%;
    height:100%;
    color:white;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        transform: translate(380px,20px);
        width:90px;
        padding:5px;
        margin-right:10px;
        border-width: .5px;
        border-color: rgb(158, 157, 157);
        border-style: solid;
        border-radius: 5px;
        background-color: white;
        background-color: rgb(38, 169, 202);
        color:white;
        cursor: pointer;
    }
    .cancel{
        transform: translate(380px,20px);
        width:80px;
        padding:5px;
        height:17px;
        line-height:17px;
        border-width: .5px;
        border-color: rgb(158, 157, 157);
        border-style: solid;
        border-radius: 5px;
        background-color: white;
        font-size:13px;
        cursor: pointer;
        text-align:center;
    }
`
export const FormNew=styled.div`
    z-index: 100;
    opacity: 1;
    width:600px;
    padding-bottom:80px ;
    background-color: white;
    margin-top:120px;
    margin-bottom:20px;
    color:black;
    border-radius: 2px;

    form{
        margin-top:50px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        align-items: center;
    }
`
