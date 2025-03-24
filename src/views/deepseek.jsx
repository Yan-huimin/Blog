import React, { Component } from 'react';
import '../CSS/deepseek.css';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import 'katex/dist/katex.min.css';
import GoHome from '../compontent/gohome';
import Mode from '../compontent/mode';
import { getCookie } from '../utils/utils';

class Deepseek extends Component {
    state = { 
        message: '',
        answer: '',
        has_answer: false,
     } 

     handleSend = async () => {
        if (this.state.message.trim() === '') {
            alert("Please enter a message!");
            return;
        }

        this.setState({ has_answer: false });

        alert("Please wait for a moment, the response may take a while.");

        try {
            const response = await fetch('https://yhmyo.cn/blog/deepseek_chat/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "X-CSRFToken": getCookie('csrftoken') 
                },
                xhrFields: {
                    withCredentials: true 
                },
                body: JSON.stringify({
                    messages: [
                        {
                            content: this.state.message, 
                            role: "user"
                        }
                    ]
                })
            });

            // 如果请求成功，解析 JSON 并更新状态
            if (response.ok) {
                const data = await response.json();
    
                // 从响应中提取答案
                const answer = data.choices && data.choices[0] && data.choices[0].message.content;
    
                if (answer) {
                    this.setState({
                        answer: answer,  // 设置答案
                        has_answer: true
                    });
                } else {
                    this.setState({
                        answer: "No valid answer received.",
                        has_answer: true
                    });
                }
            } else {
                this.setState({
                    answer: "Error: Unable to fetch response from Deepseek.",
                    has_answer: true
                });
            }
        } catch (error) {
            this.setState({
                answer: `Error: ${error.message}`,
                has_answer: true
            });
        }
    }

    renderAnswer = () => {
        return (
            <React.Fragment>
                <div className="answer-area">
                    <ReactMarkdown
                        children={this.state.answer}
                        remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeKatex]}
                        components={{
                            code({ node, inline, className, children, ...props }) {
                                const match = /language-(\w+)/.exec(className || '');
                                return !inline && match ? (
                                    <SyntaxHighlighter
                                        children={String(children).replace(/\n$/, '')}
                                        style={vscDarkPlus}
                                        language={match[1]}
                                        PreTag="div"
                                        {...props}
                                    />
                                ) : (
                                    <code className={className} {...props}>
                                        {children}
                                    </code>
                                );
                            }
                        }}
                    />
                </div>
            </React.Fragment>
        );
    }
    

    renderLoading = () => {
        return(
            <React.Fragment>
                <div className="spinner-grow text-primary loading" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </React.Fragment>
        )
    }

    render() { 
        return (
            <div className="container">
                <h1 className='Dynamic-gradient-color deepseek-h1'>Deepseek</h1>
                <div className="transparent-bk">
                    <textarea 
                        className="form-control question_text" 
                        placeholder="Input your question here" 
                        value={this.state.message} 
                        onChange={e => this.setState({ message: e.target.value })}
                        style={{ height: "100px" }}
                    />
                    <div className="btn-area">
                        <button 
                            type="button" 
                            className="btn btn-outline-success send-btn" 
                            onClick={this.handleSend}
                        >
                            Send
                        </button>
                    </div>
                </div>
                <div className="answer-container">
                        {this.state.has_answer ? this.renderAnswer() : this.renderLoading()}
                </div>
                <GoHome />
                <Mode DayOrNight={this.props.DayOrNight} ChangeMode={this.props.ChangeMode} />
            </div>
        );
    }
}

export default Deepseek;