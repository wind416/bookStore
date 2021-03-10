import React,{Component} from 'react';
import Upload from '../../../../components/Upload/index'
import {
    BookHideWrapper,
    ItemInfo,
    ImgItem,
    ItemNew
}from './style.js'
class AddBookHide extends Component{
    render(){
        return(
            <BookHideWrapper className="itemHideWrapper">

                <ItemNew className="itemInfo" >
                    <label>图片</label>
                    <ImgItem className="seItem">
                       <Upload/>
                    </ImgItem>
                     <ImgItem className="seItem">
                      
                        <Upload/>
                    </ImgItem>
                    <ImgItem className="seItem">
                       
                        <Upload/>
                    </ImgItem>
                    {/* <ImgItem className="seItem">
                       <Upload/>
                    </ImgItem>  */}
                </ItemNew>
            </BookHideWrapper>
        )
    }
}
export default AddBookHide;