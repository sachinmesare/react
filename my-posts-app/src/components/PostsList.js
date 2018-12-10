import React from 'react';
import { Link } from 'react-router-dom';

class PostsList extends React.Component {
    render() {
        if (!this.props.posts.length) {
            return <div>Fetching your posts...</div>
        }

        const postData = this.props.posts.map(post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`posts/${post.id}`}>
                        <h5> {post.title}</h5>
                    </Link>
                    <div>{post.categories}</div>
                </li>
            );
        });

        return (
            <ul className="list-group">
                {postData}
            </ul>
        );
    }
}

export default PostsList;
