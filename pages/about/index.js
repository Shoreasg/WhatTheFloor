import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
export default function About() {
    return (

        <section className="h-screen">
            <div className="text-center text-slate-900 mt-28 text-5xl">
                About
            </div>
            <div className="w-full px-4 pt-16">
                <div className="w-full max-w-md p-2 mx-auto bg-white rounded-2xl border-4">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-slate-900 rounded-lg ">
                                    <span>What is WTF?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-white`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    What The Floor aka WTF gives Zilliqa users information about their favourite NFT projects.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-slate-900 rounded-lg ">
                                    <span>What if i spotted an error?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''
                                            } w-5 h-5 text-white`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    Contact me on twitter!
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>
        </section>
    )
}