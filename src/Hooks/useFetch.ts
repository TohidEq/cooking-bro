import { useEffect, useState, useRef } from "react";

export const useFetch = (url: string, _options: any) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // use useRef to wrap an object/array argument
  // which is a useEffect dependency
  const options = useRef(_options).current;

  useEffect(() => {
    const controller = new AbortController();
    console.log(options);
    const fetchData = async () => {
      setIsPending(true);
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setError(null);
        setData(json);
        setIsPending(false);
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted! useFetch.js");
        } else {
          setError(err.message);
          setIsPending(false);
          console.log(err.message);
        }
      }
    };
    fetchData();

    return () => {
      controller.abort();
    };
  }, [url, options]);

  return { data, isPending, error };
};
