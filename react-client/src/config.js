const CLIENT_ID = process.env.CLIENT_ID || "0oa8e6wmi2vOC0Tm25d7";
const ISSUER =
  process.env.ISSUER || "https://dev-80343507.okta.com/oauth2/default";
const OKTA_TESTING_DISABLEHTTPSCHECK =
  process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
const BASENAME = "/";
// BASENAME includes trailing slash
const REDIRECT_URI = `${BASENAME}login/callback`;

const config = {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ["openid", "profile", "email"],
    pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  resourceServer: {
    messagesUrl: "http://localhost:8080/messages",
  },
  app: {
    basename: BASENAME,
  },
};

export default config;
