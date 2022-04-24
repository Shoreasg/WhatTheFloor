import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav>
        <div className="flex flex-row space-x-6 xl:space-x-14 bg-slate-900">
          <div className="ml-6">
            <Link href={"/"}><img src="/WTF.svg" width={"90"}></img></Link>
          </div>
          <div className="mt-8 text-neutral-200 hover:text-[#299197]">
            <Link href={"/marketplace"}>MarketPlace</Link>
          </div>
          {/* <div className="mt-8 text-neutral-200 hover:text-[#299197]">
            <Link href={"/about"}>About</Link>
          </div> */}
        </div>
      </nav>
    </>
  );
}

export default Header