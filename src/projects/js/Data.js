import { useEffect, useState } from "react";

const Data = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const loadData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (page === 1) {
        setData([1, 2, 3, 4, 5]);
      } else if (page === 2) {
        setData([6, 7, 8, 9, 10]);
      } else {
        setData([]);
      }
    }, 3000);
  };

  const handleNext = () => {
    setPage((currentPage) => currentPage + 1);
  };

  useEffect(loadData, [page]);

  return (
    <>
      {loading && <p>Loading...</p>}
      <pre>{JSON.stringify(data, null, " ")}</pre>
      <span>Current Page: {page}</span>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Data;
