import React, { useState, useEffect } from "react";
import { RingLoader } from "react-spinners";
import ImageGallery from "../components/ImageGallery";
import NavBar from "../components/NavBar";
import images from "../data/images.json";
import { useAuth0 } from "@auth0/auth0-react";
import { DragDropContext } from "react-beautiful-dnd";

const LargeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [filteredImages, setFilteredImages] = useState(images);

  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    // Simulate loading images (e.g., fetch images from a server)
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust as needed
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = images.filter((image) =>
      image.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredImages(filtered);
  };

  // Function to handle drag-and-drop reordering
  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedImages = [...filteredImages];
    const [reorderedImage] = reorderedImages.splice(result.source.index, 1);
    reorderedImages.splice(result.destination.index, 0, reorderedImage);

    setFilteredImages(reorderedImages);
  };

  return (
    isAuthenticated && (
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="w-[100%] h-auto flex flex-col justify-center items-center ">
          <NavBar onSearch={handleSearch} />
          <h2 className="hidden lg:relative bottom-[50px] left-[300px] ">{`Welcome ${user.name}`}</h2>
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <RingLoader color="#36D7B7" size={100} />{" "}
            </div>
          ) : (
            // Render the image gallery here

            <div className="w-[80%] h-auto flex flex-wrap justify-center items-center ">
              <ImageGallery images={filteredImages} />{" "}
            </div>
          )}
          <div className="w-full h-[200px] bg-gray-400 mt-[20px]">
            <div className="flex justify-center items-center w-full h-full">
              <p className="text-white text-lg"> @copy write. cariebi 2023 </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </DragDropContext>
    )
  );
};

export default LargeScreen;
