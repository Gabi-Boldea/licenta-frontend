import { Order } from "@/types";
import { Separator } from "./ui/separator";

type Props ={
    order: Order;
};

const OrderStatusDetail = ({order}: Props) => {
    return (
        <div className="space-y-5">
            <div className="flex flex-col">
                <span className="font-bold">Delivering to: </span>
                <span>{order.deliveryDetails.name}</span>
                <span>{order.deliveryDetails.phoneNumber}</span>
                <span>{order.deliveryDetails.addressLine1}, {order.deliveryDetails.addressLine2}, {order.deliveryDetails.city}</span>
            </div>

            <div className="flex flex-col">
                <span className="font-bold">Order Items: </span>
                <ul>
                    {order.cartItems.map((item) => (
                        <li>
                            {item.quantity}x {item.name}
                        </li>
                    ))}
                </ul>
            </div>

            <Separator />

            <div className="flex flex-col">
                <span className="font-bold">Total: </span>
                <span>{(order.totalAmount / 100).toFixed(2)} RON</span>
            </div>
        </div>
    );
};

export default OrderStatusDetail;