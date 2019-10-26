import React from 'react';
import Page from './page';

class Main extends React.Component {

    state = {
        tabs: [
            'Search'
        ],
        pages: [
            {
                query: "",
                images: []
            }
        ],
        selectedTab: 0
    }

    tabs = () => {
        return this.state.tabs.map((tab, index) => {
            let tmpClass = "nav-link "
            if (index === this.state.selectedTab) {
                tmpClass += "active"
            }
            return (<li className="nav-item" key={index} onClick={e => this.tabChanged(index)}> <a className={tmpClass} href="#">{tab}</a> </li>)
        })
    }


    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    {this.tabs()}
                    <li className="nav-item" key={this.state.tabs.length} onClick={this.addNewTabClicked}>
                        <a className="nav-link" href="#"><i className="fas fa-plus"></i></a>
                    </li>
                </ul>
                <div>
                    <Page index={this.state.selectedTab}
                        searchTermCB={this.searchTermCB}
                        inputQuery={this.state.pages[this.state.selectedTab]}
                        imageResult={this.imageResult} />
                </div>
            </div>)
    }

    addNewTabClicked = (event) => {
        this.setState({
            tabs: [...this.state.tabs, "Search"], selectedTab: this.state.tabs.length,
            pages: [...this.state.pages, {
                query: "",
                images: []
            }]
        });
    }
    searchTermCB = (term) => {
        let newPages = [];
        let newTabNames = [];
        this.state.pages.forEach(
            (e, i) => {
                if (i === this.state.selectedTab) {
                    e.query = term
                    newPages.push(e)
                } else {
                    newPages.push(e)
                }
            }
        )
        this.state.tabs.forEach((tab, index) => {
            if (index === this.state.selectedTab) {
                if (!term) {
                    newTabNames.push("search")
                } else {
                    if (term.length > 10) {
                        term = term.substring(0, 7) + "..."
                    }
                    newTabNames.push(term)
                }
            } else {
                newTabNames.push(tab)
            }
        })
        this.setState({ pages: newPages, tabs: newTabNames })
    }

    tabChanged(index) {
        this.setState({ selectedTab: index })
    }

    imageResult=(result)=> {
        console.log(result)
        let newPages = [];
        this.state.pages.forEach(
            (e, i) => {
                if (i === this.state.selectedTab) {
                    e.images = result.results
                    newPages.push(e)
                } else {
                    newPages.push(e)
                }
            }
        )
        this.setState({pages:newPages})
    }
}

export default Main