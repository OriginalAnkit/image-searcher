import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/main'
class App extends React.Component {
    render() {
        return (
            <div className="mt-10">
                <div className="container">
                    <Main />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"))