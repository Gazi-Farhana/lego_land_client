import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Gallery = () => {
  return (
    <div className="py-12 hidden lg:block">
      <h2 className="text-center text-4xl font-bold mb-10">
        Explore our Lego Land
      </h2>
      <div className="">
        <div className="lg:grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-center font-bold text-3xl">Shop Tour</h3>
            <div className="carousel w-full" data-aos="zoom-in-right">
              <div id="item1" className="carousel-item w-full">
                <img src="assets/images/shop1.jpg" className="w-full" />
              </div>
              <div id="item2" className="carousel-item w-full">
                <img src="assets/images/shop4.jpg" className="w-full" />
              </div>
              <div id="item3" className="carousel-item w-full">
                <img src="assets/images/banner3.jpg" className="w-full" />
              </div>
              <div id="item4" className="carousel-item w-full">
                <img src="assets/images/banner4.jpg" className="w-full" />
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
          <div className="text-start space-y-12 py-32 w-auto lg:w-96">
            <h2 className="text-2xl font-semibold">
              Step Into a World of Brick-Built Wonders: Shop Tour at Lego
              Paradise!
            </h2>
            <p>
              Welcome to our Lego-themed shop! Explore an endless array of Lego
              sets, minifigures, and accessories. Immerse yourself in
              brick-built worlds, from bustling cities to epic space adventures.
              Discover the latest releases, exclusive collectibles, and building
              inspiration. Unleash your creativity and build unforgettable
              memories at our Lego wonderland!
            </p>
          </div>
        </div>

        <div className="lg:grid grid-cols-2 gap-12 ">
          <div className="justify-self-end text-end space-y-12 py-32 w-auto lg:w-96">
            <h2 className="text-2xl font-semibold">
              Unlocking Creativity: Explore the Lego Workshop at Our School!
            </h2>
            <p>
              Get ready for hands-on fun in our Lego workshop! Unleash your
              imagination as you design, build, and bring your creations to life
              using colorful Lego bricks. Discover the joy of problem-solving,
              teamwork, and innovation through engaging challenges and
              activities. Let your creativity soar in our interactive Lego
              workshop!
            </p>
          </div>
          <div>
            <h3 className="text-center font-bold text-3xl">Workshops</h3>
            <div className="carousel w-full" data-aos="zoom-in-left">
              <div id="item5" className="carousel-item w-full">
                <img src="assets/images/workshop1.png" className="w-full" />
              </div>
              <div id="item6" className="carousel-item w-full">
                <img src="assets/images/workshop2.jpeg" className="w-full" />
              </div>
              <div id="item7" className="carousel-item w-full">
                <img src="assets/images/workshop3.jpg" className="w-full" />
              </div>
              <div id="item8" className="carousel-item w-full">
                <img src="assets/images/workshop4.jpg" className="w-full" />
              </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#item5" className="btn btn-xs">
                1
              </a>
              <a href="#item6" className="btn btn-xs">
                2
              </a>
              <a href="#item7" className="btn btn-xs">
                3
              </a>
              <a href="#item8" className="btn btn-xs">
                4
              </a>
            </div>
          </div>
        </div>

        <div className="lg:grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-center font-bold text-3xl">Our Collection</h3>
            <div className="carousel w-full" data-aos="zoom-in-right">
              <div id="item9" className="carousel-item w-full">
                <img src="assets/images/set1.jpg" className="w-full" />
              </div>
              <div id="item10" className="carousel-item w-full">
                <img src="assets/images/set2.jpg" className="w-full" />
              </div>
              <div id="item11" className="carousel-item w-full">
                <img src="assets/images/set3.jpg" className="w-full" />
              </div>
              <div id="item12" className="carousel-item w-full">
                <img src="assets/images/set4.jpg" className="w-full" />
              </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              <a href="#item9" className="btn btn-xs">
                1
              </a>
              <a href="#item10" className="btn btn-xs">
                2
              </a>
              <a href="#item11" className="btn btn-xs">
                3
              </a>
              <a href="#item12" className="btn btn-xs">
                4
              </a>
            </div>
          </div>
          <div className="text-start space-y-12 py-32 w-auto lg:w-96">
            <h2 className="text-2xl font-semibold">
              Discover Extraordinary Treasures: Unveiling Our Exclusive Lego
              Collections!
            </h2>
            <p>
              Indulge in the awe-inspiring world of exclusive Lego collections,
              meticulously curated for enthusiasts like you. From limited
              edition sets to rare minifigures, explore a treasure trove of
              highly sought-after Lego gems. Immerse yourself in the magic of
              extraordinary designs and embark on a collector's journey unlike
              any other.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
