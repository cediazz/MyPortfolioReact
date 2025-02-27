import Modal from "../Modal"
import cabin from "../../../assets/img/cabin.png"

function Item1() {

    const description = "Description here"
    const AppName = "Log Cabin"
    
    return (
        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#Item1">
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                    <i class="fas fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" src={cabin} alt="..." />
            <Modal image={cabin} id={"Item1"} desc={description} appName={AppName} />
        </div>

    )

}
export default Item1