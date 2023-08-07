

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: "url('assets/images/bannerfull.jpg')",
        backgroundPosition: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="space-y-6 flex flex-col justify-between p-52 bg-gradient-to-r from-slate-800 min-h-[600px] text-white">
        <h2 className="lg:text-6xl text-xl font-bold">
          Unleash Your Imagination, <br /> Brick by Brick
        </h2>
        <p className="text-xl font-semibold">
          Welcome to{" "}
          <span className="inline-block py-1 px-4 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-400">
            Lego Land
          </span>
          , where boundless creativity meets endless possibilities. <br />{" "}
          Discover a world of colorful bricks, iconic sets, and imaginative
          adventures at our one-of-a-kind LEGO emporium. <br /> Let your
          imagination soar!
        </p>
        <div>
          <button className="btn md:btn-lg btn-sm md:btn-md bg-yellow-600 normal-case text-white ">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
