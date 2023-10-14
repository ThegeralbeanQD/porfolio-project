import { useRef, useEffect } from "react";

const InfinateScroller = () => {
  const scrollerRef = useRef(null);
  const scrollerInnerRef = useRef(null);

  const addAnimation = () => {
    if (scrollerRef.current) {
      scrollerRef.current.setAttribute("data-animated", "true");
    }
  
    const scrollerInner = scrollerInnerRef.current;
    const scrollerContent = Array.from(scrollerInner.children);
  
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      scrollerInner.appendChild(duplicatedItem); // Append to scrollerInner
    });
  };
  

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);


  return (
    <div className="scroller" ref={scrollerRef}>
      <ul className="scroller__list scroller__inner" ref={scrollerInnerRef}>
      <li className="scroller__list-item">
          <img className="scroller__list-item-image" src="/tech-images/html.png" alt="html logo" />
        </li>
        <li className="scroller__list-item">
          <img className="scroller__list-item-image" src="/tech-images/css.png" alt="css logo" />
        </li>
        <li className="scroller__list-item">
          <img className="scroller__list-item-image" src="/tech-images/javascript.png" alt="javascript logo" />
        </li>
        <li className="scroller__list-item">
          <img className="scroller__list-item-image" src="/tech-images/react.png" alt="react logo" />
        </li>
        <li className="scroller__list-item">
          <img className="scroller__list-item-image" src="/tech-images/vite.png" alt="vite logo" />
        </li>
        <li className="scroller__list-item">
          <img className="scroller__list-item-image" src="/tech-images/sass.png" alt="sass logo" />
        </li>
        <li className="scroller__list-item">
          <img className="scroller__list-item-image" src="/tech-images/node.png" alt="node logo" />
        </li>
        <li className="scroller__list-item">
          <img className="scroller__list-item-image" src="/tech-images/express.png" alt="express logo" />
        </li>
        <li className="scroller__list-item">
          <img className="scroller__list-item-image" src="/tech-images/csharp.png" alt="csharp logo" />
        </li>
        <li className="scroller__list-item">
          <img className="scroller__list-item-image" src="/tech-images/jest.png" alt="jest logo" />
        </li>
      </ul>
    </div>
  )
}

export default InfinateScroller