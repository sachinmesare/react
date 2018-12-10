import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PostsListContainer from './containers/PostsListContainer';
import PostViewContainer from './containers/PostViewContainer';
import NewPostContainer from './containers/NewPostContainer';


ReactDOM.render(
    <BrowserRouter>
        <div className="row m-0">
            <div className="col-sm-8 offset-sm-2 ">
                <Switch>
                    <Route path="/posts/new" component={NewPostContainer}></Route>
                    <Route path="/posts/:id" component={PostViewContainer}></Route>
                    <Route path="/" component={PostsListContainer}></Route>
                </Switch>
            </div>
        </div>
    </BrowserRouter>, document.getElementById('root'));