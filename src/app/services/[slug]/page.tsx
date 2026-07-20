import { redirect } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export default async function ServiceSlugRedirect({ params }: Props) {
  const { slug } = await params;
  redirect(`/products/${slug}`);
}
