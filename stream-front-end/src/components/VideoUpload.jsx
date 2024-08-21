import React, { useState } from "react";
import videoLogo from "../assets/uploadIcon.png";
import { Button, Card } from "flowbite-react";
function VideoUpload() {

  const [selectedFile, setSelectedFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  

  function handleFileChange(event){
    console.log(event.target.files[0]);
  }

  return <div className="text-white">

    <Card className="flex flex-col items-center justify-center">
      <h1>Upload Videos</h1>
      <div>
      <form class="flex items-center space-x-6">
  <div class="shrink-0">
    <img class="h-16 w-16 object-cover " src={videoLogo} alt="Current profile photo" />
  </div>
  <label class="block">
    <span class="sr-only">Choose profile photo</span>
    <input onChange={handleFileChange}
    type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
  </label>  
</form>
      </div>
      <div className="flex justify-center"><Button>Upload</Button></div>
    </Card>    
  </div>;  
}

export default VideoUpload;


