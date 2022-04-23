import { useRouter } from "next/router"
export default function MarketPlaceCollection()
{
    const router = useRouter()
    const { marketname } = router.query
    return(<h1>{marketname}</h1>)
}