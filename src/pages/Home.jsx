import Card from "../components/Card"
import Navbar from "../components/Navbar"


function Home(){
    return(
        
        <>
            <Navbar/>

            <div className="flex flex-wrap">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </div>

        </>


    )
}

export default Home