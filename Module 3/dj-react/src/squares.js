import Component from 'react'

function Square(props) {
    return (
        <div className="square" style={{backgroundColor: props.color}}></div>
    )
}

export default Square