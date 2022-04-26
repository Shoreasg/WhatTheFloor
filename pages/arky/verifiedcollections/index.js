import ArkyVerfiiedCollectionsPage from"../../../components/ArkyVerfiedCollectionsPage/ArkyVerfiiedCollectionsPage"
import axios from "axios";
import BigNumber from "bignumber.js"
import { useEffect, useState } from "react"

export default function VerifiedCollections() {
    const [getArkyCollections, setGetArkyCollections] = useState([]);
    const [Loading, setLoading] = useState(true);
   
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
                        setLoading(false)
                    })
                )
        }
        getCollections();
    }, []);



    return (
        <>
            <section>
                <div className="text-center text-slate-900 mt-28">
                    <h1 className=" text-5xl font-medium ">All of these collections are verified by Arky!</h1>
                    <h3 className=" font-medium text-2xl">Data is sorted by All time Volume on Arky</h3>
                </div>
            </section>
            <div className="h-max">
                <ArkyVerfiiedCollectionsPage ArkyCollections={getArkyCollections} Loading={Loading}/>
            </div>
        </>)
}