import { client } from "@/sanity/lib/client";
import { use } from "react";
import StartupCard, { StartupTypeCard } from "./startup-card";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";

export function UserStartups({ id }: { id: string }) {
  const startups = use(client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id }));

  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup: StartupTypeCard) => (
          <StartupCard key={startup._id} post={startup} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
}
