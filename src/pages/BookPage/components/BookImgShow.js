import React,{Component} from 'react';
import {
    BookImgShowWrapper
}from '../style'
class BookImgShow extends Component{
    constructor(props){
        super(props);
        this.state={
            mainsrc:this.props.bookimg.mainsrc
        }
    }


    
    handleChangeBigSrc(src){
        this.setState({
            mainsrc:src
        })

    }
    render(){
        const { bookimg }=this.props;
        const { mainsrc }=this.state;
        return(
            <BookImgShowWrapper>
                <img src={ mainsrc } className="big" alt="书籍大图展示"/>
                <ul className="listSmall">   
                    <li>
                        <img src={bookimg.src1 } onClick={()=>this.handleChangeBigSrc(bookimg.src1)}
                        className="imgsmall" alt="书籍小图展示"/>
                    </li>
                    <li>
                        <img src={bookimg.src2 } className="imgsmall" alt="书籍小图展示" onClick={()=>this.handleChangeBigSrc(bookimg.src2)}/>
                    </li>
                    <li>
                        <img src={bookimg.src3 } className="imgsmall" alt="书籍小图展示" onClick={()=>this.handleChangeBigSrc(bookimg.src3)}/>
                    </li>
                    <li>
                        <img src={bookimg.src4 } className="imgsmall" alt="书籍小图展示" onClick={()=>this.handleChangeBigSrc(bookimg.src4)}/>
                    </li>
                    <li>
                        <img src={bookimg.src5 } className="imgsmall" alt="书籍小图展示" onClick={()=>this.handleChangeBigSrc(bookimg.src5)}/>
                    </li>
                </ul>
            </BookImgShowWrapper>
        )
    }
}
export default BookImgShow;