import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {

  const router = useRouter();

  return (
    <>
      <nav>
        <div className="flex flex-row space-x-6 xl:space-x-14 bg-slate-900">
          <div className="ml-6">
            <Link href={"/"}>
              <Image src="/WTF.svg" width={"90"} height={"90"} alt={"WTFLogo"} className="cursor-pointer"/>
            </Link>
          </div>
          {/* <div className="mt-8 text-neutral-200 hover:text-[#299197]">
            <Link href={"/arky"}>Arky</Link>
          </div> */}
          <div className="mt-8 text-neutral-200 hover:text-[#299197]">
            <Link href={"/about"}>About</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header