import SearchForm from "./_components/search-form";
import StartupCard from "./_components/startup-card";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _id: "1",
      title: "Startup 1",
      category: "Technology",
      image: "https://vichinth.com/wp-content/uploads/2018/07/startup-2.jpg",
      author: {
        name: "Author 1",
        _id: "1",
        image: "https://reqres.in/img/faces/1-image.jpg",
      },
      description: "This is the description of the startup 1",
      views: 100,
      _createdAt: "2022-01-01",
    },
  ];

  return (
    <div>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect with Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </div>
  );
}
