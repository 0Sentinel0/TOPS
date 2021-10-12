import { render } from "@testing-library/react"

import Home from "./home"

it('checkButtonClick', () => {
  const { queryByTitle } = render(<Home />)
  const homePage = queryByTitle('homePage')
  expect(homePage).toBeTruthy()
})