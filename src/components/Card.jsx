import { Link } from "react-router-dom"

function Card({blog}){
   
    return ( 
<Link to={`/blog/${blog._id}`}>
<div className="flex px-3 py-3">
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={blog.image} alt="Sunset in the mountains" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{blog.title}</div>
            <p className="text-gray-700 text-base">
                {blog.description}
            </p>
        </div>
    </div>
</div>
</Link>
    )
}

export default Card 