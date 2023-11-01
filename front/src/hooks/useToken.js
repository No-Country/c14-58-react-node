export default function useToken(desiredToken, expiration) {
  if (desiredToken && expiration) {
    console.log("guardando")
    localStorage.setItem("token", JSON.stringify(desiredToken));
    localStorage.setItem("tokenExpiration", expiration);
  }

  let token = localStorage.getItem("token");
  const tokenExpiration = localStorage.getItem("tokenExpiration");
  let errors;

  if (new Date().getTime() > tokenExpiration) {
    // token expirado
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
    errors = true;
    token = null;
  }

  return { token, errors };
}
