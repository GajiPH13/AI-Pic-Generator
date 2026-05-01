
import { Button } from "@heroui/react";
import Link from "next/link";

const Category = async () => {
//   const handeler = (e) => {
//     e.preventDefault();
//   };
  const res = await fetch(
    "https://ai-pic-generator-livid.vercel.app/category.json",
  );
  const categories = await res.json();
  console.log(categories);
  return (
    <div className="mb-5 flex flex-col gap-2">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`?category=${category.name.toLowerCase()}`}
        >
          <Button
            // onClick={handeler}
            className="w-full"
            variant="outline"
            size="lg"
          >
            {category.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default Category;
