import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
    const { control } = useFormContext();

    return (
        <div className="space-y-2">
            <div>
                <h2 className="text-2xl font-bold">Details</h2>
                <FormDescription>
                    Enter the details of your restaurant
                </FormDescription>
            </div>
            <FormField 
                control={control}
                name="restaurantName"
                render={({field}) => (
                    <FormItem>
                        <FormLabel>Restaurant Name</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} 
            />
            <div className="flex gap-4">
                <FormField 
                    control={control}
                    name="address"
                    render={({field}) => (
                        <FormItem className="flex-1">
                            <FormLabel>Address</FormLabel>
                            <FormControl>
                                <Input {...field} className="bg-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )} 
                />
                <FormField 
                    control={control}
                    name="phone"
                    render={({field}) => (
                        <FormItem className="flex-1">
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input {...field} className="bg-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </div>
            <FormField 
                control={control}
                name="deliveryPrice"
                render={({field}) => (
                    <FormItem className="max-w-[25%]">
                        <FormLabel>Delivery price</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} 
            />
            <FormField 
                control={control}
                name="estimatedDeliveryTime"
                render={({field}) => (
                    <FormItem className="max-w-[25%]">
                        <FormLabel>Estimate Delivery Time (minutes)</FormLabel>
                        <FormControl>
                            <Input {...field} className="bg-white" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} 
            />
        </div>
    );
};

export default DetailsSection;