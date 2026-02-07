"use client"
import React, { useContext, useEffect, useState } from 'react'
import { UserDetailContext } from '../_context/UserDetailContext'
import Prompt from '../_data/Prompt';
import axios from 'axios';

function GenerateLogo() {

  const {userDetail,setUserDetail}=useContext(UserDetailContext);
  const[finalPrompt,setFinalPrompt]=useState("");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(finalPrompt);
      alert("Prompt copied to clipboard! ✅");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  console.log(userDetail);
  
  const [formData,setFormData]=useState();
  useEffect(()=>{
  if(typeof window !=undefined && userDetail?.email){
    const storage=localStorage.getItem('formData')
    if(storage){
      setFormData(JSON.parse(storage));
      console.log(JSON.parse(storage));
      
    }
  }
  },[userDetail])

  useEffect(()=>{
    if(formData?.title){
    GenerateAILogo();
    }
  },[formData])
  const goToImageGenerator = () => {
  window.open("https://gemini.google.com", "_blank");
};

  const GenerateAILogo=async()=>{
    const PROMPT=Prompt.LOGO_PROMPT
    .replace('{logoTitle}',formData?.title)
    .replace('{logoDesc}',formData?.desc)
    .replace('{logoColor}',formData?.palette)
    .replace('{logoDesign}',formData?.design)
    .replace('{logoPrompt}',formData?.design?.prompt);

    console.log(PROMPT);

    

    //Generate logo Image
   const result = await axios.post("/api/ai-logo-model", {
  prompt: PROMPT,
});
setFinalPrompt(result.data.prompt);

console.log(result?.data);


    
  }
  return (
   <div className="p-10 max-w-2xl mx-auto">
    <h2 className="text-xl font-bold mb-4">I’m unable to purchase a paid image generation API right now, but I’ll share a high-quality prompt and reliable websites where you can create your logo easily.
               Thank you for your understanding. </h2>

    {finalPrompt ? (
      <div className="bg-gray-100 p-4 rounded-lg border text-sm whitespace-pre-wrap relative">
        {finalPrompt}

        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 bg-black text-white px-3 py-1 text-xs rounded hover:opacity-80"
        >
          Copy
        </button>
         <button
        onClick={goToImageGenerator}
         className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
        Generate logo with Gemini
         </button>
      </div>
     
      
    ) : (
      <p>Loading...</p>
    )}
  </div>
  )
}

export default GenerateLogo
