import React, {Component} from 'react';
import HeadLogin from "../login/headLogin";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCar} from "@fortawesome/free-solid-svg-icons";
import InfoPage from "../trips/infoPage";
import Header from "../publicComponents/header";

class Request extends Component {
    render() {
        return (
            <>
                <div
                    className="container-fluid bgGreen p-0 vh-100 d-flex flex-column align-items-center justify-content-between text-center">

                    <HeadLogin className="py-1">
                        <Header showLogo={true} showMenu={true}/>

                        <InfoPage name="سفرهای فعال">
                            <FontAwesomeIcon icon={faCar} size="2x" color="#fff"/>
                        </InfoPage>
                    </HeadLogin>
                    <div
                        className=" flex-grow-1 bg-white d-flex flex-column  w-100  border-radius-top-right">
                        <div className="container box-content  pt-3">
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Request;
