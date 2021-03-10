import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button/index';
import { connect } from 'react-redux';
import { actionCreators } from '../../store/index';
import {
    MyOrderWrapper,
    MainSection,
    NavOrder,
    TitleOrder,
    TitleSheet,
    OrderItemTitle,
    MyOrderItem,
    OrderItemMain
} from './style'
class MyOrder extends Component{
    componentDidMount(){
        this.props.getAllOrder(this.props.user.phone)
       
    }
    render(){
        const { order }=this.props;
        return(
            <MyOrderWrapper>

                <MainSection>
                    <NavOrder className="navOrder">
                        <TitleOrder className="titleOrd">全部订单</TitleOrder>
                        
                        <TitleSheet>
                            <span>书籍</span>
                            <span className="price">单价</span>
                            <span className="number">数量</span>
                            <span className="state">交易状态</span>
                        
                        </TitleSheet> 
                    </NavOrder>

                  
                        {
                            order.map((item)=>{
                                return(
                                    <MyOrderItem  >
                                        <OrderItemTitle className="secTitle">
                                                <span className="date">时间:{item.creat_date }</span>
                                                <span className="orderNumber">订单号：{item.oid }</span>
                    
                                            </OrderItemTitle>
                                        <OrderItemMain class="secMain" key={item.id}>
                                            <img src="" alt="订单图片"/>
                                            <span className="name">{item.goodName }</span>
                                            <span className="price">￥{item.goodPrice }</span>
                                            <span className="address">{item.detailAddress }</span>
                                            <Link to={{
                                                    pathname:"/book/commentBook/"+item.oid,
                                                    state:item
                                            }} >
                                                <Button className="primary">评价</Button>
                                            </Link>
                                        </OrderItemMain>
                                    </MyOrderItem>
                                 )  
                            })
                               
                        }
                        
             

	

                </MainSection>

            </MyOrderWrapper>
        )
    }
}
const mapState=(state)=>({
    order:state.getIn(["person","allOrder"]),
    user: state.getIn(['person', 'user'])

})
const mapDispatch = (dispatch) => ({
	getAllOrder(id){
		dispatch(actionCreators.getALLOrder(id));
	}
})
export default connect(mapState,mapDispatch)(MyOrder);