

const Video = () => {
  return (
    <div className="text-center p-12 pt-20">
      <h1 className="text-4xl font-bold">Welcome to Lego Land</h1>

      <div className="lg:flex hidden gap-10 pt-12">
        <div className="mt-20 text-end space-y-8">
          <h2 className="text-3xl font-semibold">Tour To Lego Land</h2>
          <p className="">
            Welcome to Lego Land, the ultimate destination for toy enthusiasts!{" "}
            <br />
            Embark on a captivating tour through our whimsical wonderland,
            brimming <br /> with vibrant displays, interactive play areas, and a
            vast array of Lego sets.
            <br />
            Discover endless possibilities and relish in the joy of building
            dreams <br /> one brick at a time.
          </p>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ynlJr19JbEA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
