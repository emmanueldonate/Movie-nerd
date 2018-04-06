import React from 'react';

class Forms extends React.Component {

    render() {
        return(
            <form onSubmit={this.props.getMovie}>
                <input type='text' name='movie' placeholder='Search Movie Title ...' />
                <button>Get Movie</button>
            </form>
        );
    }
};

export default Forms;