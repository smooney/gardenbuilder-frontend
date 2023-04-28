import React from "react"
import { useMutation, useQuery } from "@apollo/client"
import { GET_VARIETIES } from "queries"
import ListWrapper from "components/composite/ListWrapper/ListWrapper"
import { PlantDetail } from "pages/PlantDetail"
import { MODIFY_VARIETY_MUTATION } from "mutations"

export function Plants() {
  const { data, loading, error } = useQuery(GET_VARIETIES)
  
  const [updateVariety] = useMutation(MODIFY_VARIETY_MUTATION, {
    onError(err) {
      console.log(err)
    },
    onCompleted(data) {
      console.log("COMPLETED", data)
    }
  })
  
  if (loading) return <p>Loading...</p>
  if (error) {
    return <p>{error.message}</p>
  }

  const varieties = data?.varieties


  function getVarietyElements(varieties) {
    return varieties.map((variety, index) => {
      return (
        <React.Fragment key={index}>
          <PlantDetail 
            key={`PD-${index}`}
            varietyDetails={variety}
            updateVariety={updateVariety}></PlantDetail>
        </React.Fragment>
      )
    })
  }

  const varietiesUI = varieties? getVarietyElements(varieties) : null
  return (
    <>
      <h2>Plants</h2>
      <ListWrapper>{varietiesUI}</ListWrapper>
    </>
  )
}