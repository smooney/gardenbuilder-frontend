import React from "react"
import styled from "styled-components"
import { UserBedList } from "./UserBedList"

const BedsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`

export const Beds = () => (
  <BedsWrapper>
    <h2>Beds</h2>
    <UserBedList />
  </BedsWrapper>
)
