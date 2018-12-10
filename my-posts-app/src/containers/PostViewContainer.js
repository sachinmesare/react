import React from 'react';
import PostsAPI from '../apis/PostsAPI';
import PostView from '../components/PostView';
import StyledLink from '../styled-components/LinkWrapper';
import PageTitle from '../styled-components/PageTitle';

class PostViewContainer extends React.Component {

    state = { post: null };
    componentDidMount() {
        const { id } = this.props.match.params;
        PostsAPI.get(`/posts/${id}`).then(
            response => {
                this.setState({
                    post: response.data
                });
            }, error => {
                this.setState({
                    post: undefined
                });
                console.log(error);
            }
        );
    }
    render() {
        if (this.state.post === null) {
            return <div className="mt-3">Fetching post ...</div>
        }
        if (this.state.post === undefined) {
            return (<div >
                <PageTitle>Post Details
                <StyledLink className="float-right" to="/">
                        Back to list
                </StyledLink>
                </PageTitle>
                <div className="text-danger text-center mt-3">! Post not found !</div>
            </div>
            );
        }

        return (
            <div >
                <PageTitle>Post Details
                <StyledLink className="float-right" to="/">
                        Back to list
                </StyledLink>
                </PageTitle>
                <PostView post={this.state.post} />
            </div>
        );
    }
}


export default PostViewContainer;