import { useState } from 'react'
import './App.css'
import VideoUpload from './components/VideoUpload'
import { Toaster } from 'react-hot-toast';
import VideoPlayer from './components/VideoPlayer';
import { Button, TextInput } from 'flowbite-react';

function App() {
  const [count, setCount] = useState(0);
  const [fieldValue, setFieldValue] = useState(null);
  const [videoId, setVideoId] = useState("27d864ca-1333-42ee-895e-96deef954b94");


  function playVideo(videoId) {
    setVideoId(videoId);
  }
  return (
    <>
      <Toaster />
      <div className="flex flex-col items-center space-y-9 justify-center py-9 ">
        <h1 className=" text-2xl font-bold text-gray-700 dark:text-gray-100">
        <Button outline gradientDuoTone="purpleToBlue" >
        StreamVista
      </Button> </h1>

        <div className="flex mt-14 w-full space-x-2 justify-between">
          <div className="w-full">
            <h1 className="text-white text-center mt-2">Playing Video</h1>

            {/* <video            
              style={{
                width : "100%",                
              }}              
              //  src={`http://localhost:8080/api/v1/videos/stream/range/${videoId}`}
              src="http://localhost:8080/api/v1/videos/b625e4fc-ddbc-48e6-bbdc-9d58826cc540/master.m3u8"
              autoplay controls ></video> */}

            <div>
              <VideoPlayer src={`http://localhost:8080/api/v1/videos/${videoId}/master.m3u8`}>
              </VideoPlayer>
            </div>
          </div >
          <div className="w-full">
            <VideoUpload />
          </div>
        </div>
        <div className="my-4 flex space-x-4" >
          <TextInput
            onClick={(event) => {
              setFieldValue(event.target.value);
            }}
            placeholder="Enter video id here"
            name="video_id_field"
          />
          <Button gradientDuoTone="tealToLime" onClick={() => {
            setVideoId(fieldValue);
          }}
          >
            Play</Button>
        </div>
      </div>

    </>

  );
}

export default App
