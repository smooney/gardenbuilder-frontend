import React from "react"
import { render, screen } from "@testing-library/react"
import { ApolloProvider } from "@apollo/client"
import { Bed } from "./Bed"
import client from "ApolloClient"

beforeEach(() => {
	window.location.hash = "#1"

	render(
		<ApolloProvider client={client} addTypename={false}>
			<Bed />
		</ApolloProvider>
	)
})

xit("renders title from location data", async () => {
	expect(await screen.findByText("1")).toBeInTheDocument()
})

it("renders the bedbuilder component", async () => {
	expect(await screen.findByTestId("bedbuilder")).toBeInTheDocument()
})