
function Footer({user}) {

    return (
        <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4"><i class="fas fa-map-marker-alt"></i> Location</h4>
                        <p class="lead mb-0">
                        {user[0].user_profile.location}
                        </p>
                    </div>
                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4"><i class="fas fa-globe"></i> Around the Web</h4>
                        <a class="btn btn-outline-light btn-social mx-1" href={user[0].user_profile.facebook_url}><i class="fab fa-fw fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href={user[0].user_profile.linkedin_url}><i class="fab fa-fw fa-linkedin-in"></i></a>
                    </div>
                </div>
                </div>
            </footer>
    )
}
export default Footer