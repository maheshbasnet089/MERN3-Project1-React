import { useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"




function CreateBlog(){

    const navigate = useNavigate()
    const [data,setData] = useState({
        title : "", 
        subtitle : "", 
        description : "", 
        image : ""
    })
    const handleChange = (e)=>{
        // const value = e.target.value 
        // const name = e.target.name 
        const {name,value}  = e.target 
/* 
        name = title, value = haha 
        name = subtitle, value = hehe 

*/
        setData({
            ...data,
            [name] : name === "image"  ? e.target.files[0]  : value
        })

    }
    console.log(data)

    const createBlog = async (e)=>{
        e.preventDefault()
       const response =  await axios.post("https://mern3-node.onrender.com/blog",data,{
        headers : {
            "Content-Type" : "multipart/form-data"
        }
       })
       if(response.status === 200){
        navigate("/")
       }else{
        alert("Something went wrong")
       }
       
    }

    return ( 
       <>
       <Navbar />
       <div class="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
            <div class="mt-10 text-center font-bold">Wanna create blog ? </div>
            <div class="mt-3 text-center text-4xl font-bold">Create Blog</div>
<form onSubmit={createBlog}>

<div class="p-8">
                <div class="flex gap-4">
                <input type="text" name="title" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Title *" onChange={handleChange} />

                <input type="text" name="subtitle" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Subtitle *"  onChange={handleChange} />
                </div>
                <div class="my-6 flex gap-4">
                <input type="file" name="image" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" onChange={handleChange}  />
                </div>
                <div class="">
                <textarea name="description" id="text" cols="30" rows="10" class="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300" onChange={handleChange}>Description</textarea>
                </div>
                <div class="text-center">
                <button class="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white">Create Blog</button>
                </div>
  </div>

</form>
</div>
       </>
    )
}

export default CreateBlog