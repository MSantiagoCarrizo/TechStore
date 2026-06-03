import { Badge } from "react-bootstrap";
import { BsCart4 } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
    const { cart, cartQuantity } = useContext(CartContext)

    const quantity = cartQuantity();

    return (
        <div>
            <BsCart4 fontSize={'1.5rem'} />
            { quantity > 0 && <Badge style={{fontSize:"0.9rem"}} pill bg="danger">{quantity}</Badge> }
        </div>
    )
}

