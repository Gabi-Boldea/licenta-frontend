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