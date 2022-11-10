let base_url: string;

if (import.meta.env.DEV) {
  base_url = "http://localhost:8000";
} else {
  base_url = window.location.protocol + "//" + window.location.host;
}

const mainCategory_url = base_url + "/mainCategory";

const proxyImg_url = base_url + "/img/proxy?";

export { base_url, mainCategory_url, proxyImg_url };
