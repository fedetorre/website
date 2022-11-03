import PropTypes from "prop-types"
import { linkPropTypes, mediaPropTypes } from "utils/types"
import NextImage from "./image"
import CustomLink from "./custom-link"
import Container from './container';
import Link from 'next/link';

const Footer = ({ footer }) => {
    return (
        <div className="relative">
            <Container>
                <div className={`grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700`}>
                    <div className="lg:col-span-2">
                        <div>
                            {" "}
                            <Link href="/" className="flex items-center space-x-2 text-2xl font-medium text-primary-500 dark:text-gray-100">
                                {footer.logo && (
                                    <span><NextImage width="120" height="33" media={footer.logo} /></span>
                                )}
                                <span>Nextly</span>
                            </Link>
                        </div>

                        <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
                            Nextly is a free landing page & marketing website
                            template for startups and indie projects. Its built with
                            Next.js & TailwindCSS. And its completely open-source.
                        </div>
                    </div>
                </div>
                <div className={`grid max-w-screen-xl gap-10 pt-10 mx-auto mt-5 grid-cols-4`}>
                    {footer.columns.map((footerColumn) => (
                        <div key={footerColumn.id} className="lg:col-span-1">
                            <div
                                className="w-full -mt-2 -ml-3 lg:ml-0"
                            >
                                <p className="uppercase tracking-wide font-semibold">
                                    {footerColumn.title}
                                </p>
                                <ul className="mt-2">
                                    {footerColumn.links.map((link) => (
                                        <li
                                            key={link.id}
                                            className="text-gray-700 py-1 px-1 -mx-1 hover:text-gray-900"
                                        >
                                            <CustomLink link={link} className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-primary-500 focus:text-primary-500 focus:bg-primary-100 focus:outline-none dark:focus:bg-trueGray-700">{link.text}</CustomLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
                    {footer.smallText}
                </div>
            </Container>
        </div>
    );
}

Footer.propTypes = {
  footer: PropTypes.shape({
    logo: mediaPropTypes.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        title: PropTypes.string.isRequired,
        links: PropTypes.arrayOf(linkPropTypes),
      })
    ),
    smallText: PropTypes.string.isRequired,
  }),
}

export default Footer
