"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const CategorySearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("category") || "");

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim()) {
      router.push(`/all-photos?category=${search}`);
    } else {
      router.push(`/all-photos`);
    }
  };

  return (
    <form onSubmit={handleSearch} style={{ position: "relative" }}>
      <input
        type="text"
        placeholder="Search for Available Photos"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ paddingLeft: "30px" }}
        className="w-full py-4 rounded-lg border border-zinc-200"
      />
    </form>
  );
};

export default CategorySearch;