let base_url: string;

if (import.meta.env.DEV) {
  base_url = "http://localhost:8000";
} else {
  base_url = window.location.protocol + "//" + window.location.host;
}

const MainCategory_url = base_url + "/mainCategory";

const ProxyImg_url = base_url + "/img/proxy?";

const Category_url = base_url + "/category";

const AllCategory_url = base_url + "/allCategory";

export {
  base_url,
  MainCategory_url,
  ProxyImg_url,
  Category_url,
  AllCategory_url,
};
