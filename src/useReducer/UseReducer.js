import React, { useReducer} from 'react'

const UseReducer = () => {

    const reducer = (state, action) =>{
        switch (action.type){
            case "increment":
                return { count : state.count + 1, showText: state.showText};
            case "toggelShowText":
                return { count : state.count, showText: !state.showText};
            default: 
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, {count:0, showText:'true'} );

  return (
    <div>
        <h1>useReducer</h1>
        <span>{ state.count }</span>
        { state.showText && <p> Hello Clicker #{ state.count }</p> }
        <button onClick={ () => {
            dispatch({type:"increment"});
            dispatch({type:"toggelShowText"});
         } }>
        Click Me</button>
    </div>
  )
}

export default UseReducer