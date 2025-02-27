import Modal from "../Modal"
import cake from "../../../assets/img/cake.png"

function Item2() {

    const description = "Description here"
    const AppName = "Tasty Cake"
    
    return (
        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#Item2">
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                    <i class="fas fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" src={cake} alt="..." />
            <Modal image={cake} id={"Item2"} desc={description} appName={AppName} />
        </div>

    )

}
export default Item2