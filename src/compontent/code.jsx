import React, { Component } from 'react';
import '../CSS/code.css';

class Code extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayText: '',
            textIndex: 0,
            charIndex: 0,
            isDeleting: false,
        };
        this.textLines = [
            "Welcome to my website!",
            "- 😊 This site is built by YHM",
            "- ⚡ Of course, it's me!",
            "- 🔥 Hope you enjoy browsing!",
        ];
    }

    componentDidMount() {
        this.typeText();
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    typeText = () => {
        const { textIndex, charIndex, isDeleting } = this.state;
        const currentLine = this.textLines[textIndex];
        
        let newText = isDeleting 
            ? currentLine.substring(0, charIndex - 1) 
            : currentLine.substring(0, charIndex + 1);
        
        this.setState({ displayText: newText, charIndex: isDeleting ? charIndex - 1 : charIndex + 1 });
        
        let typingSpeed = isDeleting ? 50 : 100;
        if (!isDeleting && newText === currentLine) {
            typingSpeed = 1500;
            this.setState({ isDeleting: true });
        } else if (isDeleting && newText === '') {
            typingSpeed = 500;
            this.setState({ isDeleting: false, textIndex: (textIndex + 1) % this.textLines.length });
        }
        
        this.timeout = setTimeout(this.typeText, typingSpeed);
    };

    render() {
        return (
            <React.Fragment>
                <div className="container_code">
                    <pre>
                        Hello!
                    </pre>
                    <pre>
                        {this.props.is_login ? 'Welcome to my website!' : 'who I am?'}
                    </pre>
                    <pre className='name welcome_code'>
                        {this.state.displayText || ' '}
                    </pre>
                    <pre>
                        Welcome to my personal website!
                    </pre>
                    <pre>
                        Happy ing!!!
                    </pre>
                    <pre>
                        ......
                    </pre>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Code;