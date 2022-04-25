const GuestCard = () => {
    return (
        <div className="w-full bg-theme-light rounded border border-theme-default px-6 py-4 cursor-pointer flex justify-center flex-col">
            <p className="font-header text-theme-text text-2xl">Derren Bell</p>

            <div className="h-px bg-theme-default my-2"></div>

            <div className="flex flex-col text-theme-text">
                <p className="font-light mb-1"><span className="font-medium">Attending:</span> Yes</p>
                <p className="font-light mb-1"><span className="font-medium">Attending Evening:</span> Yes</p>
                <p className="font-light"><span className="font-medium">Vegetarian:</span> No</p>
            </div>

            {/* <div className="text-theme-text">
                <p className="font-light">Please select your preferences.</p>
            </div> */}
        </div>
    )
}

export default GuestCard;