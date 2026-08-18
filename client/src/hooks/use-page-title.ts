import { useEffect } from "react";

const BASE = "Rezwan Islam — Product";

/** Sets the browser tab title for the current page. */
export function usePageTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} — Rezwan Islam` : BASE;
  }, [page]);
}
