import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
import { cartActions } from './cart-slice';

// const middleware = [thunk];
const mockstore = configureMockStore()

describe('cartSlice test',()=> {

    it('should add to cart items', ()=> {
        const initialState = {
            itemsList: [],
        }
        const store = mockstore(initialState);

        const newCartItem = {
            _id: 1,
            price: 29.2,
            quantity: 1,
            totalPrice: 29.2,
            title: 'afa ',
            inCart: false,
            description: "",
            image: "",
            availableSizes: ["XS","M"]
        }

        store.dispatch(
            cartActions.addToCart({
                newCartItem
            })
        )

        // expected
        const actions = store.getActions();
        const expectedAction = { type: 'cart/addToCart', payload: newCartItem}

        expect(actions).toEqual([expectedAction]);

        const newState = store.getState();
        expect(newState.itemsList).toHaveLength(1);
        expect(newState.itemsList[0]).toEqual(newCartItem);

    })
})
