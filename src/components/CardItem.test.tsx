import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../test-utils"
import CardItem from "./CardItem"
import db from '../../db.json';

test("renders Card Items", () => {
  render(<CardItem item={db['items'][0]} />)
  // const linkElement = screen.getByText(/learn chakra/i)
  // expect(linkElement).toBeInTheDocument()
})
