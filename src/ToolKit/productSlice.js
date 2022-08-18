import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';
const initialState = {
    data: [],
    filter: null,
    loading: false,
    error: false,
    username: "megahed",
    active: "All",
    productDetails: {},
    cart: [],
}

// ********************gat productsX****************
export const getProductsX = createAsyncThunk("product", async (arg, thunkAPI) => {
    const { rejectWithValue } = thunkAPI

    try {
        let respose = await fetch("https://fakestoreapi.com/products")
        let results = await respose.json()
        if (arg) {
            let filterdResults = results.filter(el => el.category === arg.toLowerCase())
            return filterdResults
        } else {
            return results
        }
    } catch (error) {
        rejectWithValue(error.message)
    }
})


// ********************gat product details****************
export const getProductDetails = createAsyncThunk("productDetail", async (arg, thunkAPI) => {
    const { rejectWithValue} = thunkAPI

    try {
        let respose = await fetch(`https://fakestoreapi.com/products/${arg}`)
        let results = await respose.json()
        return results
    } catch (error) {
        rejectWithValue(error.message)
    }
})

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addItem: (state, action) => {
            toast.info("item has been added", {
                autoClose: 2000,
            })
            let productAdd = action.payload
            if (state.cart.length === 0) {
                state.cart = [...state.cart, { ...productAdd, quantity: 1 }]
            } else if (state.cart.length > 0) {
                let existItem = state.cart.find(element => element.id === productAdd.id)

                if (!existItem) {
                    state.cart = [...state.cart, { ...productAdd, quantity: 1 }]

                } else {
                    let indexItem = state.cart.indexOf(existItem)
                    state.cart[indexItem].quantity = state.cart[indexItem].quantity + 1
                }
            }

        },
        plusItem: (state, action) => {
            let foundElement = state.cart.find(el => el.id === action.payload.id)
            foundElement.quantity++
        },

        minusItem: (state, action) => {
            let foundElement = state.cart.find(el => el.id === action.payload.id)
            foundElement.quantity--
            let indexElement = state.cart.indexOf(foundElement)
            if (foundElement.quantity === 0) {
                state.cart.splice(indexElement, 1)
            }
        },
    },

    extraReducers: {
        // ************* get products ****************
        [getProductsX.pending]: (state) => {
            state.loading = true
            state.error = false
        },
        [getProductsX.fulfilled]: (state, action) => {
            state.loading = false
            state.data = action.payload
            state.filter = state.data
            if (action.meta.arg === undefined) {
                state.active = "All"
            } else {
                state.active = action.meta.arg
            }
        },
        [getProductsX.rejected]: (state, action) => {
            state.error = action.payload
        },



        // ************* gat product details ****************
        [getProductDetails.pending]: (state) => {
            state.loading = true
            state.error = false
        },
        [getProductDetails.fulfilled]: (state, action) => {
            state.loading = false
            state.productDetails = action.payload

        },
        [getProductDetails.rejected]: (state, action) => {
            state.error = action.payload
        },
    }
})


export default productSlice.reducer
export const { } = productSlice.actions
export const { addItem, plusItem, minusItem } = productSlice.actions