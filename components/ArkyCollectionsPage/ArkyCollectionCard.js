import Link from "next/link";
import Image from 'next/image'

export default function ArkyCollectionCard({ Name, Description, Logo,URL }) {
    return (
        <>  
            
            <Link href={`/arky/${URL}`}>
            <div className="w-52  mr-1 ml-1 h-[188px] flex flex-col justify-center bg-slate-800 rounded-2xl drop-shadow-md hover:border-[#299197] hover:border-4  xl:w-96 xl:h-80 cursor-pointer sm:h-[188px] md:h-[188px]">
                    <div className="flex justify-center">
                        <Image className="rounded-t-2xl" width={"100px"} height={"100px"} src={Logo} alt={"CollectionLogo"}/>
                    </div>
                    <div className="p-2">
                        <h1 className="text-xl font-medium text-slate-600 pb-2 text-center">{Name}</h1>
                        <p className="text-sm tracking-tight text-center font-light hidden xl:flex text-slate-400 leading-6">{Description}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}