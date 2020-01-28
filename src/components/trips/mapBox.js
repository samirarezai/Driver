import React, {Component} from 'react';
import CedarMaps from '@cedarstudios/react-cedarmaps';
import './map.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faMapMarker, faPhone
} from "@fortawesome/free-solid-svg-icons";
import Header from "../publicComponents/header";

class MapPage extends Component {
    state = {
        lng: 51.39232213228172,
        lat: 35.77005206115901,
        showRow: false,
        bottom: '-40vh'
    };
    showInfo = () => {
        this.setState({
            showRow: !this.state.showRow
        })

        if (!this.state.showRow) {
            this.setState({
                bottom: '0'
            })
        } else {
            this.setState({
                bottom: '-40vh'
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {

        const {RotationControl, ZoomControl, ScaleControl, Marker, Map, MapContext, Geocoder, L} = CedarMaps.getReactMapboxGl();

        return (
            <>

                <CedarMaps
                    containerStyle={{
                        height: '100vh',
                        width: '100%'
                    }}
                    token='2e6f3b1a94fd3ae41bda2d1ac5cee21af542c0c2'
                    preserveDrawingBuffer={false}
                    center={[51.39232213228172, 35.77005206115901]}
                    onClick={this.handleClick}
                >
                    <RotationControl/>
                    {/*    <ZoomControl/>*/}
                    {/*   <ScaleControl/>*/}
                    <Marker
                        coordinates={[this.state.lng, this.state.lat]}
                        anchor="bottom"
                    >
                        <div className="bg-white p-1 text-center border-radius-10"
                             style={{fontFamily: 'IRANSans_light'}}>
                            <p className="font-size-08">رضا عبدی</p>
                            <p className="font-size-07">این یه مارکره</p>
                        </div>

                        <FontAwesomeIcon icon={faMapMarker} color="red" size="2x"/>
                    </Marker>
                    <Marker

                        title="این یه مارکره"
                        coordinates={[51.49943883142606, 35.803193981999655]}
                        anchor="bottom"
                    >
                        <FontAwesomeIcon icon={faMapMarker} color="red" size="2x"/>
                    </Marker>

                </CedarMaps>
            </>
        );
    }
}

export default MapPage;
