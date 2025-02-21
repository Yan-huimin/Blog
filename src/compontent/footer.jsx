import React, { Component } from 'react';
import '../CSS/footer.css';

class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className="text-center foot">
                    <hr />
                    <p className='info'>&copy; 2025 yhm(Blog). All rights reserved.</p>
                    <p className='info'>build by react, node.js, JavaScript, bootstrap, django, nginx, uwsgi.</p>
                    <p><img className='beian' src="https://i.miji.bid/2025/02/16/1996e86805a23411e7f367b0d6df6e41.png" alt="beian" /><a href="https://beian.miit.gov.cn/#/Integrated/index" className='linktoicp'>豫ICP备2025111236号</a></p>
                </div>
            </React.Fragment>
        );
    }
}

export default Footer;