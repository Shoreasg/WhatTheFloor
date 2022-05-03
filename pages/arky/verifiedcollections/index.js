import ArkyVerfiiedCollectionsPage from "../../../components/ArkyVerfiedCollectionsPage/ArkyVerfiedCollectionsPage"
import BigNumber from "bignumber.js"

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

export default function VerifiedCollections({ arkyCollections }) {

    const sortCollections = arkyCollections.sort((b, a) => {
        return BigNumber(a.allTimeVolume) - BigNumber(b.allTimeVolume)
    })

    return (
        <>
            <section>
                <div className="text-center text-slate-900 mt-28">
                    <h1 className=" text-5xl font-medium ">All of these collections are verified by #zilfam and are listed on Arky!</h1>
                    <h3 className=" font-medium text-2xl mt-10">Data is sorted by All time Volume on Arky</h3>
                </div>
            </section>
            <div className="h-max">
                <ArkyVerfiiedCollectionsPage ArkyCollections={sortCollections} />
            </div>
        </>)
}