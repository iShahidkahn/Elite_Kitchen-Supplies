'use client'

import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import Image from 'next/image'
import Search from './Search'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Shop', href: '/products', current: false },
  { name: 'Deals', href: '/bathroom', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-white nav">
      {({ open }) => (
        <>
          <div className="md:mx-auto mx-0 md:px-2 px-0 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700" style={{ background: "transparent" }}>
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <Image src='/icons/Menu.svg' width={24} height={20} alt='img' />
                  ) : (
                    <Image src='/icons/Menu.svg' width={24} height={20} alt='img' />)}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start ms-14 md:ms-0 sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-start md:me-8">
                  <Image src="/logo.svg" alt='img' className='logo' width={68} height={68} />
                </div>
                <div className="hidden  md:block my-auto">
                  <div className="flex space-x-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'active' : '',
                          'lg:px-3 px-0 py-2 text-sm font-semibold uppercase'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Search />
                <button
                  type="button"
                  className="rounded"
                >
                  Book a meeting
                </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? '' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar