const users = [
  {
    email: "imkawsar007@gmail.com",
    password: "12345678"
  },
  {
     email: "admin@gmail.com",
    password: "12345678"
  }
]

export const getUserByEmail = (email) => {
  return users.find(user => user.email === email)
}