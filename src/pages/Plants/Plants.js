import React from "react"
import styled from "styled-components"
import { useCurrentUser } from "hooks"
import { useQuery } from "@apollo/client"
import { GET_VARIETIES } from "queries"
import ListWrapper from "components/composite/ListWrapper/ListWrapper"

export function Plants() {
  const loggedInUser = useCurrentUser()

  const { data, loading, error } = useQuery(GET_VARIETIES)
  if (loading) return <p>Loading...</p>
  if (error) {
    return <p>{error.message}</p>
  }

  const varieties = data?.varieties

  function getVarietyElements(varieties) {
    return varieties.map((variety, index) => {
      const varietyText = "Plant: " + variety.variety

      return (
        <React.Fragment key={index}>
          <span>{varietyText}</span>
        </React.Fragment>
      )
    })
  }

  const varietiesUI = varieties? getVarietyElements(varieties) : null
  return <ListWrapper>{varietiesUI}</ListWrapper>
}