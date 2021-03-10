import React,{ Component } from 'react';
import SortsFooter from '../../../components/sortsItem/SortsFooter'
import {
    ManagerListWrapper,
    ManageTable,
    ManagerItemTR
}from '../style'
class ManagerOrderList extends Component{
    constructor(){
        super();
        this.state={
            itemStart:0,
            itemEnd:5,
            pageSize:5
            
        }

    }
    changeItemStartAndEnd(start,end){
        this.setState({
            itemStart:start,
            itemEnd:end
        })

    }
    render() {
        const {order}=this.props;
        const { pageSize , itemEnd , itemStart }=this.state;
        return (
            <ManagerListWrapper>
                <ManageTable class="table table-hover" >
                <caption>订单列表</caption>
                <thead>
                    <tr>
                        <th>订单号</th>
                        <th>书籍号</th>
                        <th>订单用户</th>
                        <th>订单地址</th>
                        <th>订单时间</th>
                    </tr>
                </thead>
                <tbody>
                {
                    order.slice(itemStart,itemEnd).map((item)=>{
                        return(
                            <ManagerItemTR key={item.id}>
                      
                                    <td>{item.oid }</td>
                                    <td>{item.bid }</td>
                                    <td>{item.userid }</td>
                                    <td>{item.detailAddress }</td>
                                    <td>{item.creatDate }</td>
                         
                                
                                </ManagerItemTR>
                        )
                    })
                }
                    
        
                </tbody>
                </ManageTable>
                <SortsFooter len={order.length} pageSize={pageSize}
                                        changeStartAndEnd={this.changeItemStartAndEnd.bind(this)}/>
        </ManagerListWrapper>
         
        )
    }
}
export default ManagerOrderList;  