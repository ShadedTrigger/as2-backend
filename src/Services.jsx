export default function Services() {
    return (
        <>
        <h1>Services</h1>
        <div className="gridContainer">
            <div className="gridItem">
                <img src="./webdev.png" alt="Icon representing web development" className="webDevImage" width={300}/>
                <p>Web Development</p>
            </div>
            <div className="gridItem">
                <img src="./controller.png" alt="Icon of a video game controller" className="controllerImage" width={300}/>
                <p>Game Programming</p>
            </div>
            <div className="gridItem">
                <img src="./consulting.png" alt="Icon representing consulting" className="consultingImage" width={300}/>
                <p>IT Consulting</p>
            </div>
        </div>
        </>
    )
}