import React, { useEffect } from "react";

// export const getServerSideProps = async () => {
//   try {
//     const response = await fetch(
//       "https://open.larksuite.com/open-apis/authen/v1/index?app_id=cli_a4fdd9be3ff8d010&redirect_uri=http://localhost:3000/auth/token",
//       {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json; charset=utf-8",
//         },
//       }
//     );
//     const result = await res.json();
//     console.log(result);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
//   const xxx = 5;
//   return { props: { xxx } };
// };

export default function index() {
  useEffect(() => {
    //console.log(xxx);
    // fetchData();
    window.location.href =
      "https://open.larksuite.com/open-apis/authen/v1/index?app_id=cli_a4fdd9be3ff8d010&redirect_uri=http://localhost:3000/auth/token";
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://open.larksuite.com/open-apis/authen/v1/index?app_id=cli_a4fdd9be3ff8d010&redirect_uri=http://localhost:3000/auth/token",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json; charset=utf-8",
  //         },
  //       }
  //     );

  //     // const Url =
  //     //   "https://open.larksuite.com/open-apis/auth/v3/tenant_access_token/internal";

  //     // // Gửi yêu cầu POST để trao đổi mã truy cập và lấy Access Token từ Lark
  //     // const res = await fetch(Url, {
  //     //   method: "POST",
  //     //   headers: {
  //     //     "Content-Type": "application/json; charset=utf-8",
  //     //   },
  //     //   body: JSON.stringify({
  //     //     app_id: "cli_a4fdd9be3ff8d010",
  //     //     app_secret: "rclXET1FQa8sja3tTyQEgcbBgCG3AsIu",
  //     //   }),
  //     // });

  //     const result = await res.json();
  //     console.log(result);
  //     // await Router.push("http://localhost:3000/auth/token");
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  //   window.location.href = "http://localhost:3000/auth/token";
  // };

  return (
    <div>
      <h1>redirect ...</h1>
    </div>
  );
}
