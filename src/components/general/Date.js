import React from "react";
import Moment from 'react-moment';
import 'moment-timezone';
import 'moment/locale/fr';

export default class App extends React.Component {
    render() {
        return (
            <>
                <Moment interval={0} format="hh:mm" className="post-time-stamp"></Moment>
            </>
        );
    }
}