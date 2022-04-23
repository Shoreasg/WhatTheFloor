import Link from "next/link";
export default function MarketPlaceCard({ TeamName, MarketDescription, MarketPlaceLogo, MarketName }) {
    return (
        <Link href={`/${MarketName}`}>
        <div className="w-52 ml-2 mr-2 h-1/2 flex flex-col justify-center bg-slate-800 rounded-2xl drop-shadow-md hover:border-[#299197] hover:border-4  xl:w-96 xl:h-80 ">
            <div className="flex justify-center">
                <img className="w-1/3 rounded-t-2xl" src={MarketPlaceLogo} />
            </div>
            <div className="p-4">
                <h1 className="text-xl font-medium text-slate-600 pb-2 text-center">{MarketName}</h1>
                <p className="text-sm tracking-tight font-light hidden xl:flex text-slate-400 leading-6">{MarketDescription}</p>
                <p className="text-blue-400 text-xs text-center xl:flex">by {TeamName}</p>
            </div>
        </div>
        </Link>
    )
}