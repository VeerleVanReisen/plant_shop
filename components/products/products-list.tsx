//Used example from https://tailwindui.com/components/ecommerce/components/product-lists
import { productsTypes } from "./products-types";
import Link from "next/link";

import { ProductsItem } from "./products-item";

const dummyProducts: productsTypes[] = [
  {
    id: "p1",
    name: "Pink Princess",
    description: "Aglaonema",
    price: 5.95,

    imageSrc:
      "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.s.m.031-thumbnail.jpg&w=1024&q=100",
    imageAlt: "Pink Princess",
  },
  {
    id: "p2",
    name: "Adansonii",
    description: "Monstera",
    price: 4.45,
    imageSrc:
      "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.s.b.006-thumbnail.jpg&w=1024&q=100",
    imageAlt: "Monstera",
  },
  {
    id: "p3",
    name: "Neon",
    description: "Syngonium",
    price: 4.95,
    imageSrc:
      "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl_s_m_013-thumbnail_2.jpg&w=1024&q=100",
    imageAlt: "Neon",
  },
  {
    id: "p4",
    name: "Rowleyanus",
    description: "Senecio",
    price: 4.95,
    imageSrc:
      "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl_s_m_011-thumbnail_2.jpg&w=1024&q=100",
    imageAlt: "Rowleyanus",
  },
  {
    id: "p5",
    name: "Moonlight",
    description: "Philodendron",
    price: 4.95,
    imageSrc:
      "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.s.b.021-thumbnail.jpg&w=1024&q=100",
    imageAlt: "Moonlight",
  },
  {
    id: "p6",
    name: "Scandens Micans",
    description: "Philodendron",
    price: 11.95,
    imageSrc:
      "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.m.019-thumbnail.jpg&w=1024&q=100",
    imageAlt: "Scandens Micans",
  },
  {
    id: "p7",
    name: "White Fusion",
    description: "Calathea",
    price: 29.95,
    imageSrc:
      "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl_m_051-thumbnail_3.jpg&w=1024&q=100",
    imageAlt: "White Fusion",
  },
  {
    id: "p8",
    name: "Melanochrysum",
    description: "Philodendron",
    price: 49.95,
    imageSrc:
      "https://plnts.com/_next/image?url=https%3A%2F%2Fwebshop.plnts.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Faa5d334f459227518b6c3cf7ea9d29ed%2Fp%2Fl%2Fpl.m.038-thumbnail.jpg&w=1024&q=100",
    imageAlt: "Melanochrysum",
  },
];

export const ProductList = () => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {dummyProducts.map((plants) => (
            // href={plants.href}
            <Link href="/products/hallo">
              <a>
                <ProductsItem key={plants.id} plants={plants} />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
