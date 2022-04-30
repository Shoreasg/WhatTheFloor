import axios from "axios";
import BigNumber from "bignumber.js"
import { useEffect, useState } from "react"
import ArkyUnverfiiedCollectionsPage from "../../../components/ArkyUnverfiedCollectionsPage/ArkyUnverfiiedCollectionsPage";

export default function UnverifiedCollections() {
    const [getArkyCollections, setGetArkyCollections] = useState([]);
    const [Loading, setLoading] = useState(true);
   
    useEffect(() => {
        const getCollections = async () => {
            await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/arky/collections`)
                .then(
                    ((res) => {
                        const sorted = res.data.sort((b,a)=>
                        {
                           
                            return BigNumber(a.allTimeVolume) - BigNumber(b.allTimeVolume)
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
                    <h1 className=" text-5xl font-medium ">All of these collections are Unverified by Arky!</h1>
                    <h3 className=" text-4xl font-bold text-red-600">DYOR before investing!</h3>
                    <h3 className=" font-medium text-2xl mt-10">Data is sorted by All time Volume on Arky</h3>
                </div>
            </section>
            <div className="h-max">
                <ArkyUnverfiiedCollectionsPage ArkyCollections={getArkyCollections} Loading={Loading}/>
            </div>
        </>)
}