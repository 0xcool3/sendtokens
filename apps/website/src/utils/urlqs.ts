import queryString from "query-string";

export const getQS = (key: string) => {
  if (typeof location != "undefined") {
    const parsed: any = queryString.parse(location.search);

    if (parsed[key]) {
      try {
        return JSON.parse(parsed[key]);
      } catch (e) {
        return parsed[key];
      }
    }
    return parsed[key] ?? null;
  }
  return null;
};

export const setQS = (key: string, value: string) => {
  const currentUrl = new URL(window.location.href);

  const searchParams = currentUrl.searchParams;

  searchParams.set(key, value);

  history.pushState({}, "", currentUrl.toString().replace(/%2C/g, ","));
};
