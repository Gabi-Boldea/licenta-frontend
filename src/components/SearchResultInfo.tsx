import { Link } from "react-router-dom";

type Props = {
    total: number;
    address: string;
};

const SearchResultInfo = ({total, address}: Props) => {
    return (
        <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:items-center lg:flex-row">
            <span>
                {total} Restaurants found in {address}
                <Link to="/" className="ml-3 text-lg font-normal cursor-pointer text-white bg-orange-500 hover:bg-gray-800 px-2 rounded-full">
                    Change Location
                </Link>
            </span>
        </div>
    );
};

export default SearchResultInfo;