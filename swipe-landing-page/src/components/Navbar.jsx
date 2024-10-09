import { Button } from "./button"


export const Navbar = () => {

    return(
        <>
        <div className="">
            <div className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 border-b-2">
                <div className="flex justify-between items-center py-6">
                <div className="flex justify-start pr-60">
                    <a href="#">
                        <img className="w-24 h-8" src="https://getswipe.in/static/img/brand_logo.svg" alt="" />
                    </a>
                </div>
                <div className="hidden lg:flex font-medium font-outfit gap-8">
                    <a href="">Why Swipe?</a>
                    <a href="">Templates</a>
                    <a href="">Tutorials</a>
                    <a href="">FAQs</a>
                    <a href="">Pricing</a>
                    <a href="">Contact Us</a>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <a className="font-medium font-outfit p-3" href="">Login</a>
                    <Button title={"Sign Up"} />
                    <Button title={"Download"} />
                </div>
                </div>
            </div>
        </div>
        </>
    )
}