import React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/client"
import { GET_USER_BEDS } from "queries"
import { Link } from "react-router-dom"
import { useCurrentUser } from "hooks"

const BedListWrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  background: pink;
  margin: 0 auto;
`

export function UserBedList() {
  const loggedInUser = useCurrentUser()
  console.log(loggedInUser);
  const { data, loading, error } = useQuery(GET_USER_BEDS, {
    variables: { id: parseInt(loggedInUser?.user?.id, 10) },
  });
  if (loading) return <p>Loading...</p>
  if (error) {
    return <p>{error.message}</p>
  }

  const beds = data?.beds

  function getBedElements(beds) {
    return beds.map((bed, index) => {
      const bedSize = bed.length * bed.width;
      const bedText =
        bedSize !== 1
          ? bedSize + " plots"
          : bedSize + " plot"
      const isActive = bed.isActive ? "Active" : "Inactive"

      return (
        <React.Fragment key={index}>
          <Link
            to={{
              pathname: "/bed",
              hash: bed.id,
              state: { bedId: bed.id, bedName: bed.name },
            }}
          >
            {bed.name}
          </Link>
          <div>{bedText}</div>
          <div>{isActive}</div>
        </React.Fragment>
      )
    })
  }

  const bedsUI = beds ? getBedElements(beds) : null
  return <BedListWrapper>{bedsUI}</BedListWrapper>
}
