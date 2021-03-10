import React, { Component } from 'react';
import Page from './pageing/Page';
/**
 * 批量处理即分页
 * 需传入
 *     ①数据总量len:用于分页
 *     ②sortsItem:批量管理框显示方法
 *     ③changeAllclick:改变页面的allClick属性
 *     ④changeStartAndEnd:改变显示数据的开始和结束序号
 */
class SortsFooter extends Component{
   
    constructor(props){
        super(props);
        this.state={
            total:props.len,
            pageSize:props.pageSize,
            indexPage:1,
            itemStart:props.itemStart||0,
            itemEnd:props.itemEnd||5,
        }

    }
    componentWillReceiveProps(nextProps){
        this.setState({
           total:nextProps.len,
           pageSize:nextProps.pageSize
        })
    }
    handleIndexPage(value){
        const total=this.props.len;
        const indexPage=this.state.indexPage;
        const {itemEnd,pageSize}=this.state;
            if(itemEnd+1+this.state.pageSize>total&&value>indexPage){
                this.setState({
                    indexPage:value,
                    itemStart:(value-1)*pageSize,
                    itemEnd:total
                    
                })
                this.props.changeStartAndEnd((value-1)*pageSize,total);
            }else{
                this.setState({
                    indexPage:value,
                    itemStart:(value-1)*pageSize,
                    itemEnd:(value-1)*pageSize+pageSize
                    
                })
                this.props.changeStartAndEnd((value-1)*pageSize,(value-1)*pageSize+pageSize);
            }  
    }
    render(){
        return(
            <div className="userFooter">
            <Page total={this.props.len} pageSize={this.state.pageSize} indexPage={this.state.indexPage}  changeIndexPage={this.handleIndexPage.bind(this)}/>
        </div>
        )
    }
}
export default SortsFooter;