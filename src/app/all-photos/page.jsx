import Category from "@/components/Category/Category";
import CategorySearch from "@/components/CategorySearch/CategorySearch";
import PhotoCard from "@/components/PhotoCard/PhotoCard";
import Link from "next/link";
import React from "react";
import { GiArchiveResearch } from "react-icons/gi";

const AllPhotoPage = async ({ searchParams }) => {
  const { category } = await searchParams;
  console.log(category);
  const res = await fetch(
    "https://ai-pic-generator-livid.vercel.app/books.json",
  );
  const photos = await res.json();
  // console.log(photos);
  const filteredPhotos = category
    ? photos.filter(
        (photo) => photo.category.toLowerCase() === category.toLowerCase(),
      )
    : photos;
  return (
    <div>
      <div className="grid grid-cols-4 mt-5 items-center">
        <div className="col-span-1">
          <Link href={"/all-photos"}>
            <h1>All Photos</h1>
          </Link>
        </div>
        <div className="col-span-3 ">
          <div style={{ position: "relative" }} >
            <GiArchiveResearch
              style={{
                position: "absolute",
                left: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
            {/* <input
              type="text"
              placeholder="Search for Available Photos"
              style={{ paddingLeft: "30px" }}
              className="w-full py-4 rounded-lg border border-zinc-200"
            /> */}
            <CategorySearch></CategorySearch>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <Category></Category>
        </div>
        <div className="grid grid-cols-3 col-span-3">
          {filteredPhotos.map((photo) => (
            <PhotoCard key={photo.id} photo={photo}></PhotoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPhotoPage;
