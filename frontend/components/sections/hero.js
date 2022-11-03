import Markdown from "react-markdown"
import { getButtonAppearance } from "../../utils/button"
import ButtonLink from "../elements/button-link"
import NextImage from "../elements/image"
import Container from '../elements/container';

const Hero = ({ data }) => {
    return (
        <Container className="flex flex-wrap ">
            <div className="flex items-center w-full lg:w-1/2">
                <div className="max-w-2xl mb-8">
                    <p className="uppercase tracking-wide font-semibold">{data.label}</p>
                    <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                        {data.title}
                    </h1>
                    <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                        {data.description}
                    </p>

                    <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                        {data.buttons.map((button) => (
                            <ButtonLink
                                button={button}
                                appearance={getButtonAppearance(button.type, "light")}
                                key={button.id}
                            />
                        ))}
                    </div>

                    {/* Small rich text */}
                    <div className="text-base md:text-sm mt-4 sm:mt-3 rich-text-hero">
                        <Markdown>{data.smallTextWithLink}</Markdown>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <div className="">
                    <NextImage media={data.picture} />
                </div>
            </div>
        </Container>
    )
}

export default Hero
