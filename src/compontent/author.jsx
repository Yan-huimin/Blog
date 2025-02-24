import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkEmoji from 'remark-emoji';
import rehypeRaw from 'rehype-raw';
import '../CSS/author.css';

class Author extends Component {
    state = { 
        textmd: `
# :rocket: <font color='green'>**Hello, I'm yhm.**</font> :two_hearts:
:earth_asia: <font color='gray'>here is my website.</font> :globe_with_meridians:

- :white_check_mark: <font color='gray'>login</font>
- :white_check_mark: <font color='gray'>register</font>
- :white_check_mark: <font color='gray'>logout</font>
- :white_circle: <font color='gray'>chat</font>
- :white_circle: <font color='gray'>post your blog</font>

:apple: :green_apple: :tangerine: :lemon: :cherries: :grapes: :watermelon: :strawberry: :peach: :melon: :banana: :pear:
        `
    };

    render() { 
        return (
            <React.Fragment>
                <div className="markdown-content">
                    <ReactMarkdown 
                        remarkPlugins={[remarkGfm, remarkEmoji]} 
                        rehypePlugins={[rehypeRaw]}
                    >
                        {this.state.textmd}
                    </ReactMarkdown>
                </div>
            </React.Fragment>
        );
    }
}

export default Author;