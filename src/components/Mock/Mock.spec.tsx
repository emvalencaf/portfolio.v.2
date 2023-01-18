import { screen } from "@testing-library/react";

// component
import Mock from "."

// custom render
import { renderTheme } from "../../styles/render-theme"

describe("<Mock />", () => {

  it("should render mock component with default props", () => {
    renderTheme(<Mock />)
    expect(screen.getByRole('heading')).toBeInTheDocument();
  })

})
