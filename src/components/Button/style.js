import styled from 'styled-components';
export const ButtonWrapper = styled.button`
	
	width: 55px;
    height:35px;
    font-size:14px;
    line-height:10px;
    text-align:center;
    margin-right:10px;
	padding:10px;
    color:white;
    background:rgb(255, 255, 255);
    border-radius:4px;
    border:1px solid rgb(204, 204, 204);
    cursor:pointer;
    float:right;
    right:20px;
    &.small{
        width:50px;
        height:20px;
        padding:1px;
        font-size:8px;
    }
    &.default{
        color:black;
    }
    &.primary{
        background-color:rgb(51, 122, 183);
    }
    &.personal{
        width:130px;
        
    }
    &.success{
        background-color:rgb(92, 184, 92);
    }
    &.info{
        background-color: rgb(91, 192, 222);
    }
    &.warning{
        background-color:rgb(240, 173, 78);
    }
    &.four{
        width:80px;
    }
    &.middle{
        margin-top:20px;
      
    }

`;