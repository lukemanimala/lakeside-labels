const prerender = false;
const POST = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, quantity, details, vertical, source } = data;
    if (!name || !email) {
      return new Response(JSON.stringify({ error: "Name and email are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${undefined                                }/${undefined                                 }`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${undefined                            }`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fields: {
            "Name": name,
            "Email": email,
            "Phone": phone || "",
            "Quantity": quantity || "",
            "Details": details || "",
            "Vertical": vertical || "general",
            "Source": source || "/",
            "Status": "New"
          }
        })
      }
    );
    if (!airtableResponse.ok) {
      const error = await airtableResponse.json();
      console.error("Airtable error:", error);
      return new Response(JSON.stringify({ error: "Failed to submit" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    const result = await airtableResponse.json();
    return new Response(JSON.stringify({ success: true, id: result.id }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Server error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
