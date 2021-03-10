import React,{ Component } from 'react';
import SortsFooter from '../../../components/sortsItem/SortsFooter'
import {
    ManagerListWrapper,
    ManageTable,
    ManagerItemTR
}from '../style'
class ManagerUserList extends Component{
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
        const {user}=this.props;
        const { pageSize , itemEnd , itemStart }=this.state;
        return (
            <ManagerListWrapper>
     
                <ManageTable class="table table-hover" >
                <caption>用户列表</caption>
                <thead>
                    <tr>
                        <th>账号</th>
                        <th>昵称</th>
                        <th>性别</th>
                        <th>地址</th>
                        
                    </tr>
                </thead>
                    <tbody>
                {
                    user.slice(itemStart,itemEnd).map((item)=>{
                        return(
                            <ManagerItemTR key={item.id}>
                 
                                    <td>{item.phone }</td>
                                    <td>{item.username }</td>
                                    <td>{item.sex }</td>
                                    <td>{item.province }{item.city }</td>
                      
                            
                            </ManagerItemTR>
                        )
                    })
                }
                    
        
                    </tbody>
                </ManageTable>
                <SortsFooter len={user.length} pageSize={pageSize}
                                        changeStartAndEnd={this.changeItemStartAndEnd.bind(this)}/>
        </ManagerListWrapper>
        )
    }
}
export default ManagerUserList;  