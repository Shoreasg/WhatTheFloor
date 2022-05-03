import ArkyVerifiedCollectionsDetails from '../../../components/ArkyVerifiedCollectionsDetailsPage/ArkyVerifiedCollectionsDetails.js';
import ArkyVerifiedCollectionsProfile from '../../../components/ArkyVerifiedCollectionsDetailsPage/ArkyVerifiedCollectionsProfile.js';

export async function getServerSideProps(context) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/arky/verfiedcollections/${encodeURIComponent(context.params.CollectionName)}`)
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
                <ArkyVerifiedCollectionsProfile collectionDetails={collectionDetails}/>
                <ArkyVerifiedCollectionsDetails />
            </section>
        </>
    )
}
