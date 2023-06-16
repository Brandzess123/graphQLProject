import { useState, useEffect } from "react";
// import fetch from "isomorphic-fetch";

const IndexPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://henull-hasura.fly.dev/v1/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-hasura-admin-secret": "xGJQiV6iXy5QjhXS8sdX877xqtcA2hrWtMxDaQBh",
        },
        body: JSON.stringify({
          query: `
          query MyQuery {
            dmca {
                dmca_User {
                    email
                    id
                    name
                  }
            }
          }
          `,
        }),
      });
      const result = await response.json();
      console.log(result.data.dmca.dmca_User);
      setData(result.data.dmca.dmca_User);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Data from Hasura</h1>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h2>{item.email}</h2>
        </div>
      ))}
    </div>
  );
};

export default IndexPage;
