import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Button } from "components"
import { useMutation } from "@apollo/client"
import { InputSection } from "components/composite"

const PlantDetailRow = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: auto;
`

const PlantEditRow = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: auto;
  background: gray;
`

const RowForm = styled.form`
  display: inherit
`

const PlantDetail = ({editMode = false, varietyDetails, updateVariety}) => {
  const [editable, setMode] = useState(editMode)
  const [basicType, setBasicType] = useState(varietyDetails.basicType)
  const [variety, setVariety] = useState(varietyDetails.variety)

  function submit(event) {
    event.preventDefault()
    updateVariety({
      variables: {
        input: {
          id: parseInt(varietyDetails.id),
          basicType,
          variety
        }
      }
    })
    console.log(basicType, variety)
    setMode(false)
  }
  const row = !editable 
    ? (
    <PlantDetailRow>
      <span>{varietyDetails.id}</span>
      <span>{varietyDetails.basicType}</span>
      <span>{varietyDetails.variety}</span>
      <Button onClick={() => setMode(true)} text="Edit"></Button>
    </PlantDetailRow>
    )
    : (
      <RowForm onSubmit={submit}>
        <PlantEditRow>
          <span>{varietyDetails.id}</span>
          <InputSection 
            name={"basicType"+varietyDetails.id}
            type="text" 
            value={basicType} 
            setValue={setBasicType}
          ></InputSection>
          <InputSection 
            name={"variety"+varietyDetails.id}
            type="text" 
            value={variety} 
            setValue={setVariety}
          ></InputSection>
          <Button onClick={() => setMode(false)} text="Cancel"></Button>
          <Button text="Save" type="submit"></Button>
        </PlantEditRow>
      </RowForm>
    )

	return (
		<React.Fragment>
			{row}
    </React.Fragment>
	)
}

PlantDetail.propTypes = {
  editMode: PropTypes.bool,
  varietyDetails: PropTypes.object,
  updateVariety: PropTypes.func
}

export { PlantDetail }