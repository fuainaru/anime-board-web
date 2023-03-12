import { API_URL } from "@/constants";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page");

  const response = await fetch(API_URL + "/post.json?page=" + page);
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
