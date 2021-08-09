fetch("/api/contact/create", {
  method: "POST",
  body: JSON.stringify({
    name: "erickpatrick",
    website: "test",
    email: "xxx",
    message: "messsageeee",
  }),
  headers: {
    "Content-Type": "application/json",
  },
}).then((res) => {
  if (res.ok) {
    res.json();
  } else {
    console.log(res);
    Promise.reject(res);
  }
});
