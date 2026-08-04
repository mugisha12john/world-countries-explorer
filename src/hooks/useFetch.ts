import axios from "axios";
import { useEffect, useState } from "react";

interface UseFetchProps {
  url: string;
}

const useFetch = <T = unknown>({ url }: UseFetchProps) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get<T>(url);
        setData(response.data);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);
  return { data, loading, error };
};

export default useFetch;
