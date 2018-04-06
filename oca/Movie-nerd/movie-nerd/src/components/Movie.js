import React from 'react';

class Movie extends React.Component {

    render() {
        return(
            <div>
                <img src={this.props.Poster} />
                {this.props.Title && <h3>Film: {this.props.Title}</h3>}
                {this.props.Type && <h3>Type: {this.props.Type}</h3>}
                {this.props.Year && <h3>Year: {this.props.Year}</h3>}
            </div>
        );
    }
};

export default Movie;