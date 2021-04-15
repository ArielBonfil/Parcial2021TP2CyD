const userRoutes = require("./users");

const appRouter = (app, fs) => {
  app.get("/", (req, res) => {
    res.send("ARIEL BONFIL");
  });

  userRoutes(app, fs);
};

module.exports = appRouter;
