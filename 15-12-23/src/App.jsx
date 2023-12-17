import Navbar from "./components/navbar";
import Hero from "./components/hero";
import CardList from "./components/cardList";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import Spacer from "./components/spacer";
import "./App.css";

function App() {
  const imagesList1 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?1",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?2",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?3",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?4",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?5",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?6",
      title: "Image card",
    },
    {
      id: 7,
      img: "https://picsum.photos/200/400?7",
      title: "Image card",
    },
    {
      id: 8,
      img: "https://picsum.photos/200/400?8",
      title: "Image card",
    },
    {
      id: 9,
      img: "https://picsum.photos/200/400?9",
      title: "Image card",
    },
    {
      id: 10,
      img: "https://picsum.photos/200/400?10",
      title: "Image card",
    },
  ];
  const imagesList2 = [
    {
      id: 1,
      img: "https://picsum.photos/200/400?11",
      title: "Image card",
    },
    {
      id: 2,
      img: "https://picsum.photos/200/400?12",
      title: "Image card",
    },
    {
      id: 3,
      img: "https://picsum.photos/200/400?13",
      title: "Image card",
    },
    {
      id: 4,
      img: "https://picsum.photos/200/400?14",
      title: "Image card",
    },
    {
      id: 5,
      img: "https://picsum.photos/200/400?15",
      title: "Image card",
    },
    {
      id: 6,
      img: "https://picsum.photos/200/400?16",
      title: "Image card",
    },
    {
      id: 7,
      img: "https://picsum.photos/200/400?17",
      title: "Image card",
    },
    {
      id: 8,
      img: "https://picsum.photos/200/400?18",
      title: "Image card",
    },
    {
      id: 9,
      img: "https://picsum.photos/200/400?19",
      title: "Image card",
    },
    {
      id: 10,
      img: "https://picsum.photos/200/400?20",
      title: "Image card",
    },
  ];

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardList
        cardListObj={{ title: "Indie movies ecc...", list: imagesList1 }}
      />
      <CardList cardListObj={{ title: "Fantasy", list: imagesList2 }} />

      <Gallery />
      <Spacer />
      <Footer />
    </div>
  );
}

export default App;
