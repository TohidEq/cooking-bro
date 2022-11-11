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
  url: string,
  method: string = "GET"
): {
  data: data | any;
  error: string | null;
  isPending: boolean;
  postData: any;
} => {
  const [data, setData] = useState<data>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const [options, setOptions] = useState<
    | { method: string; headers: { "Content-Type": string }; body: string }
    | undefined
  >();

  const postData = (postData: any) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
  };

  // use useRef to wrap an object/array argument
  // which is a useEffect dependency
  //const options = useRef(_options).current;
  // {=> (url, _options )(3) and [url, options](-4)}

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async (fetchOptions: any = null) => {
      setIsPending(true);
      try {
        const response = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        });
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

    if (method === "GET") {
      fetchData();
    }

    if (method === "POST" && options) {
      // jjj
      fetchData(options);
    }

    return () => {
      controller.abort();
    };
  }, [url, options, method]);

  return { data, isPending, error, postData };
};
