import React,{ Component } from 'react';
import Button from '../../../components/Button';
import {connect} from 'react-redux';
import {actionCreators} from '../store/index'
import {
    ManagerSearchFormWrapper,
    FromGroup
} from '../style'
class ManagerSearchForm extends Component{
    constructor(props){
        super(props);
        this.input=React.createRef();
    }

    handleSearch(){
        let value=this.input.current.value;
        console.log(value)
        this.props.search(value);
    }
    render(){
        return(
            <ManagerSearchFormWrapper>
                {/* style="margin-left:200px;" */}
                            
                    <FromGroup className="form-group">
                        <label for="firstname" className="col-sm-2 control-label">账号</label>
                        <div className="col-sm-3">
                            <input type="text" className="form-control"
                                                ref={this.input}
                                                placeholder={this.props.placeholder}/>
                        </div>
                    </FromGroup>
                    <FromGroup className="form-group">
                        <div className="col-sm-offset-2 col-sm-10" >
                            <Button  className="info" onClick={this.handleSearch.bind(this)}>查询</Button>

                        </div>
                    </FromGroup>
            </ManagerSearchFormWrapper>
        )
    }
}
const mapToDispatch=(dispatch)=>({
    searchBook(name){
        dispatch(actionCreators.searchbook(name))
    }
})
export default connect(null,mapToDispatch)(ManagerSearchForm);