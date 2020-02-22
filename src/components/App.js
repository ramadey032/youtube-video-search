import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../services/youtube';
import VideoList from './VideoList';


export default class App extends React.Component {

    state = { videos: [] };

    onSearchSubmit = async (myInput) => {
        const response = await youtube.get('/search', {
            params: {
                q: myInput
            }
        });

        this.setState({ videos: response.data.items });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSearchSubmit} />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}