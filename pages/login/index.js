import React from "react";
import { useEffect } from "react";

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query MyQuery {
        dmca {
          dmca_UserConnection {
            edges {
              node {
                id
                name
                password
                email
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      MyQuery: data.dmca.dmca_UserConnection.edges,
    },
  };
}

export default function index({ MyQuery }) {
  useEffect(() => {
    // fetchData();
    console.log("đây là giá trị của id: " + MyQuery);
    // setData(jsonData.data1);
  }, []);

  //   const fetchData = async () => {
  //     const response = await fetch("https://henull-hasura.fly.dev/v1/graphql"); //fetch dữ liệu từ api cho trước
  //     const jsonData = await response.json(); //lưu result vào prop jsonData

  //     //setData(jsonData); //set giá trị vào state
  //     console.log(jsonData);
  //   };

  return (
    <div>
      <h1>hello world</h1>
    </div>
  );
}
