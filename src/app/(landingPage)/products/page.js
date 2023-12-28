"use client";
import { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { DataContext } from "@/app/providers";
import { BouncyDots } from "@/components/mols/loading";
import { SelectedProduct } from "./productPopup";
import { CardMedium } from "@/components/mols/cards";

export default function ProductsPage() {
  const data = useContext(DataContext);
  const [products, setProducts] = useState("");
  const [clickedItem, setClickedItem] = useState("");
  const [searchPhrase, setSearchPhrase] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [UIstate, setUIstate] = useState("");
  //onMount
  useEffect(() => {
    setUIstate("OK");
  }, []);
  // setProducts: onMount, onChange-searchPhrase, onChange-category
  useEffect(() => {
    let { products } = data;
    setProducts(products);
  }, [data]);
  //Render
  if (!UIstate) return <BouncyDots />;
  else if (UIstate === "OK")
    return (
      <div className="py-8 max-w-screen-lg w-full px-3 md:px-6">
        {/* HEADER */}
        <div className="relative sm:rounded-lg">
          <div className="flex flex-col items-center justify-center p-4 space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            {/* search FIELD */}
            <div className="relative w-full sm:max-w-[50%] min-w-[120px]">
              <label
                htmlFor="searchPhrase"
                className="hidden mb-2 text-sm font-medium "
              >
                Search
              </label>
              <div className="flex absolute inset-y-0 left-0 items-center pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <input
                className="block p-2 pl-10 w-full border bg-backg-raised rounded-lg dark:bg-backg-dark-raised"
                // className="rounded-lg w-full min-w-[240px] bg-backg-raised dark:bg-backg-dark-raised"
                placeholder="Search products..."
                type="searchPhrase"
                id="searchPhrase"
                value={searchPhrase}
                onChange={(e) => {
                  e.preventDefault();
                  setSearchPhrase(e.target.value);
                }}
              />
            </div>
            {/* filter FIELDS */}
            <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 sm:w-auto sm:flex-row sm:space-y-0 sm:items-center sm:space-x-3">
              <div className="flex items-center w-full space-x-3 md:w-auto">
                <select
                  name="category"
                  className="flex w-full min-w-[120px] rounded-lg border pb-2 px-2 bg-backg-raised dark:bg-backg-dark-raised"
                  onChange={(e) => {
                    setCategoryFilter(e.target.value);
                  }}
                >
                  <option value="" defaultValue className="italic py-2">
                    category...
                  </option>
                  <option value="access-control">Access-control</option>
                  <option value="camera">Cameras</option>
                  <option value="fence">Fences</option>
                </select>
                {/* <select
                  name="size"
                  className="flex w-full min-w-[120px] rounded-lg border pb-2 px-2 bg-backg-raised dark:bg-backg-dark-raised"
                >
                  <option value="" defaultValue className="italic py-2">
                    size...
                  </option>
                  <option>Large</option>
                  <option>Medium</option>
                  <option>Small</option>
                </select> */}
              </div>
            </div>
          </div>
        </div>
        {/* product Cards */}
        {products && (
          <div className="flex flex-wrap justify-center">
            {products.map((v) => {
              const { _id, ...product } = v;
              return <CardMedium key={_id} product={product} />;
            })}
          </div>
        )}
        {clickedItem && (
          <SelectedProduct
            handleClose={() => setClickedItem("")}
            car={clickedItem}
          />
        )}
      </div>
    );
  else
    return (
      <>
        ERROR: Please <Link href="/">Click here</Link> to go back to homepage
      </>
    );
}
