import { API_URL } from "@/constants";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const tags = searchParams.get("tags");

  const response = await fetch(
    API_URL + "/post.json?tags=" + tags + "+rating:safe"
  );
  const data = await response.json();

  return new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
