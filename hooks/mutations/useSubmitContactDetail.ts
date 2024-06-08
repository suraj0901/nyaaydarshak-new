import api, { post_default } from "@/lib/api";
import useSWRMutation from "swr/mutation";

interface Options {
  onSuccess?: (prop: any) => void;
  onError?: (prop: any) => void;
}

export default function useSubmitContactDetail(options?: Options) {
  return useSWRMutation(api.contact, post_default, options);
}
