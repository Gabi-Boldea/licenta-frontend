import { OrderStatus } from "@/types";

type OrderStatusInfo = {
    label: string;
    value: OrderStatus;
    progressValue: number;
};

export const ORDER_STATUS: OrderStatusInfo[] = [
    {label: "Placed", value: "placed", progressValue: 0},
    {label: "Awaiting Restaurant Confirmation", value: "paid", progressValue: 25},
    {label: "Preparing Order", value: "inProgress", progressValue: 50},
    {label: "Out for Delivery", value: "outForDelivery", progressValue: 75},
    {label: "Order Delivered", value: "delivered", progressValue: 100},
];