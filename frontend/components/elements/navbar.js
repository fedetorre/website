import {useState} from "react"
import PropTypes from "prop-types"
import Link from "next/link"
import {useRouter} from "next/router"
import {buttonLinkPropTypes, linkPropTypes, mediaPropTypes} from "../../utils/types"
import NextImage from "./image"
import CustomLink from "./custom-link"
import LocaleSwitch from "../locale-switch"
import {Disclosure} from "@headlessui/react";
import ThemeChanger from './theme-changer';

const Navbar = ({ navbar, pageContext }) => {
  const router = useRouter()

  return (<div className="w-full">
        <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
          {/* Logo  */}
          <Disclosure>
            {({ open }) => (
                <>
                  <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                    <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-primary-500 dark:text-gray-100">
                      <span>
                        <NextImage width="120" height="33" media={navbar.logo} />
                      </span>
                        <span>Nextly</span>
                    </Link>

                    <Disclosure.Button
                        aria-label="Toggle Menu"
                        className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-primary-500 focus:text-primary-500 focus:bg-primary-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                      <svg
                          className="w-6 h-6 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24">
                        {open && (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                            />
                        )}
                        {!open && (
                            <path
                                fillRule="evenodd"
                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                            />
                        )}
                      </svg>
                    </Disclosure.Button>

                    <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                      <>
                        {navbar.links.map((navLink) => (
                            <CustomLink key={navLink.id} link={navLink} locale={router.locale} className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-primary-500 focus:text-primary-500 focus:bg-primary-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700">
                              <div className="hover:text-gray-900 px-2 py-1">
                                {navLink.text}
                              </div>
                            </CustomLink>
                        ))}
                        <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-primary-600 rounded-md lg:ml-5">
                          Get Started
                        </Link>
                      </>
                    </Disclosure.Panel>
                  </div>
                </>
            )}
          </Disclosure>

          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {navbar.links.map((navLink) => (
                  <li key={navLink.id} className="mr-3 nav__item">
                    <CustomLink link={navLink} locale={router.locale} className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-primary-500 focus:text-primary-500 focus:bg-primary-100 focus:outline-none dark:focus:bg-gray-800">
                      <div className="hover:text-gray-900 px-2 py-1">
                        {navLink.text}
                      </div>
                    </CustomLink>
                  </li>
              ))}
            </ul>
          </div>

          <div className="hidden mr-3 space-x-4 lg:flex nav__item">
            <Link href="/" className="px-6 py-2 text-white bg-primary-600 rounded-md md:ml-5">
              Get Started
            </Link>

            {/* Locale Switch Mobile */}
            {pageContext.localizedPaths && (
                <div>
                  <LocaleSwitch pageContext={pageContext} />
                </div>
            )}

            <ThemeChanger />
          </div>
        </nav>
      </div>
  );
}

Navbar.propTypes = {
  navbar: PropTypes.shape({
    logo: PropTypes.shape({
      image: mediaPropTypes,
      url: PropTypes.string,
    }),
    links: PropTypes.arrayOf(linkPropTypes),
    button: buttonLinkPropTypes,
  }),
  initialLocale: PropTypes.string,
}

export default Navbar
