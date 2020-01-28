import React, {Component} from 'react';
import Price from "./activeTrips";

class CardTrips extends Component {
    render() {
        return (
            <>
                <div className="cardTrips">
                    <div className="firstCardTrips py-1">
                        <Price/>
                        <NumberPerson/>
                        <TypeTrips/>

                    </div>
                    <TimeTrip className=" text-right mx-2 py-3 border-bottom-gray "/>
                    <AddressTrip/>
                    <div>
                        <button type="button" className="text-green font-size-09 font-weight-bold my-2">مشاهده نقشه
                        </button>
                    </div>
                    <div className="cardTrips bgGreen p-1 text-center">
                        <button className="text-white w-100 text-center">صفحه سفر</button>
                    </div>
                </div>
            </>
        );
    }
}

export default CardTrips;
