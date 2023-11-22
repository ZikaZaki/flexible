export const getUserQuery = `
  query GetUser($email: String!) {
    user(by: { email: $email }) {
      id
      name
      email
      avatarUrl
      description
      githubUrl
      linkedInUrl
    }
  }
`

export const createUserMutation = `
  mutation CreateUser($Input: UserCreateInput!) {
    userCreate(input: $Input) {
      user {
        name
        email
        avatarUrl
        description
        githubUrl
        linkedInUrl
        id
      }
    }
  }
`
