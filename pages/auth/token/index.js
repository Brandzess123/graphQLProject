import { useRouter } from "next/router";
import { useEffect } from "react";
import { useParams } from "next/navigation";
// export const getServerSideProps = async () => {

//   //lấy giá trị =============================================================================
//   const Url =
//     "https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal";

//   // Gửi yêu cầu POST để trao đổi mã truy cập và lấy Access Token từ Lark
//   const res = await fetch(Url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//     },
//     body: JSON.stringify({
//       app_id: "cli_a4fdd9be3ff8d010",
//       app_secret: "rclXET1FQa8sja3tTyQEgcbBgCG3AsIu",
//     }),
//   });

//   const repo = await res.json();

//   // const code = query.code;
//   //   if (code) {
//   //=============================== lấy tenant access token =================================
//   const Urli = "https://open.larksuite.com/open-apis/authen/v1/access_token";
//   // "https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal";

//   // Gửi yêu cầu POST để trao đổi mã truy cập và lấy Access Token từ Lark
//   const resp = await fetch(Urli, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json; charset=utf-8",
//       Authorization: `${repo.tenant_access_token}`,
//     },
//     body: JSON.stringify({
//       grant_type: "authorization_code",
//       code: `${code},`,
//     }),
//   });

//   const result = await resp.json();
//   console.log(result);

//   return { props: { x } };
// };

function AuthPage() {
  const router = useRouter();
  useEffect(() => {
    const currentUrl = router.asPath;
    const code = currentUrl.split("code=")[1].split("&")[0];

    console.log("hello world");
    console.log(currentUrl);
    console.log(code);
    fetchData(code);

    // async function handleAuthentication() {
    //   // Lấy mã truy cập (code) từ query parameters
    //   const code = router.query.code;

    //   //   if (code) {
    //   try {
    //     //=============================== lấy tenant access token =================================
    //     const Url =
    //       "https://open.larksuite.com/open-apis/authen/v1/access_token";
    //     // "https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal";

    //     // Gửi yêu cầu POST để trao đổi mã truy cập và lấy Access Token từ Lark
    //     const res = await fetch(Url, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json; charset=utf-8",
    //         Authorization: `${repo.tenant_access_token}`,
    //       },
    //       body: JSON.stringify({
    //         grant_type: "authorization_code",
    //         code: `${code},`,
    //       }),
    //     });

    //     const result = await res.json();
    //     console.log(result);

    //     //================================================================================

    //     //   const apiUrl =
    //     //     "https://open.larksuite.com/open-apis/authen/v1/access_token";

    //     //   // Gửi yêu cầu POST để trao đổi mã truy cập và lấy Access Token từ Lark
    //     //   const response = await fetch(apiUrl, {
    //     //     method: "POST",
    //     //     headers: {
    //     //       Authorization: `${result.tenant_access_token}`,
    //     //       "Content-Type": "application/json",
    //     //     },
    //     //     body: JSON.stringify({
    //     //       app_id: "cli_a4fdd9be3ff8d010",
    //     //       app_secret: "rclXET1FQa8sja3tTyQEgcbBgCG3AsIu",
    //     //       code,
    //     //     }),
    //     //   });

    //     //   const data = await response.json();
    //     //   console.log(data); // Hiển thị Access Token và thông tin khác từ Lark
    //   } catch (error) {
    //     console.error(error);
    //   }
    //   //   } else {
    //   //     // Người dùng chưa được xác thực, chuyển hướng đến trang xác thực Lark
    //   //     // const redirectUrl = "http://localhost:3000/auth/token"; // Đường dẫn đến trang "/auth/token" trong ứng dụng của bạn
    //   //     // const authUrl = `https://open.larksuite.com/open-apis/authen/v1/index?app_id=cli_a4fdd9be3ff8d010&redirect_uri=${encodeURIComponent(
    //   //     //   redirectUrl
    //   //     // )}`;
    //   //     // window.location.href = authUrl;
    //   //   }
    // }

    // handleAuthentication();
  }, []);

  const fetchData = async (code) => {
    try {
      const response = await fetch("/api/handleLarkLogin", {
        method: "POST",
        body: JSON.stringify({
          code: code,
        }),
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return <div>Authenticating...</div>;
}

export default AuthPage;
