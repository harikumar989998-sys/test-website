import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const secret = process.env.CMS_WEBHOOK_SECRET;
  const requestSecret = request.headers.get("x-cms-webhook-secret") ?? request.headers.get("authorization")?.replace(/^Bearer\s+/i, "");

  if (!secret || requestSecret !== secret) {
    return Response.json({ ok: false, message: "Unauthorized" }, { status: 401 });
  }

  revalidatePath("/blog");
  revalidatePath("/blog/[slug]", "page");

  return Response.json({ ok: true, revalidated: ["/blog", "/blog/[slug]"] });
}
