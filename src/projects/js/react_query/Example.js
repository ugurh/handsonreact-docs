import axios from "axios";
import { ReactQueryDevtools } from "react-query/devtools";
import { useQuery } from "react-query";

const Example = () => {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    axios
      .get("https://api.github.com/repos/tannerlinsley/react-query")
      .then((res) => res.data)
  );

  if (isLoading) return <>"Loading...";</>;

  if (error) return <>"An error has occurred: " + error.message;</>;

  return (
    <>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
      <div>{isFetching ? "Updating..." : ""}</div>
      <ReactQueryDevtools initialIsOpen />
    </>
  );
};

export default Example;
