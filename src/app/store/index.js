import { createStore, applyMiddleware, combineReducers } from "redux";
// import {defaultState} from './../../server/defaultState';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware  = createSagaMiddleware();
// import * as sagas from './sagas.mock';
// import * as sagas from './sagas';
import rootSaga from './sagas'
import * as mutations from './mutations';

export const store=createStore(
    combineReducers({
        cart:(cart = [],action)=>{
            switch (action.type) {
                case mutations.ADD_PRODUCT_TO_CART:
                    return [...cart,
                    Object.assign({},action.item)
                    ];
                case mutations.UPDATE_PRODUCT_TO_CART:
                    return [...cart.filter(item=>item.id!==action.item.id),
                    Object.assign({},action.item)
                    ];
            }
            return cart;
        },
        comments:(comments = [],action)=>{
            switch (action.type) {
                case mutations.SET_STATE:
                    return action.state.comments;
            }
            return comments;
        },  
        products:(products = [],action)=>{
            switch (action.type) {
                case mutations.SET_STATE:
                    return action.state.products;;
            }
            return products;
        },
            
        hotdeal:(hotdeal = [],action)=>{
            switch (action.type) {
                case mutations.SET_STATE:
                    return action.state.hotdeal;
            }
            return hotdeal;
        },

    }),
    applyMiddleware(createLogger(), sagaMiddleware)
)

// for (let saga in sagas){
//     sagaMiddleware.run(sagas[saga])
// }

sagaMiddleware.run(rootSaga)
// store.dispatch(mutations.requestState());