import styled from 'styled-components';
export const ManagerPageWrapper=styled.div`
    // position:relative;
    // height:500px;
    // height:100%;
    min-height:100%;
    display:flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap:wrap;
    
    .new{
        position: absolute;
        top:0;
        background-color: rgb(175, 175, 175,.7);
        width:100%;
        padding:-1px -10px;
        z-index:100;
        // height:100%;
    }

`
export const ManagerSearchFormWrapper=styled.div`
    display:block;
    width:100%;
    margin:0 auto;
    // height:200px;
    margin-top:20px;
    margin-bottom:20px;

`

export const ManagerListWrapper=styled.div`
    width:100%;
    min-height:100%;
    border-top:1px solid #e7e7e7;
    margin-bottom:20px;
    margin-top:20px;

`
//ManagerSearchForm start
export const FromGroup=styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    label{
        color:rgb(51, 51, 51);
        float:left;
        display:block;
        font-size:14px;
        font-weight:700;
        padding:10px;
    }
    input{
        
            border:1px solid rgb(204, 204, 204);
            border-radius:4px;
            box-shadow:rgba(0, 0, 0, 0.075) 0px 1px 1px 0px inset;
            color:rgb(85, 85, 85);
            height:32px;
            line-height:18px;
            width:200px;
        
    }
    button{
        background-color:rgb(51, 122, 183);
        border-radius:4px;
        border:1px solid rgb(46, 109, 164);
        color:rgb(255, 255, 255);
        margin-top:10px;
        margin-left:50px;
        cursor:pointer;
        font-size:14px;
        padding:5px 12px;

    }
`;
//ManagerSearchForm end
//Table start
export const ManageTable=styled.table`

    width:80%;
    margin-left:150px;
    display:table;
    margin-bottom:20px;
    text-align:left;

    .addBook{
        padding:2px;
        font-size:12px;
        text-align:center;
        width:58px;
        height:20px;
        line-height:20px;
        background-color:rgb(255, 255, 255);
        color:black;
        border:1px solid rgb(204, 204, 204);
        border-radius:5px;
        cursor:pointer;
    }
    caption{
        color:rgb(119, 119, 119);
        font-size:14px;
        padding:8px;
        text-align:left;
        margin:10px;

    }
    
    tr{
        font-weight:700;
        font-size:14px;
        margin:10px;
        border-bottom:1px solid #e7e7e7;
        padding-left:5px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        th{
            padding-left:20px;
            width:100px;
            overflow:hidden;
        }
        .operation{
            width:157px;
        }
        
        
    }
    thead{
      
        height:30px;
     
        line-height:30px;
        
    }
    


`
export const ManagerItemTR=styled.tr`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    height:30px;
    line-height:30px;
    width:100%;
    padding:5px;
    td{
        padding-left:20px;
        width:115px;
        overflow:hidden;
    }
    .buttonw{
        width:180px;
    }
    .booki{
        width:114px;
    }



`
//Table end