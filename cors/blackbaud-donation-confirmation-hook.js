// Dependency on the axios library
//ie. <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>;

const subdomain = "medford";
const response = postDonationToHyc();
console.log(response);

async function postDonationToHyc() {
  const response = await axios({
    method: "post",
    url: "https://c9ed-173-181-14-191.ngrok.io/api/v1/donations",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    data: {
      donation: {
        first_name: "Fred",
        last_name: "Flintstone",
        subdomain,
      },
    },
  });
  return response;
}
