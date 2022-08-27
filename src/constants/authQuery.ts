export const GET_USER_DETAILS_QUERY = `
query getUserDetails {
  getUserDetails {
    email
    phone
    firstName
    lastName
    photo
    isActive,
    hasPassword
  }
}`;

export const USER_LOGOUT_MUTATION = 'mutation logout { logout }';
