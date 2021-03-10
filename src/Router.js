import React,{ Component} from 'react';
import { HashRouter , Route  ,Switch} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import App from './App';
import LoginRegisterPage from './components/Login/index'
import {GlobalStyle} from './style';

export default class Routers extends Component{
    render(){
        return(
      
            
            <Provider store={store}>
              
               
                   <GlobalStyle/>
                    <HashRouter >
            
                            <Switch>
                                <Route path="/login"  component={LoginRegisterPage}></Route>
                                <Route path="/"  component={App}></Route>
                                
                            </Switch>
                    </HashRouter>
              
            </Provider>
        )
    }
}