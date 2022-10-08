const LIVE_URL = "https://www.melivecode.com/api"
export async function loginUser(credentials) {
    return fetch(`${LIVE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

   export async function createUser(credentials) {
    return fetch(`${LIVE_URL}/users/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }