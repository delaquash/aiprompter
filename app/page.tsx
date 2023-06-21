// "use client";
import { CustomFilter, Hero, Searchbar } from "@components";
import CarCard from "@components/CarCard";
import ShowMore from "@components/ShowMore";
import { yearsOfProduction, fuels } from "@constants";
import { fetchCars } from "@utils";


const Home = async ({ searchParams }) => {
  const data = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || ""
  })
  // console.log(data)
  /* `const carData` is a boolean variable that checks 
  if the `data` variable is empty or not. 
  It checks if `data` is not an array, 
  or if its length is less than 1, or if `data` is falsy. 
  If any of these conditions are true, `carData` will be true,
   indicating that there are no cars in the data. */
  const carData = !Array.isArray(data) || data.length < 1 || !data
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore the cars you might like.</p>
          </div>
        <div className="home__filters">
          <Searchbar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year"  options={yearsOfProduction} />

            {!carData ? (
              <section>
                <div className="home__cars-wrapper">
                    {data.map((car)=> (
                      <CarCard car={car} />
                    ))}
                </div>
                <ShowMore
                  pageNumber={( searchParams.pageNumber || 10 ) / 10 }
                  isNext={(searchParams.limit || 10 ) > data.length}
                />
              </section>
            ): (
              <div className="home__error-container">
                <h2 className="text-black text-xl font-bold">
                  Oop's no result found. Please check back later.
                </h2>
                {/* <p>{data?.message}</p> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home