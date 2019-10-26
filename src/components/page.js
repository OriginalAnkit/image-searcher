import React from 'react';
import ImageCard from './imageCard';
import { getImages } from '../api/image';
import "../styles/page.css"
class Page extends React.Component {

    state = {
        term: ""
    }
    timeout = 0;
    render() {
        return (
            <div className="container mt-10">
                <div className='form-group'>
                    <label htmlFor="searchTerm">Enter Image Description</label>
                    <input type="email" className="form-control"
                        id='searchTerm' placeholder="Search for images..."
                        onChange={this.SearchForImages}
                        value={this.props.inputQuery.query}
                    />
                </div>
                <div className='image-list'>
                    {this.renderImages()}
                </div>
            </div>
        )
    }

    SearchForImages = (term) => {
        let tmpTerm = term.target.value
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
            getImages(tmpTerm).then(r => {
                this.props.imageResult(r.data)
            })
        }, 500);
        this.props.searchTermCB(tmpTerm)
    }

    renderImages = () => {
        return this.props.inputQuery.images.map(m => {
            return (<ImageCard image={m} key={m.id}/>)
        })
    }

}

export default Page