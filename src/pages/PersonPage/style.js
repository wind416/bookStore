import styled from 'styled-components';
export const PersonWrapper=styled.div`
    margin-left:20px;

`
export const MainSection=styled.div`
    margin-left:220px;
    margin-top:20px;
	width:60%;

`
export const LeftSideWrapper=styled.div`
   width:14%;
   margin-left:20px;
   float:left;
//    margin-top:20px;
   a{
       text-decoration:none;
   }

`
export const LeftLi=styled.li`
  height:33px;
  line-height:33px;
  padding:5px 10px;
  font-size:14px;
  cursor:pointer;
  border-radius:5px;
  &:hover{
    background-color: rgb(223, 222, 222);
  }
  &.active{
    padding:10px;
      a{
          color:white;
      }
      
      background-color:rgb(51, 122, 183);
      padding:5px;
  }
  a{
    color:rgb(51, 122, 183);
  }

`
//personInfo start
export const PersonInfoWrapper=styled.div`
    border:1px solid #e7e7e7;
    .order{
        height:30px;
        background-color:white;
        line-height:30px;
        padding:10px;
        // padding-top:10px;
        li{
            margin:0px;
            width:19%;
            text-align:center;
            border-left:1px solid #e7e7e7;  
            float:left; 
            font-size:14px;
            
            
        }
        li.first{
            border-left:0px;
        }
        li:before{
            content:"";
        }
         a{
            cursor: pointer;
            font-weight:lighter;
            color:black;
            text-decoration:none ;
        }
        
    }
    
    
`
export const NavBar=styled.div`
    height:100px;
    background-color:#F5F8FA;
    margin-bottom:0px;
    border:0px;
    border-bottom:1px solid #e7e7e7;

`
export const NavHeader=styled.div`
    padding-top:15px;
    .phone{
        display:block;
        float:left;
        width:80px;
        height:80px;
        border-radius:40px;
    }
    .userName{
        font-size:14px;
        line-height:30px;
      
    }
`
//personInfo end
//RecentOrder start 最近订单
export const RecentOrderWrapper=styled.div`
    margin-top:20px;
	border:1px solid #e7e7e7;
    .lg-list{
        padding:0px;
    
    }
`
export const OrderTitle=styled.div`
    height:50px;
    font-size:20px;
    background:#F5F8FA;
    line-height:50px;
    color:#546D7E;
    padding-left:20px;
`
export const OrderItem=styled.li`
    border-top:1px solid #e7e7e7;
	height:90px;
	padding:13px 10px 13px 15px;
	list-style:none;
    img{
        display:block;
        float:left;
        width:70px;
        height:70px;
        margin-right:20px;
        
    }
    p{
        display:block;
        float:left;
        margin-right:20px;
        line-height:70px;
    }
    .assess{
        display:block;
        float:right;
        margin-right:20px;
        margin-top:20px;
    }

`
//RecentOrder end 最近订单
//GusLike start 猜你喜欢
export const GusLikeWrapper=styled.div`
    height:570px;
	margin-top:20px;
	border:1px solid #e7e7e7;
	background:#F5F8FA;
    margin-bottom:20px;
`
export const GusTitle=styled.div`
    background-color:#A0CDEB;
    height:50px;
    font-size:24px;
    margin-bottom:20px;
    line-height:50px;
    color:white;
    padding-left:10px;
`