import fetch from 'isomorphic-unfetch';

const credentials = `${process.env.TWITTER_API_KEY}:${process.env.TWITTER_API_SECRET}`;
const credentialsBase64Encoded = new Buffer(credentials).toString('base64');

async function getTwitterToken() {
  let res = await fetch("https://api.twitter.com/oauth2/token", {
    body: 'grant_type=client_credentials',
    headers: {
      "Authorization": `Basic ${credentialsBase64Encoded}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
  })
  let json = await res.json()
  return json.access_token
}

// pass in username no @ and get avatar
async function getTwitterAvatar(username) {
  let accessToken = await getTwitterToken()
  let res = await fetch(`https://api.twitter.com/1.1/users/show.json?screen_name=${username}`, {
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${accessToken}`
    }
  })
  let json = await res.json()
  console.log(json.profile_image_url_https);
}

void async function main() {
  await getTwitterAvatar("@barackobama")
}()

module.exports = { getTwitterAvatar }
