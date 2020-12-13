const domain = "https://cfd-reactjs.herokuapp.com/";
const headers = {
  "Content-Type": "application/json",
};
let user = {};
try {
  user = JSON.parse(localStorage.getItem("user"));
  headers.Authorization = `Bearer ${user.accessToken}`;
} catch {}

const cacheTokenExpired = async (res, head) => {
  if (res.status === 403) {
    res = await res.json();
    if (res.error_code === "TOKEN_EXPIRED") {
      let res2 = await fetch(domain + "api/refresh-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refreshToken: user.refreshToken,
        }),
      });
      if (res2.status === 200) {
        res2 = await res2.json();
        if (res2.accessToken) {
          try {
            let user = JSON.parse(localStorage.getItem("user"));
            user.accessToken = res2.accessToken;
            localStorage.setItem("user", JSON.stringify(user));
            headers.Authorization = `Bearer ${user.accessToken}`;
            return fetch(...head).then((res) => res.json());
          } catch {}
        }
      }
    }
  } else {
    return res.json();
  }
};
const Api = (url) => {
  return {
    get: () => {
      let head = [ domain + url,{headers}];
      return fetch(...head).then((res) => cacheTokenExpired(res, head));
    },
    post: (data) => {
      let head = [domain + url,{headers,method:'POST'}];
      return fetch(...head).then((res) => cacheTokenExpired(res, head));
    },
    put: (data) => {
        let head = [domain + url,{headers,method:'PUT'}];
      return fetch(...head).then((res) => cacheTokenExpired(res, head));
    },
    delete: () => {
        let head = [domain + url,{headers,method:'DELETE'}];
      return fetch(...head).then((res) => cacheTokenExpired(res, head));
    },
  };
};

export default Api;
