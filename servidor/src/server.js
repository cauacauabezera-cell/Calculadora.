const { server } = require("./http");
const dotenv = require("dotenv");

dotenv.config();

const host = process.env.HOST || "0.0.0.0";
const port = parseInt(process.env.PORT || "3000", 10);

server.listen(port, host, async () => {
  console.log(`Running on http://${host}:${port}`);
});
