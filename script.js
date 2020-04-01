import 'bootstrap';
import DropdownButton from 'react-bootstrap/DropdownButton'
import React from 'react';
import ReactDOM from 'react-dom'
import Dropdown from "react-bootstrap/Dropdown";

class Conversion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnText:"Esimene ühik",
            btnText2:"Teine ühik"
        }
    }
    changeBtn1 = (btnText) => {

        this.setState({ btnText });
    };
    changeBtn2 = (btnText2) => {
        this.setState({btnText2});
    };
    render() {
        return (
            <div>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic dropdown-btn1">
                        {this.state.btnText}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={ () => { this.changeBtn1("mm")}  } href="#/">mm</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn1("mm²")}  } href="#/">mm²</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn1("mm³")}  } href="#">mm³</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn1("cm")}  } href="#">cm</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn1("cm²")}  } href="#">cm²</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn1("cm³")}  } href="#">cm³</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn1("dm")}  } href="#">dm</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn1("dm²")}  } href="#">dm²</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn1("dm³")}  } href="#">dm³</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn1("m")}  } href="#">m</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn1("m²")}  } href="#">m²</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn1("m³")}  } href="#">m³</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn1("Km")}  } href="#">Km</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn1("Km²")}  } href="#">Km²</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn1("Km³")}  } href="#">Km³</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn1("Mm")}  } href="#">Mm</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn1("Mm²")}  } href="#">Mm²</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn1("Mm³")}  } href="#">Mm³</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="test" variant="success" id="dropdown-basic dropdown-btn2">
                        {this.state.btnText2}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={ () => { this.changeBtn2("mm")}  } href="#/">mm</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn2("mm²")}  } href="#/">mm²</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn2("mm³")}  } href="#">mm³</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn2("cm")}  } href="#">cm</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn2("cm²")}  } href="#">cm²</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn2("cm³")}  } href="#">cm³</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn2("dm")}  } href="#">dm</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn2("dm²")}  } href="#">dm²</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn2("dm³")}  } href="#">dm³</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn2("m")}  } href="#">m</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn2("m²")}  } href="#">m²</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn2("m³")}  } href="#">m³</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn2("Km")}  } href="#">Km</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn2("Km²")}  } href="#">Km²</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn2("Km³")}  } href="#">Km³</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn2("Mm")}  } href="#">Mm</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn2("Mm²")}  } href="#">Mm²</Dropdown.Item>
                        <Dropdown.Item onClick={ () => { this.changeBtn2("Mm³")}  } href="#">Mm³</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

ReactDOM.render(<Conversion />,document.getElementById('root'));