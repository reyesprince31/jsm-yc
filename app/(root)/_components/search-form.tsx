import Form from "next/form";
import { SearchFormReset } from "./search-form-reset";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SearchForm({ query }: { query?: string }) {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startup"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <Button type="submit" className="search-btn text-white">
          <Search className="w-4 h-4" />
        </Button>
      </div>
    </Form>
  );
}
