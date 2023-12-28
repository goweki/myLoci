import { ButtonPrimary } from "../atoms/buttons";

export function CardLarge({ cta = "Call to Action" }) {
  //Render
  return (
    <div className="group cursor-pointer h-64 rounded-md overflow-hidden bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144')] max-w-screen-lg">
      <div className="transition bg-backg-dark bg-opacity-50 group-hover:bg-opacity-75 flex items-center h-full">
        <div className="px-10 max-w-2xl">
          <h2 className="text-2xl font-semibold">Sport Shoes</h2>
          <p className="mt-2 text-font-inactive/75 dark:text-font-dark-inactive/75 truncate">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            facere provident molestias ipsam sint voluptatum pariatur.
          </p>
          <div className="py-4">
            <span className="inline transition group-hover:text-primary text-sm uppercase">
              {cta}
              <svg
                className="h-5 w-5 mx-2 inline"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardMedium({ _id, product }) {
  //Render
  return (
    <div
      key={_id}
      class="group cursor-pointer surface card relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
    >
      <div class="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img src={product.image} class="h-full w-full object-cover" />
      </div>
      <div class="p-6">
        <div class="mb-2 flex items-center justify-between">
          <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {product.name}
          </p>
          <p class="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            KSH. {product.price}
          </p>
        </div>
        <p class="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          {product.description}
        </p>
      </div>
      <div class="p-6 pt-0">
        <button
          class="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export function CardSmall() {
  //Render
  return <></>;
}
