"use client";

import api, { get_default } from "@/lib/api";
import useSWR from "swr";

interface Blog {
  description: string;
  id: number;
  isClosed: boolean;
  pinToTop: boolean;
  publish: boolean;
  thumbnail: string;
  title: string;
  urlLink: string;
}

export default function useBlogs(options?: any) {
  const { data, ...rest } = useSWR(api.blogs, get_default, options);
  const blogs = data?.blogs as Blog[];
  return { blogs, ...rest };
}
