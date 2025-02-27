import Item1 from "../PortfolioItems/Item1/Item1"
import Item2 from "../PortfolioItems/Item2/Item2"
import { useState,useEffect } from "react"
import axios from 'axios'

function Portfolio() {

  const [projects,setProjects] = useState([])

  const getProjects = async () =>{
    try {
      let response = await axios.get('http://127.0.0.1:8000/projects/list-projects')
      if (response.status === 200)
        setProjects(response.data)
      } catch (error) {
      console.log(error)
    }
  }

  useEffect( () => {
    getProjects()
  },[] )


  return (
    <section class="page-section portfolio" id="portfolio">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        <div class="divider-custom">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4 mb-5">
            <Item1 />
          </div>
          <div class="col-md-6 col-lg-4 mb-5">
            <Item2 />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
