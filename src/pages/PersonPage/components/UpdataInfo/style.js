import styled from 'styled-components';
export const UpdateInfoWrapper=styled.div`
    margin-left:220px;

`;
export const MainSection=styled.div`
    
	border:1px solid #e7e7e7;
	width:70%;
    margin-top:20px;
    margin-bottom:120px;

`
export const Button=styled.button`
    background-color:rgb(51, 122, 183);
    border-radius:4px;
    border:1px solid rgb(46, 109, 164);
    color:rgb(255, 255, 255);
    margin-top:10px;
    margin-left:10px;
    cursor:pointer;
    font-size:14px;
    padding:5px 12px;

`
export const UpdateTitle=styled.div`
    display:block;
	font-size:18px;
	width:100%;
	height:50px;
	line-height:50px;
	border-bottom:1px solid #e7e7e7;
    span{
        margin-left:20px;
    }
`
export const UpdateForm=styled.form`

    margin-left:50px;
    margin-bottom:20px;
    label{
        color:rgb(51, 51, 51);
        font-size:14px;
        font-weight:700;
        padding:10px;
        display:block;
    }
    input{
        // padding:10px;
        margin-left:10px;
    }
    input.name{
        border:1px solid rgb(204, 204, 204);
        border-radius:4px;
        box-shadow:rgba(0, 0, 0, 0.075) 0px 1px 1px 0px inset;
        color:rgb(85, 85, 85);
        height:34px;
        line-height:20px;
        width:300px;
    }
    data1{
        display:block;
        margin-top:20px;
    
    }
    img{
        display:block;
        margin-top:20px;
        width:100px;
        height:100px;
        border-radius:50px;
    
        
    }
     .form-group{
        margin-top:40px;
    }
    option{
        text-align:center;
    }
`