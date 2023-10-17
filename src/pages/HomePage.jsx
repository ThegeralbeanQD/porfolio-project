import * as c from "../components"

const HomePage = () => {
  const click = () => alert('clicked')
  return (
    <>
      <header className="header">
        <div className="header__hero-wrapper">
          <div className="container header__content-flex">
            <div className="header__content-wraper">
              <h1 className="header__primary"><span className="header__primary-start">FULLY STACKED</span> <br /> AND <br /> NOT GOING BACK</h1>
              <h4 className="header__secondary">
                <span className="header__secondary-main">GI GERALDINE HO</span>
                <span className="header__secondary-sub"> SOFTWARE DEVELOPER</span>
              </h4>
            </div>
          </div>
        </div>
        <div className="container">
          <c.InfinateScroller />
        </div>
        <div className="header__cta">
          <p className="header__cta-content">psychology graduate turned passionate software developer</p>
          <div className="header__cta-btn-wrapper container">
            <button onClick={click} className="header__cta-btn header__cta-btn--primary">my work</button>
            <button onClick={click} className="header__cta-btn header__cta-btn--secondary">Learn more</button>
          </div>
        </div>
      </header>

      <section className="featured">
        <div className="container">
          <h2 className="featured__title">Featured Projects</h2>
          <c.ProjectDisplay
            title='I-chai'
            role='Frontend Developer'
            tech={['react', 'hostinger']}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptas nesciunt consequatur praesentium eveniet beatae mollitia minus aliquid rem eius numquam veritatis odio adipisci explicabo porro, natus obcaecati doloremque ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus inventore ex provident reprehenderit ipsam expedita accusamus adipisci. Quos autem deleniti, dolor officiis doloremque facilis laudantium porro voluptatum quo consequatur debitis, iusto, ducimus voluptas error minus molestias quaerat molestiae eligendi repudiandae voluptatem incidunt eaque eius magnam? Dolorem facere laudantium similique. Praesentium laudantium corrupti fugit dolorum vitae perferendis necessitatibus, reprehenderit hic! Consectetur maxime voluptatibus ab labore laudantium, ut culpa doloremque repellendus molestiae magnam dolorum nam.
          </c.ProjectDisplay>
          <c.ProjectDisplay
            title='Bump'
            role='Fullstack developer'
            tech={['react', 'mongodb', 'node', 'jest', 'vite', 'figma']}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptas nesciunt consequatur praesentium eveniet beatae mollitia minus aliquid rem eius numquam veritatis odio adipisci explicabo porro, natus obcaecati doloremque ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus inventore ex provident reprehenderit ipsam expedita accusamus adipisci. Quos autem deleniti, dolor officiis doloremque facilis laudantium porro voluptatum quo consequatur debitis, iusto, ducimus voluptas error minus molestias quaerat molestiae eligendi repudiandae voluptatem incidunt eaque eius magnam? Dolorem facere laudantium similique. Praesentium laudantium corrupti fugit dolorum vitae perferendis necessitatibus, reprehenderit hic! Consectetur maxime voluptatibus ab labore laudantium, ut culpa doloremque repellendus molestiae magnam dolorum nam.
          </c.ProjectDisplay>
          <a href="" className="featured__project-link"> view more</a>
        </div>
      </section>

      <section className="bio">
        <div className="container">
          <h2 className="bio__title">WHO IS GERALDINE</h2>
          <div className="bio__body">
            <img src="/images/graduationPhoto.jpg" alt="picture at graduation" className="bio__body-content-image" />
            <button className="bio__body-content-cta primary-btn">view resume</button>
            <p className="bio__body-content">
              Born Gi Qui Geraldine Ho, I grew up surrounded by technology and most of my hobbies to this day involve technology in one form or another.
              <span className="bio__body-content-span">
                I studied psychology and during my final year I was given the opportunity to combine psychology and technology which was a turning point for my career aspirations. Now my goals are to code and I hope to use technology for learning.
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage