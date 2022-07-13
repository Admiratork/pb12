import { projectFirestore } from "../../firebase/config";
import { useEffect, useState } from "react";
import React from "react";

import "./Home.css";

//components
// import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";

export default function Home() {
  // const { data, isPending, error } = useFetch("http://localhost:3000/recipes");

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("recipes")
      .get()
      .then((snapshot) => {
        console.log(snapshot);
      });
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
