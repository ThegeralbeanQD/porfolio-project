import { useState, useRef, useEffect } from "react";
import * as c from "../components"

const HomePage = () => {
  const click = () => alert('clicked')
  const [linkTitleInView, setlinkTitleInView] = useState(false);
  const linkeTitleRef = useRef(null)

  useEffect(() => {
    const linkTitleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setlinkTitleInView(true);
            }, 200)
          } else {
            setlinkTitleInView(false);
          }
        });
      },
      { threshold: 1 }
    );

    if (linkeTitleRef.current) {
      linkTitleObserver.observe(linkeTitleRef.current);
    }
  }, [])
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

      <section className="bio-sub">
        <div className="container">
          <div className="bio-sub__body">
            <h3 className="bio-sub__title">WHY YOU <span className="bio-sub__title-span">SHOULD WORK WITH ME</span></h3>
            <p className="bio-sub__content"> Although I am young I have a lot of knowledge I’m excited use and continue to learn. Being fresh out of university, my drive and motivation for contributing to a big project is unparalleled. My strong work ethic and interest in my skills is shown in every aspect of my life (just ask my friends and family... i think they’re getting sick of me) and I want to show YOU.
              Check out my resume to find out more!</p>
          </div>
          <div className="bio-sub__body">
            <h3 className="bio-sub__title">EVERYTHING ELSE</h3>
            <div className="bio-sub__misc-wrapper">
              <img className="bio-sub__misc-image" src="/images/kore.jpg" alt="dog image" />
              <p className="bio-sub__misc-content">In addition to staring at my screen most of the day, i enjoy spending time with my dog. </p>
            </div>
            <div className="bio-sub__misc-wrapper"> <img className="bio-sub__misc-icon" src="/images/pride.png" alt="" /> <p>A proud member of the LGBTQ+ community. </p></div>
            <div className="bio-sub__misc-wrapper"> <img className="bio-sub__misc-icon" src="/images/sdg.png" alt="" /> <p>Advocate for Sustainable Development Goals - Click here to view my university project.</p></div>
          </div>
        </div>
      </section>

      <section className="links">
        <h4 className={linkTitleInView ? "links__title active" : "links__title"} ref={linkeTitleRef}>THIS SITE WAS MADE WITH</h4>
        <div className="container">
          <c.FanCard />
        </div>
      </section>
    </>
  )
}

export default HomePage