const server = require("./server.js");

const PORT = process.env.PORT || 6000;

server.listen(PORT, () => {
  console.log(`Reporting for duty on port ${PORT}!!`);
});
