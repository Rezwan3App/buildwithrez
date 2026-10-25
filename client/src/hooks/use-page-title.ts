import { useEffect } from "react";

const BASE = "Rezwan Islam | Product management, New York";

/** Sets the browser tab title for the current page. */
export function usePageTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} | Rezwan Islam` : BASE;
  }, [page]);
}
