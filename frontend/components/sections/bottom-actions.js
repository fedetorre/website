import ButtonLink from "../elements/button-link"
import { getButtonAppearance } from "../../utils/button"

const BottomActions = ({ data }) => {
  return (
    <section className="bg-primary-800 py-20 text-center">
      <h2 className="title text-3xl text-white mb-10">{data.title}</h2>
      {/* Buttons row */}
      <div className="flex flex-row justify-center flex-wrap gap-4">
        {data.buttons.map((button) => (
          <ButtonLink
            button={button}
            appearance={getButtonAppearance(button.type, "dark")}
            key={button.id}
          />
        ))}
      </div>
    </section>
  )
}

export default BottomActions
