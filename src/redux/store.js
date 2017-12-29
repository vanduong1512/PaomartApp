import { createStore } from 'redux';
import HomeScreen from '../screens/HomeScreen';

const defaultlState = {
    arrProducts: [],
};

const reducer = (state = defaultlState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT': {
            var product = [{ barcode: action.barcode, amount: 1, isDelete: false }];
            return { arrProducts: product.concat(state.arrProducts) };
        };
        case 'EDIT_AMOUNT': {
            return {
                ...state,
                arrProducts: state.arrProducts.map(e => {
                    if (e.barcode === action.barcode)
                        return { ...e, amount: (e.amount + action.addAmount) };
                    return e;
                })
            };
        }
        case 'INPUT_AMOUNT': {
            return {
                ...state,
                arrProducts: state.arrProducts.map(e => {
                    if (e.barcode === action.barcode)
                        return { ...e, amount: (action.amount !== undefined ? action.amount : 1) };
                    return e;
                })
            }
        }
        case 'DELETE_PRODUCT': {
            return {
                ...state,
                arrProducts: state.arrProducts.map(e => {
                    if (e.barcode === action.barcode)
                        return { ...e, isDelete: !e.isDelete };
                    return e;
                })
            }
        }
        default: break;
    }
    return state;
};

export default store = createStore(reducer); 