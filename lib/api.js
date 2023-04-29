export const sendContactForm = async (values) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(values),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Failed to send message");
    return res.json();
  });