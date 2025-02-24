import React, { Component } from 'react';
import '../CSS/code.css';

class Code extends Component {
    state = {  } 
    render() {
        return (
            <React.Fragment>
                <div className="container_code">
                    <pre>
                        Hello!
                    </pre>
                    <pre>
                        {this.props.is_login ? 'Welcome to Why Chat!' : 'Where is here?'}
                    </pre>
                    <pre className='name'>
                        {this.props.is_login ? this.props.username : 'Why Chat?'}
                    </pre>
                    <pre>
                        You can chat and share your life with others.
                    </pre>
                    <pre>
                        Enjoying
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