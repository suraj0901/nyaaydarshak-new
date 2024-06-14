"use client";

import api, { get_default } from "@/lib/api";
import useSWR from "swr";

export interface Blog {
  description: string;
  id: number;
  isClosed: boolean;
  pinToTop: boolean;
  publish: boolean;
  thumbnail: string;
  title: string;
  urlLink: string;
}

export default function useBlogsWithSuspense(options?: any) {
  const { data, ...rest } = useSWR(api.blogs, get_default, {
    suspense: false,
    ...options,
  });
  const blogs = data?.blogs as Blog[];
  return { blogs, ...rest };
}

export async function useBlogs() {
  const data = await get_default(api.blogs);
  const blogs = data?.blogs as Blog[];
  return { blogs };
}
