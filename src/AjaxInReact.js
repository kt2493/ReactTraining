import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {RingLoader} from 'react-spinners';

// State and DOM Manipulation
class PhotoComponent extends React.Component {
    state = {
        photos: [],
        loading: true
    };
    // override componentDidMount
    componentDidMount() {
       const url = 'https://jsonplaceholder.typicode.com/photos';
       fetch(url)
        .then(response => response.json())
        .then(photos => {
            this.setState({photos : photos});
        })
        .catch(err=>console.log(err));
    }
    componentWillMount(){
        if (this.state.loading) {
            // this.setState({ loading: false });
            return (
                <div className="container">
                    <div className="row">
                        <RingLoader
                            color={'#123abc'}
                            loading={this.state.loading} />
                    </div>
                </div>
            );
        }
    }
   
    render() {
        const { photos, loading } = this.state;
        console.log(loading);
       
        return (
            <div className="container">
               <div className="row">
                <div className="card">
                    {
                        photos.map((photo,index) => (
                            <div key={index} className="col-lg-4">
                                {/* {photo.title} */}
                                <img className="card-img-top" src={photo.thumbnailUrl} alt="Thumbnail"/>
                                <div className="card-title">{photo.title}</div>
                            </div>
                        ))
                    }
                </div>
               </div>
            </div>
        );
    }
}

render(<PhotoComponent />, root);