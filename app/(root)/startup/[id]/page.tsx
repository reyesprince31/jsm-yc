import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React, { use } from "react";

export const experimental_ppr = true;

function Startup({ params }: { params: Promise<{ id: string }> }) {
  const id = use(params).id;

  const post = use(client.fetch(STARTUP_BY_ID_QUERY, { id }));

  if (!post) return notFound();

  return <div>Startup {post.title}</div>;
}

export default Startup;
