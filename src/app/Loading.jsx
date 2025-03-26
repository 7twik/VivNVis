const Load1 = "/load1.jpg";
const Load2 = "/load2.jpg";

const Loading = () => {
  const random1or2 = Math.random() < 0.5 ? 1 : 2;

  return (
    <div>
      <CutoutTextLoader
        height="100vh"
        background="white"
        imgUrl={random1or2 === 1 ? Load1 : Load2} // ✅ Correct way to reference public images
      />
    </div>
  );
};

const CutoutTextLoader = ({ height, background, imgUrl }) => {
  return (
    <div className="relative" style={{ height }}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url("${imgUrl}")`, // ✅ Ensure correct URL formatting
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        style={{ background }}
        className="absolute inset-0 animate-pulse z-10"
      />
      <span
        className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
        style={{
          backgroundImage: `url("${imgUrl}")`, // ✅ Ensure correct URL formatting
          backgroundPosition: "center",
          backgroundSize: "cover",
          fontSize: "clamp(3rem, 12vw, 10rem)",
          lineHeight: height,
        }}
      >
        Loading...
      </span>
    </div>
  );
};

export default Loading;
