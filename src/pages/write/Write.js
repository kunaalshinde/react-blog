import React from 'react'
import '../../index.scss'
import background from '../../images/snow-forrest.jpg'

export default class Write extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            isPublished: false,
        }
        this.handleTitle = this.handleTitle.bind(this);
        this.handleBody = this.handleBody.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitle(event) {
        this.setState({title: event.target.value});
    }

    handleBody(event) {
        this.setState({body: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render()
    {
        return (
            <div className='write'>
            <form  className='write-form' onSubmit={this.handleSubmit}>
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
                        type='submit' 
                        className="write-submit"
                    >
                        Publish
                    </button>
            </form>
        </div>
        )
    }
}
