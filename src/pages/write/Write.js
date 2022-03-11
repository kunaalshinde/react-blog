import React from 'react'
import '../../index.scss'
import background from '../../images/snow-forrest.jpg'
import { Navigate } from 'react-router-dom';

export default class Write extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            isDrafted: false,
            isPublished: false,
            gotoHome: false
        }
        this.handleTitle = this.handleTitle.bind(this);
        this.handleBody = this.handleBody.bind(this);
        this.handlePublish = this.handlePublish.bind(this);
        this.handleDraft = this.handleDraft.bind(this);
    }

    handleTitle(event) {
        this.setState({title: event.target.value});
    }

    handleBody(event) {
        this.setState({body: event.target.value});
    }

    handlePublish(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
            isPublished: true,
            gotoHome: true
        });
    }

    handleDraft(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
            isDrafted: true,
            gotoHome: true
        });
    }

    render()
    {
        if(this.state.gotoHome)
        {
            return ( <Navigate to='/' /> );
        }
        return (
            <div className='write'>
            <form  className='write-form'>
                <img src={background} className='write-image' />
                <div className="writeform-group">
                    <input 
                        type="text" 
                        placeholder='Title' 
                        className='write-input' 
                        autoFocus={true} 
                        value={this.state.title}
                        onChange={this.handleTitle}
                    />
                </div>
                <div className="writeform-group">
                    <textarea 
                        className="write-input-text" 
                        placeholder='Write your blog' 
                        value={this.state.body}
                        onChange={this.handleBody}
                    ></textarea>
                </div>
                    <button
                        className="write-publish"
                        onClick={this.handlePublish}
                    >
                        Publish
                    </button>
                    <button
                        className='write-draft'
                        onClick={this.handleDraft}
                    >
                        Draft
                    </button>
            </form>
        </div>
        )
    }
}
