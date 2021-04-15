const userRoutes = (app, fs) => {
  const dataPath = "../data/users.json";
  const readFile = (
    callback,
    returnJson = false,
    filePath = dataPath,
    encoding = "utf8"
  ) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        throw err;
      }

      callback(returnJson ? JSON.parse(data) : data);
    });
  };

  const writeFile = (
    fileData,
    callback,
    filePath = dataPath,
    encoding = "utf8"
  ) => {
    fs.writeFile(filePath, fileData, encoding, (err) => {
      if (err) {
        throw err;
      }

      callback();
    });
  };
  app.get("/users", (req, res) => {
    readFile((data) => {
      res.send(data);
    }, true);
  });
  app.post("/addUser", (req, res) => {
    readFile((data) => {
      const newUser = {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        address: {
          street: "Kattie Turnpike",
          suite: "Suite 198",
          city: "Lebsackbury",
          zipcode: "31428-2261",
          geo: {
            lat: "-38.2386",
            lng: "57.2232",
          },
        },
        phone: "024-648-3804",
        website: "ambrose.net",
        company: {
          name: "Hoeger LLC",
          catchPhrase: "Centralized empowering task-force",
          bs: "target end-to-end models",
        },
      };

      writeFile(JSON.stringify([...data, newUser]), () => {
        res.status(200).send("agregaste un nuevo usuario");
      });
    }, true);
  });
  app.get("/users/:id", (req, res) => {
    readFile((data) => {
      const userId = req.params["id"];
      const findUserById = (userId) => {
        const u = data.find((user) => user.id === userId);
        return u;
      };
      res.send(findUserById(userId));
    }, true);
  });
};

module.exports = userRoutes;
