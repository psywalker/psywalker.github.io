import React from 'react';
import ReactDOM from 'react-dom';

//
const Block = (props) => {
    const blocks = props.blocks;

    return (
        <div className="blocks">
            {props.side === 'left' ? (
                (
                    blocks.map(function(block, i){

                            if(block.side){
                                return <div className={`blocks__item ${block.focus && ' blocks__item_gray'}`} id={block.id} key={i}  onClick={() => { props.onClick(block.id)}}>Блок номер {block.title}</div>
                            }

                    })
                )

                ) : (

                    blocks.map(function(block, i){

                            if(!block.side){
                                return <div className={`blocks__item ${block.focus && ' blocks__item_gray'}`} id={block.id} key={block.id}  onClick={() => { props.onClick(block.id)}}>Блок номер {block.title}</div>
                            }

                    })

            )}
        </div>

    )
}

export default Block;
