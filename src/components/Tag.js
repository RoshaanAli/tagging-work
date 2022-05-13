import React from "react";

const Tag = ({ pixels }) => {
  return (
    <div className="tag-div-main" style={{ top: pixels.y,left:pixels.x,backgroundColor:"red" }}>
      Tag
    </div>
  );
};

export default Tag;

// var pos_x = e.offsetX ? e.offsetX : e.pageX - imgRef.current.offsetLeft;
    // var pos_y = e.offsetY ? e.offsetY : e.pageY - imgRef.current.offsetTop;
    // let pos_x_percent =
    //   (pos_x / parseInt(parentRef.current.style.width, 10)) * 100;
    // let pos_y_percent =
    //   (pos_y / parseInt(parentRef.current.style.height, 10)) * 100;
    // console.log(parentRef.current.style.height,"--")
    // setPixels({ ...pixels, x: `${pos_x_percent}%` });
    // setArrData([...arrData, { x: `${pos_x_percent}%`, y: 0 }]);