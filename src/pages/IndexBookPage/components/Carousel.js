import React,{Component} from 'react';

import {
    CarouselWrapper,
    CarouselBox,
    ImgItem,
    CarouselDots
}from '../style'
class Carousel extends Component {
    constructor(props){
        super(props);
        this.state={
            showPage:0
        }

    }
    handleNext(changePage){
        this.setState({
            showPage:changePage
        })
    }
    render(){
        let {imgList}=this.props;
        const { showPage }=this.state;
        // imgList=[...imgList]
        return(
            <CarouselWrapper>
                <CarouselBox>
                    <i className="iconfont left" >&#xe61c;</i>
                    {/* <ImgItem >
                     <img className="banner"  src="http://img62.ddimg.cn/upload_img/00316/by/750-315-1613958603.jpg" alt="轮播"/>
                     </ImgItem> */}
                    {
                        imgList.map((item,index) =>{
                            return (
                                <ImgItem key={item.id}>
                                   
                                    <img 
                                        className={showPage===index?"banner":"hidden" }
                                        src={item.imgurl}
                                        alt='轮播图'/>
                                  
                                </ImgItem>
                            )
                           
                        })
                    }
                    <i className="iconfont right">&#xe7a7;</i>
                  <CarouselDots>
                      <div onMouseEnter={this.handleNext.bind(this,0)} ></div>
                      <div onMouseEnter={this.handleNext.bind(this,1)}></div>
                      <div onMouseEnter={this.handleNext.bind(this,2)}></div>
                  </CarouselDots>
                </CarouselBox>


            </CarouselWrapper>
        )
    }
}



export default Carousel;