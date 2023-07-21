export const API = {

  AUTH: {
    LOGIN: "auth/login",
    AUTH: "auth/logout"
  },
  PRODUCTS: {
    GET_ALL: "products/",
    GET: (id) => "products/" + id,
    SAVE: "products/",
    DEL: (id) => "products/" + id,
    UPDATE: (id) => "products/" + id,
  },
  CLIENTS: {
    GET_ALL: "client/",
    GET: (id) => "client/" + id,
    SAVE: "client/",
    DEL: (id) => "client/" + id,
    UPDATE: (id) => "client/" + id,
  },
  CUENTAS: {
    GET_ALL: "cuenta/",
    GET: (id) => "cuenta/" + id,
    SAVE: "cuenta/",
    DEL: (id) => "cuenta/" + id,
    UPDATE: (id) => "cuenta/" + id,
    GET_By_CLIENT: (id) => "/cuenta/client/" + id
  },
  MARCAS: {
    GET_ALL: "brands/",
    GET: (id) => "brands/" + id,
    SAVE: "brands/",
    DEL: (id) => "brands/" + id,
    UPDATE: (id) => "brands/" + id,
  },

}

export const URL_SERVER = "http://localhost:8090/"