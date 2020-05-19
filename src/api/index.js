import axios from "axios";

/* 1. 목적 : 로그인을 하지 않아도 접근 가능한 정보를 요청하는 경우에 사용하기 위한 목적
   2. 설명 : header 에 token 을 담지 않는다.
   3. 참고 : "get" 의 경우에는 data 를 " " 처럼 공백으로 보내고. url 에 해당 params 를 담아서 요청하면 된다. */
export async function generalReq(method, url, data) {
  // 개발 환경인지 프로덕션 환경인지 구분
  const DOMAIN = 
    process.env.NODE_ENV === "development"
  ? "http://localhost:3000"
  : "http://52.78.180.164:3000";
  
  axios.defaults.baseURL = DOMAIN;
  try {
    const res = await axios({
      method,
      url,
      data
    });
    return res;
  } catch (err) {
    return err;
  }
}