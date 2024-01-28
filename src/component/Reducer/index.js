const initialState = {
    previousNum: null,
    operator: null,
    currentNum: null,
    result: null,
};

export const Reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "SET_NUM":
            if (payload.digit === "0" && state.currentNum === "0") {
                return state;
            }

            if (payload.digit === "." && state.currentNum === null) {
                return {
                    ...state,
                    currentNum: "0."
                };
            }

            if (payload.digit === "." && state.currentNum && state.currentNum.includes(".")) {
                return state;
            }

            if(state.result !== null){
                return {...state, result: null , currentNum: `${state.currentNum || ""}${payload.digit}`}
            }

            return {
                ...state,
                currentNum: `${state.currentNum || ""}${payload.digit}`
            };
        case "CLEAR":
            return { ...state, currentNum: null, previousNum: null, operator: null, result: 0 };
        case "SET_OPERATOR":

            // if(state.result !== null){
            //     return {
            //         ...state, previousNum: state.result ,
            //         result: state.result = null,
            //     }
            // }
            if (state.currentNum === null && state.previousNum === null) {
                return state;
            }


            if(state.currentNum && state.currentNum.endsWith(".")){
                return {
                    ...state,
                    operator: payload.digit,
                    previousNum: state.currentNum.slice(0, -1),
                    currentNum: null
                };
            }

            if (state.previousNum === null) {
                return {
                    ...state,
                    operator: payload.digit,
                    previousNum: state.currentNum,
                    currentNum: null
                };
            }




            if(state.currentNum === null){
                return state
            }


            return { ...state, operator: payload.digit };


        case "FIND_PERCENT":
            if (state.operator === "x" && state.currentNum !== null) {
                if (!state.currentNum.includes("%")) {
                    return {
                        ...state,
                        currentNum: state.currentNum + "%"
                    };
                }
            }
            return state
        case "SHOW_RESULT":
            if (state.operator && state.previousNum && state.currentNum) {
                const num1 = parseFloat(state.previousNum);
                const num2 = parseFloat(state.currentNum);
                let result = null;

                switch (state.operator) {
                    case "+":
                        result = num1 + num2;
                        break;
                    case "-":
                        result = num1 - num2;
                        break;
                    case "x":
                        if(state.currentNum.includes("%")){
                            result = (num1 * num2) / 100
                        }else{
                            result = num1 * num2;
                        }
                        break;
                    case "/":
                        result = num1 / num2;
                        break;
                    default:
                        result = null;
                }

                return { ...state, result: result, currentNum: null, previousNum: null, operator: null };
            }
            return state;
        default:
            return state;
    }
};
