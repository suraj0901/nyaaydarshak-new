import api, { post_default } from "@/lib/api";
import useSWRMutation from "swr/mutation";

export default function useSubmitContactDetail(options?: any) {
  return useSWRMutation(api.contact, post_default, options);
}
