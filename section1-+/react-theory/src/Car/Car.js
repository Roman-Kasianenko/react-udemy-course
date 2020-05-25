import React, {Component} from 'react';
import './Car.css'
import  Radium from 'radium'

class  Car extends Component{

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('Car componentWillReceiveProps ', nextProps)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('Car shouldComponentUpdate ', nextProps);
        return nextProps.name.trim() !== this.props.name.trim()
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('Car componentWillUpdate ',nextProps )
    }

    static getDerivedStateFromProps(nextProps, prevState){
        console.log('Car getDerivedStateFromProps')
        return {
            prevState
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Car componentDidUpdate')
    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     console.log('CAR getSnapshotBeforeUpdate')
    // }

    componentWillUnmount() {
        console.log('Car componentWillUnmount')
    }

    render() {
        // if (Math.random() > 0.7) {
        //     throw new Error('Car random error!')
        // }
        console.log('Car render')
        const inputClasses = ['input'];
        const props = this.props;
        if (props.name !== '') {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }

        if (props.name.length > 4) {
            inputClasses.push('bold')
        }

        const style = {
            border: '1px losid #ccc',
            boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .14)',
            ':hover': {
                border: '1px solid #aaa',
                boxShadow: '0 4px 15px 0 rgba(0, 0, 0, .25)',
                cursor: 'pointer'
            }
        };

        return (
            <div className='Car' style={style}>
                <h3>Car name: {props.name}</h3>
                <p>Year: <strong>{props.year}</strong></p>
                <input type='text' onChange={props.onChangeName} value={props.name} className={inputClasses.join(' ')}/>
                <button onClick={props.onDelete}>Delete</button>
            </div>
        )
    }
}

export default Car
