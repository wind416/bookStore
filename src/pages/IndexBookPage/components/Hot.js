import React,{Component}from 'react';
import {
    HotSaleWrapper,
    HotTitle,
    Rank,
    ImgHidden,
    HotList
}from '../style'
class HotBook extends Component{
    constructor(props) {
        super(props);
        this.state={
            showHotItem:false,
            index:-1
        }
    }
    handleMoveHot(value,index){
        this.setState({
            showHotItem:value,
            showIndex:index
        })
    }
    
    render(){
        let { hotList }=this.props;
        const { showHotItem,showIndex }=this.state;

        // hotList=Array.from(hotList);
        return(
            <HotSaleWrapper className="hotSaled">
                <HotTitle className="hotTitle">新书热卖榜</HotTitle>
                {/* <!-- 通过访问servlet为index的内容，返回书本销量大于1000的书籍10本循环展示 --> */}
                <div className="listMenu">
                    <ul className="lg-list">
                         
                        {
                            hotList.map((item,index)=>{
                        
                                return(
                                    <HotList className="lg-item" key={item.bid}
                                        onMouseOver={this.handleMoveHot.bind(this,true,index)}
                                        onMouseOut={this.handleMoveHot.bind(this,false,index)}>
                                        <Rank className="rank"> {index+1}</Rank>
                                        <div className={showHotItem&&showIndex===index?"hidden":"show1"}>{item.name }({item.author })</div>
                                        <ImgHidden className={showHotItem&&showIndex===index?"":"hidden"}>
                                        
                                            <img src={item.image} className="small" alt="" />
                                            <p className="newName" >{item.author}</p>
                                            <span className="newPrice">￥{item.price}</span>       
                                            <span className="oldPrice">￥{item.oldPrice}</span>    
                                        </ImgHidden>               
                                    </HotList>
                                )
                                
                            })
                        }
                   

                     </ul>
       
            </div>      
        </HotSaleWrapper>
        )
    }
}
export default HotBook;