import React from 'react';
import ReactDOM from 'react-dom';
import Block from './components/Block';
import Button from './components/Button';
import blocks from './blocks';

import './sass/main.scss';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.handleToggle = this.handleToggle.bind(this);
        this.handleButton = this.handleButton.bind(this);

        this.state = {
            blocks: this.props.initialData
        }



    }

    handleToggle(id){
        const blocks = this.state.blocks.map(block => {
            if (block.id === id) {
                block.focus = !block.focus;

            }

            return block;
        });

        this.setState({ blocks });

    }

    handleButton(side){
        if(side == "left"){
            const blocks = this.state.blocks.map(block => {
                if (block.focus && !block.side) {
                    block.focus = !block.focus;
                    block.side = !block.side;
                }

                return block;
            });
        }else {
            const blocks = this.state.blocks.map(block => {
                if (block.focus && block.side) {
                    block.focus = !block.focus;
                    block.side = !block.side;
                }

                return block;
            });
        }


        this.setState({ blocks });

    }
    render() {
        return (
            <div className="container">
                <Block blocks={this.props.blocks} side="left" onClick={this.handleToggle}  />
                <Button onClick={this.handleButton} />
                <Block blocks={this.props.blocks} side="right"  onClick={this.handleToggle} />

            </div>
        )
    }
}

ReactDOM.render(<App initialData={blocks} blocks={blocks} />, document.getElementById('root'));
