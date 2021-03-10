import {  HashRouter, Route , Switch } from 'react-router-dom';
import React,{ Component ,Fragment } from 'react';
import ManagerBook from './managerBook';
import ManagerUser from './managerUser';
import ManagerOrder from './managerOrder';
class ManagePage extends Component{
  
    render(){
        return(
            <Fragment>
               <HashRouter>
                    <Switch>
                        <Route path="/manager/managerBook"  component={ManagerBook}></Route>
                        <Route path="/manager/managerUser"   component={ManagerUser}></Route>
                        <Route path="/manager/ManagerOrder"  component={ManagerOrder}></Route>
                
                    </Switch>
                </HashRouter>
            </Fragment>
        )
    }
}
export default ManagePage;