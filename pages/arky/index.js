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
            <ArkyCollectionCard Name={"Verified Collections"} Logo={"/What_the_floor_Verified.svg"} Description={"Verified Collections are collections verified by Arky. They are usually safe to invest"} URL={"verifiedcollections"} />
            <ArkyCollectionCard Name={"Unverified Collections"}  Description={"Unverified Collections are collections not verified by Arky. This means that you have to DYOR and consider carefully before investing!"} Logo={"/What_the_floor_Unverified.svg"} URL={"unverifiedcollections"} />
            <ArkyCollectionCard Name={"Scam Collections"}  Description={"Scam Collections are Collections that are marked as scam by ARKY. DO NOT BUY FROM THEM"} Logo={"/What_the_floor_Scam.svg"} URL={"scamcollections"} />
          </section>
        </div>
      </section>
    </>
  )
}
