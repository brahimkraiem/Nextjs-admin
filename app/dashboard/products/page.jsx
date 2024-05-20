import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/pagination/pagination";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <div className="p-5 bg-light-bg mt-5 rounded-md">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className="bg-purple p-2.5 rounded-md">Add New</button>
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-2.5">Title</td>
            <td className="p-2.5">Description</td>
            <td className="p-2.5">Price</td>
            <td className="p-2.5">Created At</td>
            <td className="p-2.5">Stock</td>
            <td className="p-2.5">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2.5">
              <div className="flex items-center gap-2.5">
                <Image
                  className="rounded-full object-cover"
                  src="/noproduct.jpg"
                  alt=""
                  width={40}
                  height={40}
                />
                Iphone
              </div>
            </td>
            <td className="p-2.5">Desc</td>
            <td className="p-2.5">$999</td>
            <td className="p-2.5">13.01.2022</td>
            <td className="p-2.5">72</td>
            <td className="p-2.5">
              <div className="flex gap-2.5">
                <Link href="/dashboard/products/test">
                  <button className="py-1.25 px-2.5 border-none cursor-pointer bg-teal-600 rounded-md">
                    View
                  </button>
                </Link>
                <button className="py-1.25 px-2.5 border-none cursor-pointer rounded-md bg-red-500 rounded-md">
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};
export default Products;
