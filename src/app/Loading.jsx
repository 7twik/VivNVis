const Loading= () => {
    const random1or2 = Math.round((Math.random()*10)%2);
    return (
      <div>
        <CutoutTextLoader
          height="100vh"
          background="white"
          // NOTE: Using GIFs for the background looks super cool :)
          imgUrl={(random1or2===1)?"https://images.pexels.com/photos/108148/pexels-photo-108148.jpeg?auto=compress&cs=tinysrgb&w=600":"https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600"}
        />
      </div>
    );
  };
  
  const CutoutTextLoader = ({
    height,
    background,
    imgUrl,
  }) => {
    return (
      <div className="relative" style={{ height }}>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${imgUrl})`,
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
            backgroundImage: `url(${imgUrl})`,
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