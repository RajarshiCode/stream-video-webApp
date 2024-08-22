import React, { useState } from "react";
import videoLogo from "../assets/uploadIcon.png";
import { Button, Card, Label, TextInput, Textarea } from "flowbite-react";
import axios from "axios";
function VideoUpload() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [meta, setMeta] = useState({
      title : "",
      description : "",
  });
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");


  function handleFileChange(event) {
    console.log(event.target.files[0]);
    setSelectedFile(event.target.files[0]);
  }

  function formFieldChange(event){
    // console.log(event.target.name);
    // console.log(event.target.value);
      setMeta({
          ... meta,
          [event.target.name] : event.target.value
      });
  }

  function handleForm(formEvent) {
    formEvent.preventDefault();

    if(!selectedFile){
      alert("Please select file 🎯");
      return;
    }
    
    saveVideoToServer(selectedFile, meta);
  }

  //submit file to the server
  async function saveVideoToServer(video, videoMetaData){
    setUploading(true);
    //api call

    try {
      let formData = new FormData()
      formData.append("title", videoMetaData.title);
      formData.append("description", videoMetaData.description);
      formData.append("file", selectedFile);
      let response = await axios.post(`http://localhost:8080/api/v1/videos`, formData, {
        headers : {
          'Content-Type' : 'multipart/form-data'
        },
        onUploadProgress : (progressEvent)=>{
            console.log(progressEvent);
        }
      });
      console.log(response);
      setMessage("File Uploaded");
    } catch (error) {
      console.log(error)
    }
  }


  return <div className="text-white">

    <Card className="flex flex-col items-center justify-center">
      <h1>Upload Videos</h1>
      <div>
        <form noValidate className=" flex flex-col space-y-6" onSubmit={handleForm} >
            
          <div>
            <div className="mb-2 block">
              <Label htmlFor="file-upload" value="Video Title" />
            </div>
            <TextInput onChange={formFieldChange} name="title" placeholder="Enter title..." />
          </div>


          <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="comment" value="Video Description" />
      </div>
      <Textarea onChange={formFieldChange} name="desc" id="comment" placeholder="Write Video description..." required rows={4} />
    </div>
          <div className="flex items-center space-x-5 justify-center">

            <div className="shrink-0">
              <img className="h-16 w-16 object-cover " src={videoLogo} alt="Current profile photo" />
            </div>
            <label className="block">
              <span className="sr-only">Choose profile photo</span>
              <input name="file" onChange={handleFileChange}
                type="file" className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
            </label>
          </div>
          <div className="flex justify-center">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>      
    </Card>
  </div>;
}

export default VideoUpload;


