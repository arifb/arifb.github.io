// Dependency on the axios library
//ie. <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>;

const subdomain = "medford";
const response = postDonationToHyc();
console.log(response);

//Access-Control-Allow-Origin: http://

async function postDonationToHyc() {
  const response = await axios({
    method: "post",
    url: "https://hyc.devbox:3000/api/v1/donations",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      firstName: "Fred",
      lastName: "Flintstone",
      subdomain,
    },
  });
  return response;
}
