"use client"
import { RootState } from "@/app/store/store";
import { useSelector, useDispatch } from "react-redux";

const CartCounter = () => {
    const cartCounterValue = useSelector(
        (state: RootState) => state.cartCounterSlice.value
    )
    return(
        <div>{cartCounterValue}</div>
    );
}

export default CartCounter;