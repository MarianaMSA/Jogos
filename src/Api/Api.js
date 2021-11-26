const Api = {
  url: "https://nintendo-shop.herokuapp.com",
  fetchGetAll: () => fetch(`${Api.url}/game/findMany`),
  fetchGetById: (id) => fetch(`${Api.url}/game/find/${id}`),
  fetchGetWishList: () => fetch(`${Api.url}/game/myWishList`),
  fetchPostWish: (id) => fetch(`${Api.url}/game/wish/${id}`),
  fetchPostUser: (usuario) => {
    return fetch(`${Api.url}/user/register`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(usuario),
    });
  },
  fetchPostLogin: (usuario, auth) => {
    return fetch(`${Api.url}/${auth}/login`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(usuario),
    });
  },
};

export default Api;
