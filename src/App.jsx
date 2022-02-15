/* Components */
import Header from "@components/Header"
/* Styles & Sources */
import "./App.css"
import ImgHomeWrapper from "@images/home-wrapper.jpg"

function App() {
  return (
    <div className="App-Container">
      <main>
        <Header />
        <div className="is-sections-cards">
          <div className="is-section-card is-hero">
            <div className="is-card-hero-background">
              <figure className="is-background-figure">
                <img className="is-img is-img-bg-figure" src={ImgHomeWrapper} alt="Peliculas y series ilimatadas y mucho más." />
              </figure>
              <div className="is-background-gradient">

              </div>
            </div>
            <div className="is-card-hero-text">
              <h1 className="is-card-title">
                Películas y series ilimitadas y mucho más.
              </h1>
              <h2 className="is-card-subtitle">
                Disfruta donde quieras. Cancela cuando quieras.
              </h2>
              <form className="is-form is-email-form" action="/">
                <h3 className="is-form-title">
                  ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.
                </h3>
                <div className="is-form-lockup">
                  <label placeholder="email">
                    <input
                      type="email"
                      name="email"
                      id="id_email"
                      autoComplete="email"
                    />
                    <label
                      htmlFor="id_email"
                      className="label-placeholder"
                    >
                      Email
                    </label>
                  </label>
                </div>
                <button className="is-btn-start is-btn-red">
                  <span className="is-btn-text">Comenzar</span>
                  <span className="is-btn-icon">
                    <svg className="is-icon-svg" viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                      <desc>chevron</desc>
                      <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fill-rule="evenodd"></path>
                    </svg>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
