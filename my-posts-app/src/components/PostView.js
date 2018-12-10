import React from 'react';
class PostView extends React.Component {

    render() {
        return (
            <div className="card" >
                <div className="card-body">
                    <h5 className="card-title">{this.props.post.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.post.categories}</h6>
                    <p className="card-text">
                        {this.props.post.content}
                    </p>
                </div>
            </div>
        );
    }
}

export default PostView;

