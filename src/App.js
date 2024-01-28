import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.scss';

function App() {
    const dispatch = useDispatch();
    const result = useSelector(state => state.result);
    const previousNum = useSelector(state => state.previousNum);
    const operator = useSelector(state => state.operator);
    const currentNum = useSelector(state => state.currentNum);

    const setNum = (num) => {
        dispatch({ type: "SET_NUM", payload: { digit: num } });


    }

    const setOperator = (op) => {
        dispatch({ type: "SET_OPERATOR", payload: { digit: op } });
    }

    const findPercent = (percent) => {
        dispatch({type: "FIND_PERCENT", payload: {digit: percent}})
    }


    return (
        <div className="App">
            <div className="container">

                <div className="calculatorDisplay">
                    <div className="resultDisplay" style={{overflow: "hidden"}}>
                        <div className="previousNum">
                            {previousNum !== null ? `${previousNum}   ${ operator || ''}` : ''}
                        </div>
                        <div className="currentNum">{currentNum}</div>
                        <div className="result">
                            { result ? result : ""}
                        </div>
                    </div>
                    <div className="buttonsContainer">
                        <div className="numbersAndClear">
                            <button className="greyColor AC" onClick={() => dispatch({type: "CLEAR"})}>
                                AC
                            </button>
                            <button className="greyColor plusOrMinus">+|-</button>
                            <button className="percent greyColor" onClick={()=> findPercent("%")}>%</button>


                            <button className="blackColor" onClick={() => setNum("7")}>
                                7
                            </button>
                            <button className="blackColor"
                                    onClick={() => setNum("8")}>
                                8
                            </button>
                            <button className="blackColor" onClick={() => setNum("9")}>
                                9
                            </button>
                            <button className="blackColor" onClick={() => setNum("4")}>
                                4
                            </button>
                            <button className="blackColor" onClick={() => setNum("5")}>
                                5
                            </button>
                            <button className="blackColor" onClick={() => setNum("6")}>
                                6
                            </button>
                            <button className="blackColor" onClick={() => setNum("1")}>
                                1
                            </button>
                            <button className="blackColor" onClick={() => setNum("2")}>
                                2
                            </button>
                            <button className="blackColor" onClick={() => setNum("3")}>
                                3
                            </button>
                            <button className="blackColor zero" onClick={() => setNum("0")}>
                                0
                            </button>
                            <button className="blackColor" onClick={() => setNum(".")}>
                                .
                            </button>
                        </div>

                        <div className="leftSideOperators">
                            <button name="x" className="multiply yellowColor" onClick={() => setOperator("x")}>
                                x
                            </button>
                            <button name="/" className="divide yellowColor " onClick={() => setOperator("/")}>
                                /
                            </button>
                            <button name="-" className="minus yellowColor " onClick={() => setOperator("-")}>
                                -
                            </button>
                            <button name="+" className="plus yellowColor " onClick={() => setOperator("+")}>
                                +
                            </button>
                            <button className="equal yellowColor" onClick={() => dispatch({type: "SHOW_RESULT"})}>
                                =
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
