import { isPending } from "@reduxjs/toolkit";
import { fetchTours } from "./types";
import { useQuery } from "@tanstack/react-query";

function Component() {
  const {
    isPending, // loading state
    isError, // error flag
    error, // error object
    // assign and rename
    // 1. assign
    // When isPending is false and isError is false, 
    // this contains the data returned by your queryFn (fetchTours). 
    // In your case, it's the validated array of Tour[].
    // 2. The Renaming (data: tours): This uses standard JavaScript destructuring to:
    // a. Take the property named data from the object returned by useQuery.
    // b. Assign its value to a new local variable named tours
    data: tours, // The result of a successful query.
  } = useQuery({ // config
  // useQuery : The primary hook for GET operations (fetching data). 
  // It takes your fetching function and returns an object 
  // containing all the states needed for your UI.

  // A unique identifier for this specific query. 
  // React Query uses this key for caching, refetching, 
  // and sharing data across your entire app.
    queryKey: ['tours'],

  // The asynchronous function that actually fetches the data from the API 
    queryFn: fetchTours
  });

  if (isError) {
    return <h2>errorL {error.message}</h2>
  }
  if (isPending) {
    return <h2>Pending</h2>
  }
  return (
    <div>
      <h2 className="mb-1">Tours</h2>
      {tours.map((tour) => {
        return (
          <li key={tour.id}>{tour.name}</li>)
      })}
    </div>
  )
}

export default Component