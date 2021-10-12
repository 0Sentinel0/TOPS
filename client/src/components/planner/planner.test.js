import { render } from "@testing-library/react"

import Planner from "./planner"

it('checkRender', ()=> {
  const { queryByTitle } = render(<Planner />)
  const planner = queryByTitle('planner')
  expect(planner).toBeTruthy()
})