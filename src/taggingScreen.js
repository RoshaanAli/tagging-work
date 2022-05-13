import React, { useRef, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import Tag from "./components/Tag";

const TaggingScreen = () => {
  const parentRef = useRef(null);
  const imgRef = useRef(null);
  const [isEdit, setIsEdit] = useState(false);
  const [clickedCords, setClickedCords] = useState(null); //get cords of when click on image
  const [modalIsOpen, setIsOpen] = useState(false); // modal state
  const [modalData, setModalData] = useState({
    name: "",
    descp: "",
  });
  const [tags, setTags] = useState([]);

  // Modal functions
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setClickedCords(null);
    setModalData({ name: "", descp: "" });
  };

  const myTag = (e) => {
    openModal();
    // Adjust tags just subtracting the number i.e for is - 400.
    var pos_x = e.offsetX
      ? e.offsetX
      : e.pageX - imgRef.current.offsetLeft - 400;
    // Adjust tags just subtracting the number i.e for is - 170.
    var pos_y = e.offsetY
      ? e.offsetY
      : e.pageY - imgRef.current.offsetTop - 170;
    let pos_x_percent =
      (pos_x / parseInt(parentRef.current.style.width, 10)) * 100;
    let pos_y_percent =
      (pos_y / parseInt(parentRef.current.style.height, 10)) * 100;
    // setTags([
    //   ...tags,
    //   { x: `${Math.floor(pos_x_percent)}%`, y: `${pos_y_percent}%` },
    // ]);
    setClickedCords({
      x: `${Math.floor(pos_x_percent)}%`,
      y: `${pos_y_percent}%`,
    });
  };

  const createTag = () => {
    setTags([...tags, { ...clickedCords, ...modalData }]);
    closeModal()
  };

  const onCancel = () => {
    setTags([]);
    setIsEdit(false);
  };

  return (
    <>
      <div className="container">
        <h1>TaggingScreen</h1>
        <p>Click edit to create/remove tags</p>
        <div className="row">
          {isEdit ? (
            <div className="col-md-12">
              <button
                onClick={() => onCancel()}
                className="btn btn-lg btn-outline-danger mb-3"
              >
                Cancel
              </button>
              <button
                onClick={() => setIsEdit(false)}
                className="btn btn-lg btn-outline-success mb-3 ml-3"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="col-md-12">
              <button
                onClick={() => setIsEdit(true)}
                className="btn btn-lg btn-outline-success mb-3"
              >
                Edit
              </button>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-md-12">
            <div
              className="tag-area-main"
              style={style.tagAreaMain}
              ref={parentRef}
              id="tagImg"
            >
              <img
                onClick={(e) => {
                  if (isEdit) {
                    myTag(e);
                  }
                }}
                ref={imgRef}
                src="https://image.shutterstock.com/image-photo/sexy-male-model-posing-260nw-367902281.jpg"
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
              {tags.map((item, i) => (
                <Tag key={i} id={`tag-${i + 1}`} pixels={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Create Tag Modal"
      >
        <h4 className="text-center mb-3">Create a Tag</h4>
        <p className="mb-0">Tag Name:</p>
        <input
          type="text"
          value={modalData.name}
          className="form-control mb-3"
          onChange={(e) => setModalData({ ...modalData, name: e.target.value })}
        />
        <p className="mb-0">Tag Description:</p>
        <textarea
          className="form-control mb-3"
          onChange={(e) =>
            setModalData({ ...modalData, descp: e.target.value })
          }
          cols="40"
          rows="5"
          value={modalData.descp}
        ></textarea>
        <button className="btn btn-md btn-outline-danger" onClick={closeModal}>
          Cancel
        </button>
        <button className="btn btn-md btn-outline-success ml-3" onClick={createTag}>Create</button>
      </Modal>
    </>
  );
};

const style = {
  tagAreaMain: {
    width: "1000px",
    height: "1000px",
    position: "relative",
  },
};
// Modal style
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
export default TaggingScreen;
