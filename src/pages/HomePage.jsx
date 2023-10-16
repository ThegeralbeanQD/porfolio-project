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
          <c.ProjectDisplay
            title='I-chai'
            role ='Frontend Developer'
            tech={['react', 'hostinger']}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, voluptas nesciunt consequatur praesentium eveniet beatae mollitia minus aliquid rem eius numquam veritatis odio adipisci explicabo porro, natus obcaecati doloremque ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam natus inventore ex provident reprehenderit ipsam expedita accusamus adipisci. Quos autem deleniti, dolor officiis doloremque facilis laudantium porro voluptatum quo consequatur debitis, iusto, ducimus voluptas error minus molestias quaerat molestiae eligendi repudiandae voluptatem incidunt eaque eius magnam? Dolorem facere laudantium similique. Praesentium laudantium corrupti fugit dolorum vitae perferendis necessitatibus, reprehenderit hic! Consectetur maxime voluptatibus ab labore laudantium, ut culpa doloremque repellendus molestiae magnam dolorum nam.
          </c.ProjectDisplay>
        </div>
      </section>
    </>
  )
}

export default HomePage