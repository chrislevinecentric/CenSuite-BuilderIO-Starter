import React from "react";
import { Uploader } from "rsuite";
const CenUploader = (props) => {
  const fileList = [
    {
      name: "a.png",
      fileKey: 1,
      url: "https://icongr.am/fontawesome/file-text-o.svg?size=20&color=currentColor",
    },
    {
      name: "b.png",
      fileKey: 2,
      url: "https://icongr.am/fontawesome/file-text-o.svg?size=20&color=currentColor",
    },
  ];
  return (
    <Uploader
      listType="picture-text"
      defaultFileList={fileList}
      action="//jsonplaceholder.typicode.com/posts/"
      renderFileInfo={(file, fileElement) => {
        return (
          <>
            <span>File Name: {file.name}</span>
            <p>File URL: {file.url}</p>
          </>
        );
      }}
    />
  );
};

export default CenUploader;
