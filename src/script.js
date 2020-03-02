import 'bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton'
import React from 'react';
import ReactDOM from 'react-dom'
import Dropdown from "react-bootstrap/Dropdown";

class Conversion extends React.Component {
    render() {
        return (
            <div>
                <p>test</p>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

ReactDOM.render(<Conversion />,document.getElementById('root'));