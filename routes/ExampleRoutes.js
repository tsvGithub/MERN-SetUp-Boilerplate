const exampleRouter = require("express").Router();

const Example = require("../models/Something.model");

//CRUD
//localhost:5000/examplesRoutes and then at the end:
//READ: => '/'
//// exampleRouter.route("/").get((req, res) => {
// exampleRouter.get("/", (req, res) => {
//   Example.find()
//     .then((examples) => res.status(200).json({ examples }))
//     // .catch((err) => res.status(400).json(`Error ${err}`))
//     .catch((err) =>
//       res.status(500).json({
//         message: {
//           msgBody: "Unable to get examples",
//           msgError: true,
//         },
//       })
//     );
// });
exampleRouter.get("/", async (req, res) => {
  try {
    const examples = await Example.find();
    res.status(200).json({ examples });
  } catch {
    res.status(500).json({
      message: {
        msgBody: "Unable to get examples",
        msgError: true,
      },
    });
  }
});

module.exports = exampleRouter;
