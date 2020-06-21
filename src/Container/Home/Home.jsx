import React, { Component, Fragment, createContext } from 'react';
import Product from '../Pages/Product/Product';
import BlogPost from '../Pages/BlogPost/BlogPost';
import LifeCycle from '../Pages/LifeCycle/LifeCycle';
import './Home.css';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import DetailPost from '../Pages/BlogPost/DetailPost/DetailPost';
import GlobalProvider from '../../Context/Context';




class Home extends Component {
    

    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:postId" component={DetailPost} />
                    <Route path="/lifecycle" component={LifeCycle} />
                    <Route path="/product" component={Product} />


                </Fragment>
            </BrowserRouter>


        )
    }
}

export default GlobalProvider(Home);
