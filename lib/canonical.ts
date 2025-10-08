import { BASE_URL } from "./jsonld";

export const normalizeCanonicalPath = (canonicalPath: string) => {
  if (!canonicalPath.startsWith("/")) {
    canonicalPath = `/${canonicalPath}`;
  }
  if (canonicalPath.length > 1 && canonicalPath.endsWith("/")) {
    canonicalPath = canonicalPath.slice(0, -1);
  }
  return canonicalPath;
};

export const createCanonicalUrl = (canonicalPath: string) =>
  `${BASE_URL}${normalizeCanonicalPath(canonicalPath)}`;
