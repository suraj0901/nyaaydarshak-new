import axios from "axios";

const base = axios.create({
  baseURL: "https://server.nyaaydarshak.com",
});

export async function get_default(url: string) {
  return base.get(url).then((data) => data.data);
}
export async function delete_default(url: string) {
  return base.delete(url).then((data) => data.data);
}

export async function post_default(url: string, { arg: data }: any) {
  return base.post(url, data).then((data) => data.data);
}

export async function put_default(url: string, { arg: data }: any) {
  return base.post(url, data).then((data) => data.data);
}

const api = {
  blogs: "/blogs",
  contact: "/contact",
  training: "/training",
  consultations: "/consultations/",
};
export default api;
