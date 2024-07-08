// Filename: mongo-init.js.sample
db = db.getSiblingDB("hackathon-team-former");
db.createUser({
  user: "hack_admin", // Add username here
  pwd: "hack_admin_password", // Add password here
  roles: [{ role: "readWrite", db: "hackathon-team-former" }],
});
db.createCollection("users");
