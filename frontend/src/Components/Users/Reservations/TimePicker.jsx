import AppointmentPicker from 'appointment-picker';
import React, { Component } from 'react';

import './TimePicker.styles.css';

class TimePicker extends Component {


    constructor(props) {
        super(props);
        this.options = {
            ...this.props
        };
        this.state = { time: {} };
        this.pickerRef = React.createRef();
        this.onTimeSelect = this.onTimeSelect.bind(this);
    }

    onTimeSelect(event) {
        console.log('change.appo.picker', event.time);
        this.setState({ time: event.time });
        // Or do something different with your time object
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.pickerRef}></input>
                <code>{JSON.stringify(this.state.time)}</code>
            </div>);
    }

    componentDidMount() {
        let disabled = ['01:00']
        this.picker = new AppointmentPicker(this.pickerRef.current, this.options, disabled);
        this.pickerRef.current.addEventListener('change.appo.picker', this.onTimeSelect);
    }

    componentWillUnmount() {
        this.pickerRef.current.removeEventListener('change.appo.picker', this.onTimeSelect);
        this.picker.destroy();
    }
}

export default TimePicker;