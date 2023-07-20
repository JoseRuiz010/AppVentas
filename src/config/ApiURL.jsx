export const API = {

  AUTH: {
    LOGIN: "auth/login",
    AUTH: "auth/logout"
  },
  PRODUCTS: {
    GET_ALL: "products/",
    GET: (id) => "products/" + id,
    SAVE: (id) => "products/" + id,
    DEL: (id) => "products/" + id,
    UPDATE: (id) => "products/" + id,
  },
  CLIENTS: {
    GET_ALL: "client/",
    GET: (id) => "client/" + id,
    SAVE: (id) => "client/" + id,
    DEL: (id) => "client/" + id,
    UPDATE: (id) => "client/" + id,
  },
  CUENTAS: {
    GET_ALL: "cuenta/",
    GET: (id) => "cuenta/" + id,
    SAVE: (id) => "cuenta/" + id,
    DEL: (id) => "cuenta/" + id,
    UPDATE: (id) => "cuenta/" + id,
    GET_By_CLIENT: (id) => "/cuenta/client/" + id
  }

}

export const URL_SERVER = "http://localhost:8090/"