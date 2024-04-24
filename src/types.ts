export type User = {
    _id: string;
    email: string;
    name: string;
    phoneNumber: string;
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    county: string;
    country: string;
    postalCode?: string | null;
};

export type MenuItemType = {
    _id: string;
    name: string;
    price: number;
};

export type Restaurant = {
    _id: string;
    user: string;
    restaurantName: string;
    address: string;
    phone: string;
    deliveryPrice: number;
    estimatedDeliveryTime: number;
    cuisineType: string[];
    menuItems: MenuItemType[];
    imageUrl: string;
    lastUpdated: string;
};