// "use client";
import { CustomFilter, Hero, Searchbar } from "@components";
import CarCard from "@components/CarCard";
import { fetchCars } from "@utils";
import { useQuery } from "react-query";


const Home = async () => {
  const data = await fetchCars()
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
            <CustomFilter title="fuel"  />
            <CustomFilter title="year"  />

            {carData ? (
              <section>
                <div className="home__cars-wrapper">
                    {data?.map((car)=> (
                      <CarCard car={car} />
                    ))}
                </div>
              </section>
            ): (
              <div className="home__error-container">
                <h2 className="text-black text-xl font-bold">
                  Oop's no result found. Please check back later.
                </h2>
                <p>{data?.message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home