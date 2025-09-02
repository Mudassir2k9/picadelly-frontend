import { useEffect } from "react";

export default function Slideshow() {
  useEffect(() => {
    const slide1 = document.getElementById("slide1");
    const slide2 = document.getElementById("slide2");
    const slide3 = document.getElementById("slide3");

    // Step 1: Show slide 1
    slide1.classList.add("active");

    const t1 = setTimeout(() => {
      // Step 2: Fade out slide1 → show slide2 only
      slide1.classList.remove("active");
      slide2.classList.add("active");
    }, 2000);

    const t2 = setTimeout(() => {
      // Step 3: Show slide3 behind & split slide2
    //   slide3.classList.add("active");
      slide2.classList.add("fade-out", "split-out");
    }, 6000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      <style>{`
        .parent_slideshow{
            position: absolute;
            top:0;
            bottom:0;
            right:0;
            left:0;
        }
        .slideshow {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          z-index: 9999;
          background: #ffffff00;
        }
        .slide {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 3s ease;
        }
        .slide.active {
          opacity: 1;
          z-index: 1;
        }
        #slide3 {
          z-index: 0;
        }
        #slide2 {
          z-index: 1;
        }
        #slide1 {
          z-index: 3 !important;
          background-color: #fff !important;
        }
        #slide2 .split {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
          transition: transform 3s cubic-bezier(.22,.61,.36,1);
        }
        #slide2 .split.left {
          display: flex;
          justify-content: flex-end;
          height: 100%;
          left: 0;
          transform: translateX(0);
          position: relative;
        }
        #slide2 .split.right {
          display: flex;
          justify-content: flex-start;
          height: 100%;
          right: 0;
          transform: translateX(0);
          position: relative;
        }
        #slide2.split-out .left {
          transform: translateX(-100%);
        }
        #slide2.split-out .right {
          transform: translateX(100%);
        }
        #slide3.active {
          background-color: lightgray !important;
        }
      `}</style>

      <div className="slideshow">
        {/* Slide 1 */}
        <div id="slide1" className="slide active">
          <img src="images/AMF_logo.png" className="logo" alt="AMF Media Group" />
          <p>is now</p>
        </div>

        {/* Slide 3 */}
        <div id="slide3" className="slide">
          {/* <img src="new-brand.png" className="logo" alt="New Brand" /> */}
        </div>

        {/* Slide 2 */}
        <div id="slide2" className="slide">
          <div className="split left">
            <img src="images/piccadilly_first-hal.png" alt="Piccadilly Left" />
          </div>
          <div className="split right">
            <img src="images/piccadilly_next-half.png" alt="Piccadilly Right" />
          </div>
        </div>
      </div>
    </>
  );
}
