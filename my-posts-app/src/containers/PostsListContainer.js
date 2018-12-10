import React from 'react';
import PostsList from '../components/PostsList';
import PostsAPI from '../apis/PostsAPI';
import PageTitle from '../styled-components/PageTitle';
import StyledLink from '../styled-components/LinkWrapper';

class PostsListContainer extends React.Component {
    state = { posts: undefined };
    componentDidMount() {
        PostsAPI.get('/posts').then(
            response => {
                this.setState({ posts: response.data });
            }, error => {
                console.log(error);
            });
    }

    render() {
        if (!this.state.posts) {
            return <div className="mt-3">Fetching your posts...</div>
        }
        else if (!this.state.posts.length) {
            return <div className="text-center mt-3">No posts available to show!</div>
        }
        return (
            <div>
                <div className="form-group">
                    <PageTitle >My Posts
                    <StyledLink className="float-right" to={`posts/new`}>
                            Add new post
                    </StyledLink>
                    </PageTitle>
                </div>
                <PostsList posts={this.state.posts} />
            </div>
        );
    };
}

export default PostsListContainer;