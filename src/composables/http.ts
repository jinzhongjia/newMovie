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

export { get_img };
