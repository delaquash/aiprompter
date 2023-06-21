"use client";
import { useState, useEffect } from "react"
import { CustomFilter, Hero, Searchbar } from "@components";
import CarCard from "@components/CarCard";
import ShowMore from "@components/ShowMore";
import { yearsOfProduction, fuels } from "@constants";
import { fetchCars } from "@utils";
import Image from "next/image";



const Home = () => {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // search state
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // filter state
  const [year, setYear] = useState(2023);
  const [fuel, setFuel] = useState("");

  // pagination 
  const [limit, setLimit] = useState(10)

  const getCars = async() => {
    setLoading(true)
    try {
      const res = await fetchCars({
        manufacturer: manufacturer || "",
        year: year || 2023,
        model: model || "",
        limit: limit || 10,
        fuel: fuel || ""
      })
      setAllCars(res)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getCars()
  }, [manufacturer, model, year, fuel, limit])
  

  /* `const carData` is a boolean variable that checks 
  if the `data` variable is empty or not. 
  It checks if `data` is not an array, 
  or if its length is less than 1, or if `data` is falsy. 
  If any of these conditions are true, `carData` will be true,
   indicating that there are no cars in the data. */
  const carData = !Array.isArray(allCars) || allCars.length < 1 || !allCars
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore the cars you might like.</p>
          </div>
        <div className="home__filters">
          <Searchbar 
              setManufacturer={setManufacturer}
              setModel={setModel}
          />
          <div className="home__filter-container">
            <CustomFilter 
                title="fuel" 
                options={fuels}
                setFilter={setYear} 
            />
            <CustomFilter 
                title="year"  
                options={yearsOfProduction}
                setFilter={setYear} 
            />

            {allCars.length > 0 ? (
              <section>
                <div className="home__cars-wrapper">
                    {allCars?.map((car)=> (
                      <CarCard car={car} />
                    ))}
                </div>
                {loading && (
                  <div className="mt-16 w-full flex-center">
                    <Image 
                        src="/loader.svg"
                        alt="Loader"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                  </div>
                )}
                <ShowMore
                  pageNumber={limit / 10}
                  isNext={limit > allCars.length}
                  setLimit={setLimit}
                />
              </section>
            ): (
              <div className="home__error-container">
                <h2 className="text-black text-xl font-bold">
                  Oop's no result found. Please check back later.
                </h2>
                <p>{allCars?.message}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home