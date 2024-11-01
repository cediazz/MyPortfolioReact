import avataaars from '../../assets/img/avataaars.svg'


function Header(){
    return (
        <header class="masthead my-header-background text-white text-center" >
            <div class="container d-flex align-items-center flex-column">
               
                <img class="masthead-avatar mb-5" src={avataaars}  />
                
                <h1 class="masthead-heading text-uppercase mb-0">Hi! I'm Carlos Ernesto Díaz Acosta</h1>
               
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
               
                <p class="masthead-subheading font-weight-light mb-0">Fronted or Backend Developer</p>
            </div>
        </header>
    );
  }
  
  export default Header;