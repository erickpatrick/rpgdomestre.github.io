export default function fetcher(action, { name, email, website, message }) {
  fetch(action, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      website: website,
      email: email,
      message: message,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        res.json();
      } else {
        Promise.reject(res).catch(() => false);
      }
    })
    .catch((data) => console.log(data));
}
