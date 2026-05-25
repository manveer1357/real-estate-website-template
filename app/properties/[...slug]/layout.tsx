import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { slug } = await params
//   // Fetch data based on the dynamic slug
//   const post = await fetchPostData(slug)

//   return {
//     title: post.title,
//     description: post.excerpt,
//     openGraph: {
//       title: post.title,
//       description: post.excerpt,
//       url: `https://example.com/posts/${slug}`,
//     },
//   }
// }

export default function PropPage({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
