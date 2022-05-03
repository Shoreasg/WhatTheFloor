import BigNumber from "bignumber.js"
import ArkyScamCollectionsPage from "../../../components/ArkyScamCollectionsPage/ArkyScamCollectionsPage";


export async function getServerSideProps() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/arky/collections`)
    const data = await response.json()
    return {
        props:
        {
            arkyCollections: data,
        }
    }
}

export default function scamCollections({arkyCollections}) {

    const sortCollections = arkyCollections.sort((b, a) => {
        return BigNumber(a.allTimeVolume) - BigNumber(b.allTimeVolume)
    })

    return (
        <>
            <section>
                <div className="text-center text-slate-900 mt-28">
                    <h1 className=" text-5xl font-medium ">All of these collections are verifed as SCAM by #zilfam and they are listed on ARKY!</h1>
                    <h3 className=" text-4xl font-bold text-red-600 mt-10">DO NOT BUY THESE COLLECTIONS!</h3>
                </div>
            </section>
            <div className="h-max">
                <ArkyScamCollectionsPage ArkyCollections={sortCollections}/>
            </div>
        </>)
}