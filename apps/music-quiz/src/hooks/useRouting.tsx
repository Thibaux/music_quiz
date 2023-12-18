import { useNavigate } from "react-router-dom";
// import { goRoutesBack } from "core";
// import { matchPath, useRouteMatch } from "react-router";
import parse from "query-string";
import { useMemo } from "react";

export default function useRouting() {
  const navigate = useNavigate();
  // const { url, path } = useRouteMatch();
  // const params: Dict = useMemo(() => {
  //   return parse(window.location.search);
  // }, [window.location.search]);

  const back = () => {
      navigate(-1);
  };

  // const push = (url: string, replaceCurrentPathWith = "", locationState = {}) => {
  //   if (replaceCurrentPathWith) {
  //     history.replace(replaceCurrentPathWith);
  //     history.push(url, locationState);
  //   } else {
  //     history.push(url, locationState);
  //   }
  // };

  // const pushWithParams = (url: string) => {
  //   const searchParams = new URLSearchParams(params).toString();
  //   const urlParams = searchParams ? `?${searchParams}` : '';
  //   history.push(url + urlParams);
  // };

  // const isPathActive = (path: string) => {
  //   return matchPath(window.location.pathname, {
  //     path: path.split('?')[0],
  //     exact: false,
  //   });
  // };
  //
  // return {
  //   goBack: back,
  //   go: history.go,
  //   replace: history.replace,
  //   url: url,
  //   path: path,
  //   push: push,
  //   params: params,
  //   pushWithParams: pushWithParams,
  //   isPathActive: isPathActive,
  // };
}
