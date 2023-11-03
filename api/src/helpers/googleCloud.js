const CREDENTIALS = JSON.parse(
  JSON.stringify({
    type: "service_account",
    project_id: "classifier-403819",
    private_key_id: "4ed313ea7348404b7d0e67601f15692aea1ad33e",
    private_key:
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDikZoBFQxT2njY\nId4C9yKx1Ltzpyy2D+iulftR6QRqp7ghpXf+83/ubeNzlWG+Us0Mx4rJKjbD/tZ7\nRpPaldOc3d6RxWT6pNRu3A/sQFCq4fHj19+9fSj0PJR1ADlQsuuhCjzspN9pGwge\n1g5NvFZR05IeRlWabOQXWvu7vr7vXzuUhGUBWntFfoSck5V8TnDH0zFuPX+KEoxe\n/MiJuJWH/P8C8ZBnfLTZ+Hl64cGt8LlpXfr2Pdw59lUU1nYuYn9RnEC96fR0f+he\ngZK3xBis5WtKkqpLndmnvEqDe6sQxxiFyY7Us/dUeY8chFqfLvRq3jORpRfjwB0Q\naxiIqQ53AgMBAAECggEAV6s9azPIzF2aKw+Xx4/3VdZaHltOurgXMg8I6139/oMd\nha9wai+wjgLpYx0ncCy7+TjxI/v4qwhd19+scIVPF8DmUYOPGklThf4TDzinviel\noKM0iS73/OHAFDHc+7Pv5yV+A5ecdyAlmUD80emRgSIbxSk0EIgYDk1/YNtjKF33\n3oeCe3A1h+5dT5Gt03E1Fewzn3NcfkgVaCP54Ciw5Bli9Ve1fN+NxO+rlQN2Tlkg\nLuwohZPI7vgQgug/vM+QyCFDXErSJNufqP3tEzpiJ1qs9qf/mgR0MR3eT/tb4BeB\nyDmwOLCADVp9GdBuMjQzfR4tqvH/8yu7r7WcBW+l8QKBgQDyQv+oxloN+AWUSdHU\nkNfOPvdMw/vg3pcjHCeNlZi4RdqZ4HkYEW0e11/sSvv1ByqTDkn2oAUhXN/0yoSv\nBYeRNA8ILV1EmwSy103y7q/wWjxQZ/KpCYAEimmnmDs90uaaiknYB14ewopfaEMq\nbkUEaibxykvB5jW6fOw+5VsFuQKBgQDvashU3jDnVHq7tWfX3VR8+DwNktsvoMkd\npaERrwnWH45ZzPgQG/F/DJC7k7TyQePVfnpgSPlMNE7791Sg28GgQWikReewcslu\nJ7JbR2xvSyv5Tkn48Jal0tnipoH+0+fNXMUXvauvyZ+ILIgYfdqqtQ6SMctcQffJ\nUacXeDPNrwKBgG3ryGSj2yiLaLyn4fU44zJJj5vdMOQPGzRrCedMAUdbKpy3JTqu\nbXyY7IUiYMAEyGSBDz4/zRQeN9+yJBHlyGUx4cAsFS2TyMX8uvmHI31C9Crnf0sD\nbHqi8t2ATSD4GHn2VRsX/LSoQHCZtiACeH5QS+tZhpYsBiTfmbHQD0TBAoGAegxk\nfacbJQJS4tfSTR/eTyq4am7/36LGg5+IoZwqloZVqf+sQYINNSgxq/3bU1g1jgNA\n3U62D5vm29m0wZ/lcA2IC547Qx7xAn+oE5Iwe/fFPf0kBoyXL4dyXXFmeYKK+4yc\nSML+/8j305Jn+pxF2ZodCHfr5GcYqv89/9/eAK8CgYEAqh3YzKGMige5WebGuago\nWsE6aGueAGuQRE0ZXd+SVyzVmleA/MkG96XzWDJagnN+iHQk92MBbzCV0mkxs/HG\nzzyimB7Oovwgakv3FWkkQTQan6cYtAq7s/MjuRR1P9Tr0d2pqwQXpK2SaiXKnShE\nQ1IdrqDdoo05gO7XWzQP++w=\n-----END PRIVATE KEY-----\n",
    client_email: "test-216@classifier-403819.iam.gserviceaccount.com",
    client_id: "117914173439956189841",
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url:
      "https://www.googleapis.com/robot/v1/metadata/x509/test-216%40classifier-403819.iam.gserviceaccount.com",
    universe_domain: "googleapis.com",
  })
);

const CONFIG = {
  credentials: {
    private_key: CREDENTIALS.private_key,
    client_email: CREDENTIALS.client_email,
  },
};

module.exports = { CONFIG };
