import React,{Component} from 'react';
import Button from '../../../components/Button/index';
import SortsFooter from '../../../components/sortsItem/SortsFooter'
import {
    ManagerListWrapper,
    ManageTable,
    ManagerItemTR
}from '../style'
class ManagerBookList extends Component{
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
    handleDeleteBook(item){
        console.log("删除书籍")
        this.props.deleteBook(item.id);
    }
    handleShowUpdateBook(item){

        this.props.showUpdataBook(item);
    }
    render(){
        const { book }=this.props;
     
        const { pageSize , itemEnd , itemStart }=this.state;
        return(

                <ManagerListWrapper>
                        <ManageTable class="table table-hover" >
                            <caption>
                                <span>书籍列表</span>
                                <span className="addBook" style={{float:'right'}} onClick={this.props.showAddBook}>添加书籍</span>
                            </caption>
                            
                            <thead>
                                <tr>
                                    <th>书籍编号</th>
                                    <th>书籍名称</th>
                                    <th>作者</th>
                                    <th>价格</th>
                                    <th>出版社</th>
                                    <th>销售数量</th>
                                    <th className="operation">操作</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                book.slice(itemStart,itemEnd).map((item)=>{
                                    return (   
                                        <ManagerItemTR key={item.id}>
                                            <td className="booki">{item.id }</td>
                                            <td className="booki">{item.name }</td>
                                            <td className="booki">{item.author }</td>
                                            <td className="booki">{item.price }</td>
                                            <td className="booki"> {item.publisher }</td>
                                            <td className="booki">{item.salesVolume}</td>
                                            <td className="buttonw">
                                                <Button className="info four delete" onClick={this.handleDeleteBook.bind(this,item)}>删除书籍</Button>
                                                <Button className="success four update" 
                                                        onClick={()=>this.handleShowUpdateBook(item)}>修改书籍</Button>
                                            </td>
                                        
                                        </ManagerItemTR>
                                    )
                                })

                            }
                            
                
                            </tbody>
                        </ManageTable>
                        <SortsFooter len={book.length} pageSize={pageSize} itemEnd={itemEnd} itemStart={itemStart}
                                        changeStartAndEnd={this.changeItemStartAndEnd.bind(this)}/>
                </ManagerListWrapper>
                 

        )
    }
}
export default ManagerBookList;