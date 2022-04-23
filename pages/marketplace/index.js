import MarketPlaceCard from "../../components/MarketPlacePage/MarketPlaceCard";
export default function MarketPlace() {
    return (
        <>
            <section>
                <div className="text-center text-slate-900 mt-28">
                    <h1 className="text-5xl font-bold tracking-wider">Select a Marketplace</h1>
                </div>
            </section>
            <div className="h-screen">
            <section className="flex flex-row items-center justify-evenly w-screen h-1/2 xl:mt-20">
                <MarketPlaceCard TeamName={"ZilSwap"} MarketName={"Arky"} MarketPlaceLogo={"./logo-arky-small.png"} MarketDescription={"Welcome to ARKY — an inclusive NFT marketplace created for creators and collectors, and their digital art. Designed with the end-users in mind, ARKY redefines the NFT space by delivering comprehensive features through a seamless experience..."}/>
                <MarketPlaceCard TeamName={"Duck Team"} MarketPlaceLogo={"./zilkroad.png"}MarketDescription={"Coming Soon"} MarketName={"Zilkroad"}/>
                <MarketPlaceCard TeamName={"Zilliqa"} MarketPlaceLogo={"./zilliqa-zil-logo.png"}MarketDescription={"Coming Soon"} MarketName={"Rialto"}/>
            </section>
            </div>
        </>



    )
}