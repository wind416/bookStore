import styled from "styled-components";

/* *{
    margin: 0;
    padding: 0;
}
html,
body{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
} */
export const PageWrapper=styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        border: 1px solid rgb(211, 211, 211);
        padding: 10px;
        border-radius: 10px;
        cursor: pointer;
        margin: 0 10px;
        font-size: 12px;
        height:15px;
        line-height: 15px;
    }
     div.disable{
        color: #fff;
        cursor: not-allowed;
        background-color: rgb(211, 211, 211);
    }
     div.active{
        border: none;
        background-color: rgb(78, 216, 250);
        color: #fff;
    }

`
export const PageFirst=styled.div``
export const PagePrev=styled.div``
export const PageDiv=styled.div``
export const PageNext=styled.div``
export const PageEnd=styled.div``