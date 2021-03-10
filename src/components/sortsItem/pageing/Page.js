import React,{Component} from 'react';
import './style.js';
import {
    PageWrapper,
    PageFirst,
    PagePrev,
    PageNext,
    PageEnd,
    PageDiv

}from './style'
class Page extends Component{
    /**
     * 
     * @param {*} props 
     * 加载时调用一次，用于初始化state
     * 更新时不调用
     */
    constructor(props){
        super(props);
        this.state={
            total:0,
            indexPage:0,
            pageSize:props.pageSize,
            disable:false,
            active:false,
            lastPage:0
        }
    }
    componentWillReceiveProps(nextProps){
        const {total,pageSize,indexPage}=nextProps;
        let lastPage;
        console.log("total"+total);
        if(total/pageSize===0){
            // console.log("不足")
            lastPage=1;
        }else if(total%pageSize===0){
            // console.log("除尽")
            lastPage=total/pageSize
        }else{
            // console.log("除不尽")
            lastPage=Math.floor(total/pageSize+1);
        }
        // console.log("lastPage  "+lastPage);
        this.setState({
            totall:total,
            indexPage:indexPage,
            lastPage:lastPage,
            pageSize:pageSize
        })

    }
    shouldComponentUpdate(nextProps, nextState) { // 组件Props或者state改变时触发，true：更新，false：不更新
        return true;
    }

    handleChangePage(value){
        if(this.props.changeIndexPage){
            this.props.changeIndexPage(value);
        }
    }
    render(){
        const {indexPage,lastPage}=this.state;
        console.log("lastpage:多少item"+lastPage)
        let items=[];
        for(var i=0;i<lastPage;i++){
            items.push(i+1)
          }
        return(
            <PageWrapper className="paging">
                <PageFirst className={indexPage===1?"first disable":"first"} 
                     onClick={this.handleChangePage.bind(this,1)}
                     >首页</PageFirst>
                <PagePrev className={indexPage===1?"prev disable":"prev"} 
                     onClick={this.handleChangePage.bind(this,indexPage-1)}
                     >上一页</PagePrev>
                { 
                  items.map((i)=><PageDiv key={i} onClick={this.handleChangePage.bind(this,i)}
                                            className={indexPage===i?"pagingDiv active":"pagingDiv"}
                                        >{i}</PageDiv>
                                        )
                }
                <PageNext className={lastPage===indexPage?"next disable":"next"} 
                     onClick={this.handleChangePage.bind(this,indexPage+1)}
                     >
                         下一页</PageNext>
                <PageEnd className={lastPage===indexPage?"last disable":"last"} 
                     onClick={this.handleChangePage.bind(this,lastPage)}
                    >
                         尾页</PageEnd>
            </PageWrapper>
        )
    }
}
export default Page;