// This is your test secret API key.
const stripe = require("stripe")(
  "sk_test_51PjqFPGUQ74IbSPHxaR9qrvpsjAYHazeHasHXxFoMDnKPIZrVW23M42ybPNU7kOBSMp03G2hQJz7Trltm293Idoy00Y6v2Qyic"
);
const express = require("express");
const app = express();
app.use(express.static("public"));

const YOUR_DOMAIN = "http://localhost:3000";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 444,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log("Running on port"));
