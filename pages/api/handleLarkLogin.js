export default async function handler(req, res) {
  const code = await req.body;
  const codex = JSON.parse(code).code;
  //   const data = { x: JSON.parse(code).code };
  const Url =
    "https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal";
  // "https://open.feishu.cn/open-apis/auth/v3/app_access_token/internal";

  const rest = await fetch(Url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      app_id: "cli_a4032c222838d02f",
      app_secret: "8iMYe5iboxV66kht8IsApdFWm8Fseu7W",
    }),
  });

  const repo = await rest.json();
  //=============================== lấy tenant access token =================================
  const Urli = "https://open.larksuite.com/open-apis/authen/v1/access_token";
  const resp = await fetch(Urli, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `${repo.tenant_access_token}`,
    },
    body: JSON.stringify({
      grant_type: "authorization_code",
      code: `${codex}`,
      //   code: "12ck8078f5ce4b4ba4788b140fo2dfk5",
      app_id: "cli_a4032c222838d02f",
      app_secret: "8iMYe5iboxV66kht8IsApdFWm8Fseu7W",
    }),
  });

  const result = await resp.json();
  res.status(200).json(result);
}
