import ArkyCollectionCard from "../../components/ArkyCollectionsPage/ArkyCollectionCard";
import ArkyInstruction from "../../components/ArkyCollectionsPage/ArkyInstruction";

export default function Arky() {
  return (
    <>
      <section className="flex justify-center mt-64">
        <ArkyInstruction/>
      </section>
      <section>
        <div className="h-screen">
          <section className="flex flex-row items-center justify-evenly w-screen h-1/2 xl:mt-10 sm:mt-10">
            <ArkyCollectionCard Name={"Verified Collections"} MarketName={"Arky"} Logo={"/verified.png"} Description={"Verified Collections are collections verified by Arky. They are usually safe to invest"} URL={"verifiedcollections"} />
            {/* <ArkyCollectionCard Name={"Unverified Collections"} MarketPlaceLogo={"./zilkroad.png"} MarketDescription={"Coming Soon"} MarketName={"Zilkroad"} />
            <ArkyCollectionCard Name={"Scam Collections"} MarketPlaceLogo={"./zilliqa-zil-logo.png"} MarketDescription={"Coming Soon"} MarketName={"Rialto"} /> */}
          </section>
        </div>
      </section>
    </>
  )
}
