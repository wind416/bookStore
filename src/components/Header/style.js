import styled from 'styled-components';
export const HeaderWrapper=styled.div`
    position:relative;
    a{
        text-decoration:none;
        color:rgb(119, 119, 119);
        font-size:14px;
     
    }
`
export const Nav=styled.div`
    padding:2px;
    font-size:14px;
    background-color:#f9f9f9;
    height:23px;
    width:99.5%;
    line-height:23px;
    border-bottom:1px solid  rgb(231, 231, 231);
    &.footBar{
        // position:absolute;
        position:relative;
        // margin-top:-20px;
        bottom:0;
        height:40px;
        color:rgb(51, 51, 51);
        font-size:14px;
        p{
            
            line-height:50px;
            text-align:center;
        }
     
    }
    .buttonWrapper{
        overflow:hidden;
    }

`
export const NavBar=styled.div`
    width:200px;
    .ICON{
        width:35px;
        height:35px;
 
    }
    .book{
        font-size:20px;
    }
    float:left;
    overflow:hidden;
    
`;
export const SearchBook=styled.div`
   
    display:flex;
    justify-content:flex-start;
    margin:7px;
    a{
        text-decoration:none;
        font-size:25px;
        font-weight:bold;
        color:rgb(119, 119, 119);
       
    }
    input{
        border:1px solid rgb(204, 204, 204);
        border-radius:4px;
        box-shadow:rgba(0, 0, 0, 0.075) 0px 1px 1px 0px inset;
        color:rgb(85, 85, 85);
        height:35px;
        line-height:20px;
        width:330px;
        margin-right:10px;
        margin-left:230px;
        
    }

`

