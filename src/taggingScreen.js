import React, { useRef, useState } from "react";
import Tag from "./components/Tag";

const TaggingScreen = () => {
  const parentRef = useRef(null);
  const imgRef = useRef(null);
  const [arrData, setArrData] = useState([]);

  const myTag = (e) => {
    var pos_x = e.offsetX ? e.offsetX : e.pageX - imgRef.current.offsetLeft;
    var pos_y = e.offsetY
      ? e.offsetY
      : e.pageY - imgRef.current.offsetTop - 100;
    let pos_x_percent =
      (pos_x / parseInt(parentRef.current.style.width, 10)) * 100;
    let pos_y_percent =
      (pos_y / parseInt(parentRef.current.style.height, 10)) * 100;
    setArrData([
      ...arrData,
      { x: `${pos_x_percent}%`, y: `${pos_y_percent}%` },
    ]);
  };

  return (
    <>
      <h1>TaggingScreen</h1>
      <div
        className="tag-area-main"
        style={style.tagAreaMain}
        ref={parentRef}
        id="tagImg"
      >
        <img
          onClick={(e) => myTag(e)}
          ref={imgRef}
          src="https://image.shutterstock.com/image-photo/sexy-male-model-posing-260nw-367902281.jpg"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
        {arrData.map((item, i) => (
          <Tag key={i} pixels={item} />
        ))}
      </div>
    </>
  );
};

const style = {
  tagAreaMain: {
    width: "1000px",
    height: "1000px",
    position: "relative",
    backgroundColor: "lightblue",
  },
};
export default TaggingScreen;
