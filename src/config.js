import dotenv from "dotenv";
import assert from "assert";

dotenv.config();

const {
  PORT,
  HOST,
  HOST_URL,
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} = process.env;

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

export default {
  port: PORT,
  host: HOST,
  hostUrl: HOST_URL,
  firebaseConfig: {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
  },
};
