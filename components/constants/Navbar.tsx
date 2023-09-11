'use client'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import Search from './Search'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Kitchen', href: '/kitchen', current: false },
  { name: 'Bathroom', href: '/bathroom', current: false },
  { name: 'Lighting', href: '/lighting', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

function classNames(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl md:px-2 px-0 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700" style={{ background: "transparent" }}>
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Image src='/icons/Menu.svg' width={24} height={20} alt='img' />)}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start ms-14 md:ms-0 sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-start md:me-8">
                  <Image src="/logo.svg" alt='img' className='logo' width={68} height={68} />
                </div>
                <div className="hidden sm:ml-6 sm:block my-auto">
                  <div className="flex space-x-8">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'active' : '',
                          'px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="my-auto">
                <Search />
              </div>
              <div className="my-auto text-sm font-medium">
                Search              
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="hidden md:flex rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Book a meeting
                </button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
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
