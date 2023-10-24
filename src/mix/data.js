import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { ref } from "vue";
import convert from "crypto-convert";

export default function useComp1(initialParam = "Composable data") {
  const err = ref({
    msg: "",
    val: false,
  });

  const changeErr = (
    msg = "Hmm... Something went wrong, please check your network connection and try again!",
    val = false
  ) => {
    err.value.msg = msg;
    err.value.val = val;
  };

  const Url = "https://vesta-backend.onrender.com/";

  async function unSecFetcher(speUrl, config = {}) {
    config["headers"] = {
      "Content-Type": "application/json",
    };
    const res = await fetch(`${Url}${speUrl}`, config);
    const data = await res.json();

    return { res, data };
  }

  async function secFetcher(speUrl, config) {
    const res = await fetch(`${Url}${speUrl}`, config);
    const data = await res.json();

    return { res, data };
  }

  const refFunc = async (ref) => {
    let response = await fetch(`${Url}auth/refresh`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${ref}`,
      },
    });
    let data = await response.json();
    localStorage.setItem("VestaAdminAccessToken", data.access_token);
    return data.access_token;
  };

  const customFetcher = async (speUrl, config = {}) => {
    let acc = localStorage.getItem("VestaAdminAccessToken")
      ? localStorage.getItem("VestaAdminAccessToken")
      : null;

    const user = jwt_decode(acc);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (isExpired) {
      acc = await refFunc(localStorage.getItem("VestaAdminRefreshToken"));
    }

    config["headers"] = {
      Authorization: `Bearer ${localStorage.getItem("VestaAdminAccessToken")}`,
      "Content-Type": "application/json",
    };

    let { res, data } = await secFetcher(speUrl, config);
    return { res, data };
  };

  const dolBit = async (amount) => {
    const value = new convert.from("USD").to("BTC").amount(amount);

    return value;
  };

  return { unSecFetcher, customFetcher, err, changeErr, dolBit };
}
