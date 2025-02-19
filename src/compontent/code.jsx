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
                        My name is ?
                    </pre>
                    <pre className='name'>
                        YHM
                    </pre>
                    <pre>
                        I'm a 
                    </pre>
                    <pre>
                        Student
                    </pre>
                    <pre>
                        What a fucking life!
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