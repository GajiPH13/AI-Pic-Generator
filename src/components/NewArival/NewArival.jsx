import Marquee from "react-fast-marquee";
const books = [
  {
    id: 1,
    title: "New Arival: New tech innovation announced | Special Discount on Memberships..."
  },
//   {
//     id: 2,
//     title: "New Arival: New tech innovation announced | Special Discount on Memberships..."
//   },
//   {
//     id: 3,
//     title: "New Arival: Major weather alert issued | Special Discount on Memberships..."
//   }
];

const NewArival = () => {
    return (
        <div className="flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 max-w-7xl mx-auto my-4">
           <h2 className="btn  text-purple-500">New Arival</h2>
           <Marquee pauseOnHover={true}>
             {books.map((n) => (
               <span key={n.id}>{n.title}</span>
             ))}
           </Marquee>
        </div>
    );
};

export default NewArival;