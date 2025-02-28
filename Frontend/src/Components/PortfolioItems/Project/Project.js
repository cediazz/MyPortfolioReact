import Modal from "../Modal"
import cabin from "../../../assets/img/cabin.png"

function Project({ id,projectName, description, website_url, repository_url, image }) {



    return (
        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={`#modal${id}`}>
            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white">
                    <i class="fas fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" src={image} alt="..." width={300} height={300} />
            <Modal
                image={image}
                id={id}
                description={description}
                projectName={projectName}
                website_url={website_url}
                repository_url={repository_url}
            />
        </div>

    )

}
export default Project