import Testimonials from "./Testimonials"

export const Section3 = () => {
    return(
        <div>
            <div className="m-8 flex justify-center">
                <h1 className="font-outfit text-5xl font-medium">Our Customers speak for us 🤩 ❤️</h1>
            </div>
            <div className="flex justify-center gap-7">
                <img className="w-80 hover:scale-105" src="/1.png" alt="" />
                <img className="w-80 hover:scale-105" src="/2.png" alt="" />
                <img className="w-80 hover:scale-105" src="/3.png" alt="" />
                <img className="w-80 hover:scale-105" src="/4.png" alt="" />
            </div>
        </div>
    )
}