import styled from 'styled-components';
export const MyOrderWrapper=styled.div`
    margin-left:220px;
    margin-top:20px;
    min-height:100%;

`
export const MainSection=styled.div`
    width:90%;
    position:relative;
    margin-left:10px;
`;
export const NavOrder=styled.div`

    
` 
export const TitleOrder=styled.div`
    display:block;
    padding:10px;
    width:100%;
    font-size:20px;
    color:#646464;
 
    margin-bottom:5px;
`
export const TitleSheet=styled.div`

    width:100%;
    background-color:#f5f5f5;
    height:30px;
    line-height:30px;
    color:#3c3c3c;
    // margin-left:220px;
    margin-right:150px;
    margin-bottom:20px;
    span{
        margin-left:150px;
        font-size:14px;
    }
`
export const MyOrderItem=styled.div`
    width:100%;

	border-spacing:0;
    border:1px solid #daf3ff;
    margin-bottom:20px;

`
export const OrderItemTitle=styled.div`
    height:40px;
	line-height:40px;
	background:#eaf8ff;
	border-color:inherit;
    span{
        margin-left:20px;
        
    }
`
export const OrderItemMain=styled.div`
    padding:20px;
    position:relative;
    border-bottom:1px solid #daf3ff;

    img{
        cursor:pointer;
    }
    span{
    
        width:25%;
        margin-right:30px;
        margin-left:50px;
    }
    span.price{
       position:absolute;
       left:450px;
    }
    span.address{
        position:absolute;
        left:650px;
        width:30%;
        overflow:hidden;
        margin-right:50px;
    }
    a{
        position:absolute;
        right:20px;
        top:10px;
        
    }
`