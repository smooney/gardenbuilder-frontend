import { gql } from "@apollo/client"

export const GET_USER_GARDENS = gql`
  query GET_USER_GARDENS {
    gardens {
      id
      name
      beds {
        id
        name
        length
        width
        unitOfMeasurement
        isActive
      }
      endedAt
      isActive
      createdAt
      updatedAt
    }
  }
`

export const SINGLE_BED_QUERY = gql`
  query SINGLE_BED_QUERY($id: Int!) {
    bed(id: $id) {
      id
      name
      length
      width
      unitOfMeasurement
      isActive
    }
  }
`

export const GET_USER_BEDS = gql`
  query GET_USER_BEDS($id: Int!) {
    beds(gardenId: $id) {
      id
      name
      length
      width
      unitOfMeasurement
      isActive
    }
  }
`

export const GET_CURRENT_USER = gql`
  query GET_CURRENT_USER {
    currentUser {
      user {
        id
        email
      }
      errors {
        message
      }
    }
  }
`
export const GET_VARIETIES = gql`
  query GET_VARIETIES {
    varieties {
      id
      basicType
      variety
    }
  }
`
