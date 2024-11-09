import { Footer } from "./Component/Footer";
import { MainTable } from "./Component/MainTable";
import SelectedPlayer from "./Component/SelectedPlayers";
import { useState, useEffect } from "react";

function App() {
  // const [posts, setPosts] = useState([]);
  // const [loader, setLoader] = useState(true);

  // useEffect(() => {
  //   async function load() {
  //     try {
  //       const response = await fetch(
  //         `https://script.google.com/macros/s/AKfycbzN-3OtaLua7SXgGdRv83bTnGbuWlJ9UpFqrdKdIiiXT53Ow7muAq2zE9EBIvGLagNd/exec`
  //       );
  //       const posts = await response.json();
  //       setPosts(posts);
  //       setLoader(false);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setLoader(false);
  //     }
  //   }

  //   load();
  // }, []);

  return (
    <main className="h-lvh">
      <div className="fixed bg-gradient-to-bl from-[#050505] to-[#1a1818] h-lvh w-full object-cover -z-20" />
      <div
        className="fixed h-full w-full bg-cover -z-10 bg-center"
        style={{ backgroundImage: "url('/mainBG.png')" }}
      />
      {/* <div className="py-10">
        <MainTable data={posts} load={loader} />
      </div>
      <SelectedPlayer data={posts} load={loader} /> */}
      <Footer />
    </main>
  );
}

export default App;
