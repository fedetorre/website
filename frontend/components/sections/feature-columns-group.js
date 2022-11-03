import NextImage from "../elements/image"
import Container from '../elements/container';

const FeatureColumnsGroup = ({ data }) => {
  return (
      <Container className="mt-10 mb-10">
        <dl className="space-y-10 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10 md:space-y-0">
          {data.features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white">
                    <NextImage media={feature.icon} />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.title}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
          ))}
        </dl>
      </Container>
  );
}

export default FeatureColumnsGroup
