import MarketPlaceCard from "../components/MarketPlacePage/MarketPlaceCard";
import WelcomeText from "../components/WelcomePage/WelcomeText";

export default function Home() {
  return (
    <>
      <section className="flex justify-center mt-64">
        <WelcomeText />
      </section>
      <section>
        <div className="h-screen">
          <section className="flex flex-row items-center justify-evenly w-screen h-1/2 xl:mt-10 sm:mt-10">
            <MarketPlaceCard TeamName={"ZilSwap"} MarketName={"Arky"} MarketPlaceLogo={"/logo-arky-small.png"} MarketDescription={"Welcome to ARKY — an inclusive NFT marketplace created for creators and collectors, and their digital art. Designed with the end-users in mind, ARKY redefines the NFT space by delivering comprehensive features through a seamless experience..."} />
            <MarketPlaceCard TeamName={"Duck Team"} MarketPlaceLogo={"/zilkroad.png"} MarketDescription={"Coming Soon"} MarketName={"Zilkroad"} />
            <MarketPlaceCard TeamName={"Zilliqa"} MarketPlaceLogo={"/zilliqa-zil-logo.png"} MarketDescription={"Coming Soon"} MarketName={"Rialto"} />
          </section>
        </div>
      </section>
    </>
  )
}
