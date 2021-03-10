import styled from 'styled-components';
export const IndexBookWrapper=styled.div`

 margin-top:20px;
`
export const IndexLeftWrapper=styled.div`
   width:18%;
   display:flex;
   flex-wrap:wrap;
   float:left;

`
export const IndexRightWrapper=styled.div`
    margin-botttom:20px;
`
//NewBook
export const LeftNew=styled.div`
    width:100%;
    margin-left:10px;
    float:left;
    color:black;
    overflow:hidden
`
export const NewTip=styled.div`
    padding:6px 10px;
    height:250px;
    border:1px solid #eaeaea;
    &.preSale{
        height:305px;
    }
    .listBook{
        padding-left:20px;
        margin-left:5px;
        margin-top:10px;
    }
    .listBook>li{
        font-size:14px;
        line-height:30px;
    }
    .listBook>li:hover{
         text-decoration:underline;
         color:#337AB7;
         cursor:pointer;
    }
    a{
        text-decoration:none;
        color:black;
    }
`
export const NewTitle=styled.div `
    font-weight:bold;
    font-size:18px;
 

`
//newBook end
//HotBook start(新书热卖)
export const HotSaleWrapper=styled.div`
    // display:inline-block;
    margin-top:40px;
    margin-left:20px;
    width:100%;
    height:300px;
    // float:left;
    border:1px solid #eaeaea;
    margin-bottom:200px;


`
export const HotTitle=styled.div`
    height:40px;
    line-height:40px;
    padding:0px;
    background:#27ac0b;
    border-bottom:1px solid #eaeaea;
    padding-left:20px;
    color:white;

`
export const Rank=styled.span`
    display:block;
	float:left;
	font-size:16px;
	color:#D10000;
	margin-right:20px;

`
export const ImgHidden=styled.div`
  
    .small{
        display:block;
        float:left;
        width:75px;
        height:75px;
        margin-right:5px;
        
    }
    .newName{
        height:40px;
        font-size:13px;
        line-height:40px;
        overflow:hidden;
        margin:0;
    }
    .newName:hover{
        text-decoration:underline;
    color:#337AB7;
    cursor:pointer;
    }
    .newPrice{
        height:20px;
        margin:0;
        color:#C30000;
        font-weight:bold;
        
    }
    .oldPrice{
        height:20px;
        margin-top:-20px;
        color:#A7A7A7;
        text-decoration:line-through;
    }

`
export const HotList=styled.li`
    padding-top:10px;
	padding-bottom:10px;
	padding-left:10px;
	list-style:none;
	line-height:30px;
	border:1px dotted #eaeaea;
	cursor:pointer;
	font-size:14px;
    .hidden{

        display:none;
        
    }
    .show1{
        height:30px;
        line-height:30px;
        overflow:hidden;
    }

`
//HotBook end(新书热卖)

//Carousel start (轮播图)
export const CarouselWrapper=styled.div`
  margin-left:35px;
  height:310px;
  width:77%;
  overflow:hidden;
  padding:5px;
  position:relative;
  float:left;
  margin-bottom:10px;


`
export const CarouselBox=styled.div`
    width:100%;
    height:100%;
    overflow:hidden;
    i{
        font-size:20px;
        font-weight:bold;
        position:absolute;
        top:150px;
        cursor:pointer;
        &.right{
            left:96%;
        }
    }


`
export const ImgItem=styled.div`
    width:100%;
    height:100%;
    position:absolute;
    img{
        min-width:100%;
        min-height:100%; 
      

        
    }
    .hidden{
        display:none;
    }

`
export const CarouselDots=styled.div`
    position:absolute;
    bottom:20px;
    width:20%;
    left:50%;
    transform:translateY(-50%);
    div{
        width:10px;
        height:10px;
        background-color:white;
        border-radius:50%;
        float:left;
        margin-right:3px;
        cursor:pointer;
        box-shadow:0 1px 1px grey;
    }
`
//Carousel end (轮播图)

//Right start(新书预售)
export const RightNew=styled.div`
  width:18%;
  margin-left:80%;
//   height:10%;

`
//Right end

//BookItem start(一个个数据)
export const BookItemWrapper=styled.div`
    margin-bottom:20px;
    margin-top:20px;
    margin-left:270px;
    height:570px;
    width:77%;
    border:1px solid #e7e7e7;
    overflow:hidden;


  
`
export const BookItemTitle =styled.div`
    height:50px;
    font-size:20px;
    background:#F5F8FA;
    line-height:50px;
    color:#546D7E;
    margin-bottom:20px;
    padding-left:20px;
    
`
export const BookBlockWrapper=styled.div`
    width:23%;
    height:245px;
    margin-right:5px;
    margin-left:3px;
    padding:5px;
    overflow:hidden;
    float:left;
    font-size:14px;
    &.searchBlock{
        width:18%;
    }
    a{
        text-decoration:none;
    }
    .bookImg{
        width:200px;
        height:200px;
        // border:1px solid red;
    }
    &.col-3{
        width:30%;
        margin-left:5px;
    }

`
export const BookCaption=styled.div`

    margin-left:10px;
    .bookprice{
        color:#FF4400;
        font-size:14px;
        .oldPrice{
            margin-left:20px;
            font-size:14px;
            color:#AAAAAA;
            text-decoration:line-through;
        }
    }
    span{
        color:black;
    }
   
    .bookName{
        font-size:13px;
        color:black;
        
    }
    .writer{
        font-size:12px;
        color:#AAAAAA;
    }
    
`
//BookItem end(一个个数据)

