import React from 'react';
import PageTitle from '../styled-components/PageTitle';
import StyledLink from '../styled-components/LinkWrapper';
import FormLabel from '../styled-components/FormLabel';

class NewPost extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            categories: '',
            content: ''
        };
    }

    handleSubmit = (event) => {
        this.refs.submitbtn.setAttribute("disabled", "disabled");
        event.preventDefault();
        this.props.savePost(this.state);
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <PageTitle>Add New Post</PageTitle>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <FormLabel> Name:</FormLabel>
                        <input name="title" className="form-control" type="text" required value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <FormLabel> Categories:</FormLabel>
                        <input name="categories" className="form-control" type="text" required value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <FormLabel> Content:</FormLabel>
                        <input name="content" className="form-control" type="text" required value={this.state.value} onChange={this.handleChange} />
                    </div>
                    <div className="text-center">
                        <button ref="submitbtn" className="btn btn-primary" type="submit" >Submit</button>
                        <StyledLink to="/" className="btn btn-danger">
                            Cancel
                    </StyledLink>
                    </div>
                </form>
            </div>
        );
    };
}

export default NewPost;