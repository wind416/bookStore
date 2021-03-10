import styled from 'styled-components';
export const BookPageWrapper=styled.div`
      
   
`
export const BookImgShowWrapper=styled.div`
        display:block;
        float:left;
        margin-top:20px;
        width:25%;
        height:350px;
        margin-left:50px;
        .big{
            display:block;
            width:320px;
            height:320px;
        }
        .listSmall{
            li{
                display:block;
                float:left;
                width:60px;
                height:60px;
                margin-top:10px;
                list-style:none;
                .imgsmall{
                    width:54px;
                    height:54px;
                    float:left;
                }
            }
        }
`
export const BookDetailWrapper=styled.div`
        display:block;
        margin-left:400px;
        margin-top:20px;
        width:50%;
        height:420px;

        .title{
            font-size:25px;
	        font-weight:bold;
        }
        .detail{
            margin-top:20px;
            line-height:30px;
            border-bottom:1px solid #f5f5f5;
        }
        .writerMess{
            
            color:grey;
            margin:30px;
            
        }
        .price{
            width:100%;
            line-height:60px;
            height:60px;
            padding-left:20px;
            background:#FCFAF7;
            margin-bottom:25px;
            font-size:20px;
            color:#E52222;
            
        }
`
//BookMain start
export const BookMainWrapper=styled.div`
    width:70%;
	border:1px solid #e7e7e7;	
	margin-left:200px;
	margin-top:20px;
    margin-bottom:40px;
    
`



export const DetailTitle=styled.div`
    display:block;
	width:100%;
	height:50px;
	line-height:50px;
	border-bottom:1px solid #e7e7e7;
    .til{
        display:block;
        float:left;
        font-size:14px;
        font-weight:bold;
        width:100px;
        height:100%;
        border-right:1px solid #e7e7e7;
        // margin-left:-212px;
        text-align:center;
        cursor:pointer;
    }
    .active{
		border-top:2px solid #FF0036;
    }
    .comment{
        // margin-left:-112px;
    }
`
export const BookMainDetailWrapper=styled.div`
    width:100%;
	padding:20px;
	height:300px;
 
    span{
        font-size:14px;
        font-family:"weiruanyahei";
        color:#666666;
        padding-left:15px;
        padding-top:10px;
        width:30%;
        display:block;
        float:left;
        overflow:hidden;
    }
    .goodname{
        display:block;
        width:100%;
        padding:15px;
    }
    .mainTil{
        display:block;
        width:100%;
        padding:15px;
        font-weight:bold;
        
    }
	
`
export const BookCommentWrapper=styled.div`
    // display:none;
	
`
export const CommentBlock=styled.div`
    height:100px;
	line-height:80px;
	border-bottom:1px solid #e3e3e3;
    p.content{
        display:block;
        float:left;
        width:80%;
        padding-left:20px;
    }
    .uName{
        margin-top:20px;
        color:#404040;
        font-size:12px;
    }
`
//BookMain end

//----------------------------------------------------------
//CommentBook start
export const CommentBookWrapper=styled.div`
    margin-left:180px;
    width:70%;
    border:1px solid #e3e3e3;
    margin-bottom:20px;
    margin-top:20px;
    min-height:100%;
    
    


`
export const CommentTitle=styled.div`
    height:40px;
    border-bottom:2px solid #f40;
    h4{
        margin:0px;
        height:100%;
        line-height:40px;
        padding-left:20px;
        width:15%;
        background:#f40;
        color:white;

      }

`
export const CommentB=styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    align-items:center;
    padding:100px;
    background:#EEF8FD;
    border:1px solid #DAF1FC;
    textarea{
        display:block;
    }
    textarea::placeholder{
        color:#AAAAAA;
        font-size:12px;

        

    }
    .bookImg{
        
        min-width:100px;
        min-height:100px;
        border:1px solid red;
        font-size:14px;
        // float:left;
        margin-right:20px;
        margin-bottom:20px;
    }
 

`
//CommentBook end
