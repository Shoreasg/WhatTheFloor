import { useRouter } from "next/router"
import CollectionsTable from "../../components/CollectionsPage/CollectionsTable"
import axios from "axios";
import BigNumber from "bignumber.js"
import { useEffect, useState } from "react"
export default function MarketPlaceCollection() {
    const [getArkyCollections, setGetArkyCollections] = useState([]);
    const router = useRouter()
    const { marketname } = router.query



    useEffect(() => {
        const getCollections = async () => {
            await axios.get(`${process.env.NEXT_PUBLIC_ARKY_URL}/nft/collection/list?limit=500`)
                .then(
                    ((res) => {
                        const sorted = res.data.result.entries.sort((b,a)=>
                        {
                           
                            return BigNumber(a.priceStat.allTimeVolume) - BigNumber(b.priceStat.allTimeVolume)
                        })
                        setGetArkyCollections(sorted)
                    })
                )
        }
        getCollections();
    }, []);



    return (
        <>
            <section>
                <div className="text-center text-slate-900 mt-28">
                    <h1 className="text-5xl font-bold tracking-wider">Select a Collection</h1>
                    <h2 className=" text-2xl font-medium ">All of these collections are verified by Arky!</h2>
                    <h3 className=" font-medium ">Table below is sorted by All time Volume on Arky</h3>
                    <h5 className=" font-bold ">DISCLAIMER: All data might be prone to errors. DYOR! If you spot any error, contact me on twitter @Shoreasg.</h5>
                </div>
            </section>
            <div className="h-max">
                <CollectionsTable ArkyCollections={getArkyCollections} />
            </div>
        </>)
}