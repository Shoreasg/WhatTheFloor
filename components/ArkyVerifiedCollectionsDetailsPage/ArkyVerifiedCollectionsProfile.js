import { SocialIcon } from 'react-social-icons';
export default function ArkyVerifiedCollectionsProfile({ collectionDetails }) {
    return (
        <div className="h-fit bg-gray-200  dark:bg-gray-800 flex">
            <div className="lg:w-full xl:w-full sm:w-full md:w-full bg-white shadow-lg w-full">
                <div className="flex justify-center">
                    {collectionDetails.profileImageURL ? <img className="h-32 w-32 bg-white p-2" src={collectionDetails.profileImageURL} alt="profile_image" /> : <img className="h-32 w-32 bg-white p-2" src={"/WTF.svg"} alt="profile_image" />}
                </div>
                <div>
                    <div className="text-center px-14">
                        <h2 className="text-gray-800 text-3xl font-bold">{collectionDetails.collectionsName}</h2>
                        <div className="flex flex-row justify-center mt-2 lg:w-full">
                            <div className="flex flex-row justify-center w-full lg:justify-center">
                                {collectionDetails.twitterURL && collectionDetails.twitterURL.includes("twitter") ? <><SocialIcon url={collectionDetails.twitterURL} network="twitter" style={{ height: 25, width: 25, marginRight: 2 }} target="_blank" /></>
                                    : ""}
                                {collectionDetails.discordURL && collectionDetails.discordURL.includes("discord") ? <><SocialIcon url={collectionDetails.discordURL} network="discord" style={{ height: 25, width: 25, marginRight: 2 }} target="_blank" /></>
                                    : ""}
                                {collectionDetails.telegramURL && collectionDetails.telegramURL.includes("t.me") ? <><SocialIcon url={collectionDetails.telegramURL} network="telegram" style={{ height: 25, width: 25, marginRight: 2 }} target="_blank" /></>
                                    : ""}
                                {collectionDetails.instagramURL && collectionDetails.instagramURL.includes("instagram") ? <><SocialIcon url={collectionDetails.instagramURL} network="instagram" style={{ height: 25, width: 25, marginRight: 2 }} target="_blank" /></>
                                    : ""}
                                {collectionDetails.websiteURL ? <><SocialIcon url={collectionDetails.websiteURL} label="website" style={{ height: 25, width: 25, marginRight: 2 }} target="_blank" /></>
                                    : ""}
                            </div>
                        </div>
                        <p className="mt-2 text-gray-600">{collectionDetails.description}</p>
                    </div>
                    <hr className="mt-6" />
                </div>
            </div>
        </div>
    )
}