import { type } from "os";
import { useEffect, useState } from "react";
type data =
  | {
      id: number;
      title: string;
      ingredients: string[];
      method: string;
      cookingTime: string;
    }[]
  | null;

export const useFetch = (
  url: string
): { data: data | any; error: string | null; isPending: boolean } => {
  const [data, setData] = useState<data>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // use useRef to wrap an object/array argument
  // which is a useEffect dependency
  //const options = useRef(_options).current;
  // {=> (url, _options )(3) and [url, options](-4)}

  useEffect(() => {
    const controller = new AbortController();

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
  }, [url]);

  return { data, isPending, error };
};
