import { useState, useEffect } from "react";
import { API_BASE_URL } from "../constants";
import { useLatestAPI } from "./useLatestAPI";

export function useFeaturedFetch() {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [featuredFetch, setFeaturedFetch] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getFeaturedFetch() {
      try {
        setFeaturedFetch({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=%5B%5Bat(document.type%2C%20%22product%22)%5D%5D&q=%5B%5Bat(document.tags%2C%20%5B%22Featured%22%5D)%5D%5D&lang=en-us&pageSize=16`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setFeaturedFetch({ data, isLoading: false });
      } catch (err) {
        setFeaturedFetch({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getFeaturedFetch();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading]);

  return featuredFetch;
}
