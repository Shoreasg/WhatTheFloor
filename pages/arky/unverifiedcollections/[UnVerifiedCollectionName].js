import ArkyUnverifiedCollectionsDetails from "../../../components/ArkyUnverifiedCollectionsDetailsPage/ArkyUnverifiedCollectionsDetails"
import ArkyUnverifiedCollectionsProfile from "../../../components/ArkyUnverifiedCollectionsDetailsPage/ArkyUnverifiedCollectionsProfile"

export async function getServerSideProps(context) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/arky/collections/${encodeURIComponent(context.params.UnVerifiedCollectionName)}`)
    const data = await response.json()
    return {
        props:
        {
            collectionDetails: data,
        }
    }
}



export default function CollectionName({collectionDetails}) {

    // const urlSplit = (URL) => {
    //     let splitURL = URL.split("/");
    //     let splittedName = splitURL[splitURL.length - 1].split(".")[0];
    // }

    // let twitterName = urlSplit(Collection.twitterURL)

    return (
        <>
            <section className="h-max">
                <ArkyUnverifiedCollectionsProfile collectionDetails={collectionDetails}/>
                <ArkyUnverifiedCollectionsDetails/>
            </section>
        </>
    )
}
