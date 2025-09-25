const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// --- Test Route ---
app.get("/", (req, res) => {
  res.send("✅ NFT Certificate API is running!");
});

// --- Mint Route (stub) ---
app.post("/mint", (req, res) => {
  const { wallet, name, company, system, expiry } = req.body;

  // For now, just log the request instead of minting
  console.log("Mint request received:", {
    wallet,
    name,
    company,
    system,
    expiry,
  });

  res.json({
    success: true,
    message: `NFT certificate will be minted for ${wallet}`,
  });
});

// --- Start Server ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
