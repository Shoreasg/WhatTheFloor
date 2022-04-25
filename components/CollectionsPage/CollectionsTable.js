import BigNumber from "bignumber.js"
import approximateNumber from "approximate-number"


export default function CollectionsTable({ ArkyCollections, Loading }) {
    const projectCount = 1
    const getVerifiedCollections = ArkyCollections.map((data) => {

        const floorPrice = BigNumber(data.priceStat.floorPrice).shiftedBy(-12)
        const AllTimeVolume = approximateNumber(BigNumber(data.priceStat.allTimeVolume).shiftedBy(-12),{capital:true,precision:4});
        return (
            <>
                {data.verifiedAt ? <tr className="text-gray-700">
                    <td className="px-4 py-3 text-ms font-semibold border">{projectCount++}</td>
                    <td className="px-4 py-3 border">
                        <div className="flex items-center text-sm">
                            <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                <img className="object-cover w-full h-full rounded-full" src={data.profileImageUrl} alt="profileimage" loading="lazy" />
                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                            </div>
                            <div>
                                <p className="font-semibold text-black">{data.name}</p>
                            </div>
                        </div>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">{data.tokenStat.tokenCount}</td>
                    <td className="px-4 py-3 text-ms font-semibold border">{data.tokenStat.holderCount}</td>
                    <td className="px-4 py-3 text-ms font-semibold border">{floorPrice.toString()} ZIL</td>
                    <td className="px-4 py-3 text-ms font-semibold border">{AllTimeVolume} ZIL</td>
                </tr> : ""}

            </>
        )
    })

    return (
        <>
            {Loading ? <section className="container mx-10 p-6 font-mono">
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
                            <tbody className="bg-gray-100">
                                {getVerifiedCollections}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>}
        </>

    )
}