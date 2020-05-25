import React, {Component} from 'react';
import './App.css';
import Car from "./Car/Car";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";
import Counter from "./Counter/Counter";

class App extends Component {

    constructor(props) {
        super(props);
        console.log('App construnctor')
        this.state = {
            cars: [
                {name: 'Ford', year: 2018},
                // {name: 'Audi', year: 2013},
                // {name: 'Mazda', year: 2000},
                // {name: 'BMW', year: 2004}
            ],
            pageTitle: 'React component',
            showCars: false
        };
    }



    changeTitleHandler = (newTitle) => {
        this.setState(
            {
                pageTitle: newTitle
            }
        );
    };

    onChangeName(name, index) {
        const car = this.state.cars[index];
        car.name = name;
        // const cars = this.state.cars.concat()
        const cars = [...this.state.cars];
        cars[index] = car;
        this.setState({cars})
    }

    deleteHandler(index) {
        const cars = this.state.cars.concat();
        cars.splice(index, 1)
        this.setState({cars})
    }

    handleInput = (event) => {
        this.setState({
            pageTitle: event.target.value
        })
    };

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        })
    };

    componentWillMount() {
        console.log('App componentWillMount')
    }

    componentDidMount() {
        console.log('App componentDidMount')
    }

    render() {

        console.log('App render')

        const divStyle = {
            textAlign: 'center'
        };

        let cars = null;
        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary  key={index}>
                        <Car
                            name={car.name}
                            year={car.year}
                            onDelete={this.deleteHandler.bind(this, index)}
                            onChangeName={(event) => this.onChangeName(event.target.value, index)}
                        />
                    </ErrorBoundary>
                )
            })
        }

        return (
            <div className="App" style={divStyle}>
                {/*<h1>{this.state.pageTitle}</h1>*/}
                <h1>{this.props.title}</h1>

                <Counter/>

                <hr/>

                {/*<input type="text" onChange={this.handleInput}/>*/}

                <button
                    style={{marginTop: 20}}
                    onClick={this.changeTitleHandler.bind(this, 'new title')}>Change title
                </button>
                <button onClick={this.toggleCarsHandler}>Show/Hide cars</button>

                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: '20px'
                }}>
                    {cars}
                </div>

            </div>
        );
    }
}

export default App;
