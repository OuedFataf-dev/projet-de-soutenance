// auth.js
export function isAdmin() {
  const user = JSON.parse(localStorage.getItem('user'))
  return user?.role === 'admin'
}

export function isAuthenticated() {
  return !!localStorage.getItem('user')
}
