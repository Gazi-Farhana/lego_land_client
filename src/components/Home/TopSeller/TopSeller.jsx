import { useEffect, useState } from "react";
import SellerCard from "./SellerCard/SellerCard";


const TopSeller = () => {
    const [sellers, setSellers] = useState([]);

    useEffect(() => {
        fetch("https://lego-land-seven.vercel.app/sellers")
            .then((res) => res.json())
            .then((data) => setSellers(data.splice(6)));
    }, []);


    return (
        <div className="p-12 text-center">
            <h1 className="text-4xl font-bold mb-10">Top sellers</h1>
            <div className="grid grid-cols-4 gap-2">

            {sellers.map(seller => <SellerCard key={seller._id} seller={seller} />)}
            </div>
        </div>
    );
};

export default TopSeller;