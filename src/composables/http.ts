import qs from "qs";
function get_img(url: string, callback: (param: string) => void) {
  fetch(url, {
    method: "GET",
    mode: "cors",
  })
    .then((res) => {
      // console.log(res);
      if (res.ok) {
        return res.blob();
      }
      throw new Error("Network response was not ok." + res.statusText);
    })
    .then((blob) => {
      callback(URL.createObjectURL(blob));
    })
    .catch((err) => {
      console.log("There has been a problem with your fetch operation: ", err);
    });
}

function get_json(url: string, param: object, callback: (res: any) => void) {
  fetch(url + "?" + qs.stringify(param), {
    method: "GET",
    mode: "cors",
  })
    .then((res: Response) => {
      if (res.ok) {
        res.json().then((json: object) => {
          callback(json);
        });
      }
    })
    .catch((err) => {
      console.log("There has benn a problem with fetch", err);
    });
}

export { get_img, get_json };
