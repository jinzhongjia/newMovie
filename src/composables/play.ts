import { PlayNum } from "./type";
function Handle_play_url(urls: string): PlayNum[] {
  const res: PlayNum[] = [];
  const nameToUrl = urls.split("#");
  for (let i = 0; i < nameToUrl.length; i++) {
    const ele = nameToUrl[i];
    const splitArr = ele.split("$");
    res.push({
      id: i + 1,
      name: splitArr[0],
      url: splitArr[1],
    });
  }
  return res;
}

export { Handle_play_url };
