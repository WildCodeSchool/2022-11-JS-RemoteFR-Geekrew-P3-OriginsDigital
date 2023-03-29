import { createContext, useState, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const UploadContext = createContext();

export function UploadContextProvider({ children }) {
  const [free, setFree] = useState(localStorage.getItem(""));
  const [author, setAuthor] = useState(localStorage.getItem(""));
  const [category, setCategory] = useState(localStorage.getItem(""));
  const [desc, setDesc] = useState(localStorage.getItem(""));
  const [duration, setDuration] = useState(localStorage.getItem(""));
  const [thumbnail, setThumbnail] = useState(localStorage.getItem(""));
  const [title, setTitle] = useState(localStorage.getItem(""));
  const [url, setUrl] = useState(localStorage.getItem(""));

  const values = useMemo(
    () => ({
      free,
      setFree,
      author,
      setAuthor,
      category,
      setCategory,
      desc,
      setDesc,
      duration,
      setDuration,
      thumbnail,
      setThumbnail,
      title,
      setTitle,
      url,
      setUrl,
    }),
    [
      free,
      setFree,
      author,
      setAuthor,
      category,
      setCategory,
      desc,
      setDesc,
      duration,
      setDuration,
      thumbnail,
      setThumbnail,
      title,
      setTitle,
      url,
      setUrl,
    ]
  );

  return (
    <UploadContext.Provider value={values}>{children}</UploadContext.Provider>
  );
}
UploadContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUploadContext = () => useContext(UploadContext);
