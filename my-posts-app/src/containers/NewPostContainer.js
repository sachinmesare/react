import React from 'react';
import NewPost from '../components/NewPost';
import PostsAPI from '../apis/PostsAPI';

class NewPostContainer extends React.Component {

    savePost = (post) => {
        PostsAPI.post('/posts', post).then(
            response => {
                this.props.history.push('/');
            },
            error => {
                console.log(error);
            }
        );
    }

    render() {
        return <NewPost savePost={this.savePost} />
    }
}

export default NewPostContainer;