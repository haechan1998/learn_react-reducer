import React, { useReducer, useState } from 'react';

function reducer(state, action){
    switch(action.type){

        case 'INCREASE':
            return state + 1;

        case 'DECREASE':
            return state - 1;

        default:
            return state;
    }
}

const Counter = () => {

    // const [number, setNumber] = useState(0);
    const [number, dispatch] = useReducer(reducer, 0)
    
    const onIncrease = () => {
        // setNumber(num => num + 1)
        dispatch({ type : 'INCREASE'})
    };
    
    const onDecrease = () => {
        // setNumber(num => num - 1)
        dispatch({ type : 'DECREASE'})
    };

    return (
        <div>
            
            <h2>{number}</h2>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>

        </div>
    );
};

export default Counter;