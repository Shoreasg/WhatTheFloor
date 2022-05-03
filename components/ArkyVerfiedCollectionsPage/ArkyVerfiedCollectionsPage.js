import BigNumber from "bignumber.js"
import approximateNumber from "approximate-number"
import Link from "next/link"


export default function ArkyVerfiedCollectionsPage({ ArkyCollections, Loading }) {
    let projectCount = 1
    let getVerifiedCollections = ArkyCollections.map((data) => {

        let floorPrice = BigNumber(data.floorPrice).shiftedBy(-12)
        let AllTimeVolume = approximateNumber(BigNumber(data.allTimeVolume).shiftedBy(-12), { capital: true, precision: 4 });
        return (
            <>
                {data.isVerified ? <tbody className="bg-gray-100" key={data.tokenAddress}><tr className="text-gray-700" >
                    <td className="px-4 py-3 text-ms font-semibold border">{projectCount++}</td>
                    <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                <img className="object-cover w-full h-full rounded-full" src={data.profileImageURL} alt="profileimage" loading="lazy" />
                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <p className="font-semibold text-black underline hover:text-[#299197]">
                                <Link href={`/arky/verifiedcollections/${encodeURIComponent(data.collectionsName)}`}>{data.collectionsName}</Link>
                            </p>
                        </div>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">{data.totalToken}</td>
                    <td className="px-4 py-3 text-ms font-semibold border">{data.numHolders}</td>
                    <td className="px-4 py-3 text-ms font-semibold border">{floorPrice.toString()} ZIL</td>
                    <td className="px-4 py-3 text-ms font-semibold border">{AllTimeVolume} ZIL</td>
                </tr></tbody> : ""}

            </>
        )
    })

    return (
        <>
            {Loading ? <section className="container mx-auto p-6 font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full animate-pulse">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-100 bg-slate-900 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">No.</th>
                                    <th className="px-4 py-3">Project Name</th>
                                    <th className="px-4 py-3">Tokens</th>
                                    <th className="px-4 py-3">Owner</th>
                                    <th className="px-4 py-3">Floor Price on Arky</th>
                                    <th className="px-4 py-3">All Time Volume on Arky</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </section> : <section className="container mx-auto font-mono">
                <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="text-md font-semibold tracking-wide text-left text-gray-100 bg-slate-900 uppercase border-b border-gray-600">
                                    <th className="px-4 py-3">No.</th>
                                    <th className="px-4 py-3">Project Name</th>
                                    <th className="px-4 py-3">Tokens</th>
                                    <th className="px-4 py-3">Owner</th>
                                    <th className="px-4 py-3">Floor Price on Arky</th>
                                    <th className="px-4 py-3">All Time Volume on Arky</th>
                                </tr>
                            </thead>

                            {getVerifiedCollections}

                        </table>
                    </div>
                </div>
            </section>}
        </>

    )
}