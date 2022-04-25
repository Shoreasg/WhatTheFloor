import Image from "next/image";
import Link from "next/link";
export default function MarketPlaceCard({ TeamName, MarketDescription, MarketPlaceLogo, MarketName }) {
    return (
        <>
            {MarketName === "Arky" ? <Link href={`/arky`}>
                <div className="w-52 ml-2 mr-2 h-[188px] flex flex-col justify-center bg-slate-800 rounded-2xl drop-shadow-md hover:border-[#299197] hover:border-4  xl:w-96 xl:h-80 cursor-pointer sm:h-[188px] md:h-[188px]">
                    <div className="flex justify-center">
                        <Image className=" rounded-t-2xl" width={200} height={50} src={MarketPlaceLogo} alt={"marketplaceLogo"} />
                    </div>
                    <div className="p-4">
                        <h1 className="text-xl font-medium text-slate-600 pb-2 text-center">{MarketName}</h1>
                        <p className="text-sm tracking-tight font-light hidden xl:flex text-slate-400 leading-6">{MarketDescription}</p>
                        <p className="text-blue-400 text-xs text-center xl:flex">by {TeamName}</p>
                    </div>
                </div>
            </Link> :
                <div className="w-52 ml-2 mr-2 h-[188px] flex flex-col justify-center bg-slate-800 rounded-2xl drop-shadow-md  xl:w-96 xl:h-80 sm:h-fit md:h-fit">
                    <div className="flex justify-center">
                        <Image className="rounded-t-2xl" width={100} height={100} src={MarketPlaceLogo} alt={"marketplaceLogo"} />
                    </div>
                    <div className="p-4">
                        <h1 className="text-xl font-medium text-slate-600 pb-2 text-center">{MarketName}</h1>
                        <p className="text-sm tracking-tight font-light hidden xl:flex text-slate-400 leading-6">{MarketDescription}</p>
                        <p className="text-blue-400 text-xs text-center xl:flex">by {TeamName}</p>
                    </div>
                </div>
            }
        </>
    )
}