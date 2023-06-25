import "react-tabs/style/react-tabs.css";
import SliderImageOne from "../../../assets/slider-images/slider_1.jpg";
import SliderImageTwo from "../../../assets/slider-images/slider_2.jpg";
import SliderImageThree from "../../../assets/slider-images/slider_3.jpg";
import SliderImageFour from "../../../assets/slider-images/slider_4.jpg";
import "./Home.css";
import { useEffect, useState } from "react";
import SingleGalleryDataCard from "../DataLoader/SingleGalleryDataCard";
import { Helmet } from "react-helmet";
import TopSellers from "../topSellers/TopSellers";
import TopSellingToys from "../topSellingToys/TopSellingToys";
import AOS from "aos";
import "aos/dist/aos.css";
import SingleToy from "../singleToy/SingleToy";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";

const Home = () => {
  const [toys, setToysData] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [topSellers, setTopSellers] = useState([]);
  const [topSellingToys, setTopSellingToys] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // Fetch data from toys
    fetchToysData().then((result) => {
      setToysData(result);
    });
  }, []);

  useEffect(() => {
    // Fetch sub category from toys
    fetchSubCategoryData().then((result) => {
      setSubCategory(result);
    });
  }, []);

  useEffect(() => {
    // Fetch data from gallery collection
    fetchGalleryImages().then((result) => {
      setGalleryImages(result);
    });
  }, []);

  useEffect(() => {
    // Fetch data from top sellers collection
    fetchTopSellers().then((result) => {
      setTopSellers(result);
    });
  }, []);

  useEffect(() => {
    // Fetch data from top selling toys
    fetchTopSellingToys().then((result) => {
      setTopSellingToys(result);
    });
  }, []);

  // Function to fetch data from collection
  const fetchToysData = async () => {
    const response = await fetch("https://toy-mart-server.vercel.app/toys");
    const toys = await response.json();
    return toys;
  };
  // Function to fetch sub category from collection
  const fetchSubCategoryData = async () => {
    const response = await fetch(
      "https://toy-mart-server.vercel.app/sub-category"
    );
    const subCategory = await response.json();
    return subCategory;
  };

  // Function to fetch data from source 2
  const fetchGalleryImages = async () => {
    const response = await fetch(
      "https://toy-mart-server.vercel.app/gallery-images"
    );
    const galleryImages = await response.json();
    return galleryImages;
  };
  const fetchTopSellers = async () => {
    const response = await fetch(
      "https://toy-mart-server.vercel.app/top-sellers"
    );
    const topSellers = await response.json();
    return topSellers;
  };
  const fetchTopSellingToys = async () => {
    const response = await fetch(
      "https://toy-mart-server.vercel.app/best-selling-toys"
    );
    const topSellingToys = await response.json();
    return topSellingToys;
  };

  return (
    <div className="my-12">
      <Helmet>
        <title>Toy Mart | Home</title>
      </Helmet>

      <div className="my-10">
        <div className="">
          <div className="carousel w-full">
            <div
              id="item1"
              className="carousel-item w-full relative rounded-md"
            >
              <img
                src={SliderImageOne}
                className="w-full h-96 object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black rounded-md"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-4xl font-bold">
                  Educational and Learning Toys for You !!!
                </h3>
              </div>
            </div>
            <div
              id="item2"
              className="carousel-item w-full relative rounded-md"
            >
              <img
                src={SliderImageTwo}
                className="w-full h-96 object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black rounded-md"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-4xl font-bold">
                  Educational and Learning Toys for You !!!
                </h3>
              </div>
            </div>
            <div
              id="item3"
              className="carousel-item w-full relative rounded-md"
            >
              <img
                src={SliderImageThree}
                className="w-full h-96 object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black rounded-md"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-4xl font-bold">
                  Educational and Learning Toys for You !!!
                </h3>
              </div>{" "}
              rounded-md
            </div>
            <div
              id="item4"
              className="carousel-item w-full relative rounded-md"
            >
              <img
                src={SliderImageFour}
                className="w-full h-96 object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black rounded-md"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-4xl font-bold">
                  Educational and Learning Toys for You !!!
                </h3>
              </div>{" "}
              rounded-md
            </div>
          </div>
          <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">
              1
            </a>
            <a href="#item2" className="btn btn-xs">
              2
            </a>
            <a href="#item3" className="btn btn-xs">
              3
            </a>
            <a href="#item4" className="btn btn-xs">
              4
            </a>
          </div>
        </div>
      </div>
      <div className="my-10" data-aos="flip-up">
        <div className="grid md:grid-cols-12 justify-between gap-4">
          {galleryImages.map((gImage) => (
            <SingleGalleryDataCard key={gImage._id} gImage={gImage} />
          ))}
        </div>
      </div>
      <div className="my-10" data-aos="fade-down">
        <h1 className="text-5xl font-bold text-center md:my-10">
          Show by Category Section
        </h1>
        <Tabs>
          <TabList>
            {subCategory.map((sCategory) => (
              <Tab>
                <Link to={`/toy-data/${sCategory.id}`} key={sCategory.id}>
                  {sCategory.name}
                </Link>
              </Tab>
            ))}
          </TabList>
        </Tabs>
        <div
          className="grid md:grid-cols-12 justify-between gap-4 mt-10"
          data-aos="flip-up"
        >
          {toys.map((toy) => (
            <SingleToy key={toy._id} toy={toy} />
          ))}
        </div>
      </div>
      <div className="md:my10" data-aos="flip-down">
        <h1 className="text-5xl font-bold text-center md:my-14">
          Top rated sellers
        </h1>
        <div className="grid md:grid-cols-12 justify-between gap-4 md:my-10">
          {topSellers.map((topSeller) => (
            <TopSellers key={topSeller._id} topSeller={topSeller} />
          ))}
        </div>
      </div>
      <div className="md:my-10" data-aos="flip-down">
        <h1 className="text-5xl font-bold text-center md:my-14">
          Best selling toys
        </h1>
        <div className="grid md:grid-cols-12 justify-between gap-4">
          {topSellingToys.map((topSellerToys) => (
            <TopSellingToys
              key={topSellerToys._id}
              topSellerToys={topSellerToys}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
