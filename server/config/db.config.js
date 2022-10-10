module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Ace@0984423462",
    DB: "social",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };