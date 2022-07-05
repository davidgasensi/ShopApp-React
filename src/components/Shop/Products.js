import {
  Center,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";
import { SearchIcon, CloseIcon } from "@chakra-ui/icons";
import ProductItems from "./ProducItems";
import { useState } from "react";
const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Nike Air Force 1 '07",
    price: 119.99,
    reviewCount: 152,
    rating: 5,
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-zapatillas-xCxt0q.png",
    imageAlt: "Nike Air Force 1 '07",
    type: "shoes",
  },
  {
    id: "p5",
    title: "Nike Blazer Mid '77 Vintage",
    price: 109.99,
    reviewCount: 115,
    rating: 5,
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-zapatillas-d8ZCkw.png",
    imageAlt: "Nike Blazer Mid '77 Vintage",
    type: "shoes",
  },
  {
    id: "p2",
    title: "Nike Infinity Pro 2",
    price: 99.99,
    reviewCount: 75,
    rating: 3,
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c037d9a9-6d84-468e-8f4e-ed4e48c4cf4d/infinity-pro-2-zapatillas-de-golf-MpXXLs.png",
    imageAlt: "Nike Infinity Pro 2",
    type: "shoes",
  },
  {
    id: "p7",
    title: "FCB Shirt",
    price: 89.99,
    reviewCount: 79,
    rating: 4,
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/faac8563-420b-47ce-9018-a1733922f1ce/segunda-equipacion-stadium-fc-barcelona-2022-23-camiseta-de-futbol-dri-fit-Hz3Ll9.png",
    imageAlt: "BCN Shirt",
    type: "shirts",
  },
  {
    id: "p10",
    title: "FCB Socks",
    price: 17.99,
    reviewCount: 100,
    rating: 4,
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/54851b64-449f-4dcf-90e9-91f0664010e7/segunda-equipacion-stadium-fc-barcelona-2022-23-calcetines-de-futbol-hasta-la-pantorrilla-rPQ9wH.png",
    imageAlt: "FCB Socks",
    type: "socks",
  },
  {
    id: "p6",
    title: "PSG Shirt",
    price: 89.99,
    reviewCount: 29,
    rating: 2,
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/2655366c-e7b0-4d03-b2a1-6a8f618be6d2/primera-equipacion-stadium-paris-saint-germain-2022-23-camiseta-de-futbol-dri-fit-T2dRkh.png",
    imageAlt: "PSG Shirt",
    type: "shirts",
  },
  {
    id: "p9",
    title: "PSG Socks",
    price: 17.99,
    reviewCount: 10,
    rating: 3,
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/843c4590-173f-4978-b72c-38f53a7b7234/equipacion-de-portero-stadium-paris-saint-germain-2022-23-medias-de-futbol-z8cfC9.png",
    imageAlt: "PSG Socks",
    type: "socks",
  },
  {
    id: "p3",
    title: "Nike Metcon 7 AMP",
    price: 139.99,
    reviewCount: 89,
    rating: 4,
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/b706e869-d010-49bc-a168-3d585f9c802a/metcon-7-amp-zapatillas-de-entrenamiento-vsfh3x.png",
    imageAlt: "Nike Metcon 7 AMP",
    type: "shoes",
  },
  {
    id: "p4",
    title: "Nike Air Max Plus",
    price: 169.99,
    reviewCount: 31,
    rating: 2,
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/0456676c-2533-4767-ab0e-91d7b5c6468d/air-max-plus-zapatillas-5LXG7K.png",
    imageAlt: "Nike Air Max Plus",
    type: "shoes",
  },

  {
    id: "p8",
    title: "Nike Mercurial Vapor",
    price: 249.99,
    reviewCount: 71,
    rating: 3,
    imageUrl:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/d8c543d9-4bef-4fad-8710-06d89e075ff6/mercurial-vapor-14-elite-fg-botas-de-futbol-terreno-firme-tc20Km.png",
    imageAlt: "Nike Mercurial Vapor",
    type: "shoes",
  },
];

function Products() {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const filterProductsByName = (event) => {
    const { value } = event.target;
    const filtered = DUMMY_PRODUCTS.filter((product) => {
      return product.title.toLowerCase().includes(value.toLowerCase());
    });
    setFilteredProducts(filtered);
  };

  const filterProductsByType = (event) => {
    if (event === undefined) {
      setFilteredProducts(DUMMY_PRODUCTS);
    } else {
      const { value } = event.target;
      const filtered = DUMMY_PRODUCTS.filter((product) => {
        return product.type.toLowerCase().includes(value.toLowerCase());
      });
      setFilteredProducts(filtered);
    }
  };

  function resetSearch() {
    const dropDown = document.getElementById("selectSearch");
    const inputSearch = document.getElementById("inputSearch");
    inputSearch.value = "";
    dropDown.selectedIndex = 0;
    filterProductsByType();
  }

  let content = "";
  if (filteredProducts.length > 1) {
    content = (
      <Center mt="10" display="flex" flexWrap="wrap">
        {filteredProducts.map((product) => (
          <ProductItems
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            reviewCount={product.reviewCount}
            rating={product.rating}
            imageUrl={product.imageUrl}
            imageAlt={product.imageAlt}
            type={product.type}
          />
        ))}
      </Center>
    );
  } else {
    content = (
      <Center mt="10" display="flex" flexWrap="wrap">
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItems
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            reviewCount={product.reviewCount}
            rating={product.rating}
            imageUrl={product.imageUrl}
            imageAlt={product.imageAlt}
            type={product.type}
          />
        ))}
      </Center>
    );
  }
  return (
    <div>
      <Center>
        <InputGroup width="40rem" mt="10">
          <InputLeftElement children={<SearchIcon color="brand.primary" />} />
          <Input
            placeholder="Search products by name"
            size="md"
            variant="outline"
            onChange={filterProductsByName}
            id="inputSearch"
          />
          <Select
            placeholder="Select type"
            ml="5"
            width="15rem"
            onChange={filterProductsByType}
            id="selectSearch"
          >
            <option value="shoes">Shoes</option>
            <option value="shirts">Shirts</option>
            <option value="socks">Socks</option>
          </Select>
          <CloseIcon
            color="red"
            ml="3"
            alignSelf="center"
            cursor="pointer"
            onClick={resetSearch}
          />
        </InputGroup>
      </Center>
      {content}
    </div>
  );
}

export default Products;
