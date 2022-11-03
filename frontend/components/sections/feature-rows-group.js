import classNames from "classnames"
import NextImage from "../elements/image"
import Video from "../elements/video"
import CustomLink from "../elements/custom-link"
import Container from '../elements/container';
import {getButtonAppearance} from '../../utils/button';
import ButtonLink from '../elements/button-link';

const FeatureRowsGroup = ({ data }) => {
  return (
    <>
        {data.features.map((feature, index) => (
            <Container key={feature.id} className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
              <div
                  className={`flex items-center justify-center w-full lg:w-1/2 ${
                      index % 2 === 0 ? "lg:order-1" : ""
                  }`}>
                <div>
                  {/* Images */}
                  {feature.media.data.attributes.mime.startsWith("image") && (
                      <div className="w-full h-auto">
                        <NextImage media={feature.media} />
                      </div>
                  )}
                  {/* Videos */}
                  {feature.media.data.attributes.mime.startsWith("video") && (
                      <Video
                          media={feature.media}
                          className="w-full h-auto"
                          autoPlay
                          controls={false}
                      />
                  )}
                </div>
              </div>

              <div
                  className={`flex flex-wrap items-center w-full lg:w-1/2 ${
                      index % 2 === 0 ? "lg:justify-end" : ""
                  }`}>
                <div>
                  <div className="flex flex-col w-full mt-4">
                    <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                      {feature.title}
                    </h3>

                    <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>

                  <ButtonLink
                      button={feature.link}
                      appearance={getButtonAppearance('primary', "light")}
                      key={feature.link.id}
                  />
                </div>
              </div>
            </Container>
        ))}
      </>
  )
}

export default FeatureRowsGroup
