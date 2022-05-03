import BigNumber from "bignumber.js"
import ArkyUnverfiiedCollectionsPage from "../../../components/ArkyUnverfiedCollectionsPage/ArkyUnverfiiedCollectionsPage";

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


export default function UnverifiedCollections({arkyCollections}) {

    const sortCollections = arkyCollections.sort((b, a) => {
        return BigNumber(a.allTimeVolume) - BigNumber(b.allTimeVolume)
    })


    return (
        <>
            <section>
                <div className="text-center text-slate-900 mt-28">
                    <h1 className=" text-5xl font-medium">All of these collections are unverified and listed on Arky! If you are the owner of the collection, feel free to contact us on twitter</h1>
                    <h3 className=" text-4xl font-bold text-red-600 mt-10">DYOR before investing!</h3>
                    <h3 className=" font-medium text-2xl mt-10">Data is sorted by All time Volume on Arky</h3>
                </div>
            </section>
            <div className="h-max">
                <ArkyUnverfiiedCollectionsPage ArkyCollections={sortCollections}/>
            </div>
        </>)
}