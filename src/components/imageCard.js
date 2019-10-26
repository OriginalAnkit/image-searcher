import React from 'react'

class ImageCard extends React.Component {
    constructor() {
        super()
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', () => {
            this.setState({ spans: Math.ceil(this.imageRef.current.clientHeight / 10) })
        })
    }

    render() {
        const i = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} src={i.urls.regular} alt={i.alt_description} />
            </div>
        )
    }
}

export default ImageCard