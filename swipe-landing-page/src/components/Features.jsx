export const Features = ({title}) => {
    return(
        <div className="flex mx-3 mt-6 p-2">
            <img className="w-7" src="https://getswipe.in/static/img/icons/accept.svg" alt="" />
            <h2 className="font-outfit text-lg mx-3">{title}</h2>
        </div>
    )
}