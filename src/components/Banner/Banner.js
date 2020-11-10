import React, {useState, useEffect} from "react";
import "./Banner.scss";

function Banner({translations}) {
  const bannerMobImg = "./img/shutterstock_616155593.jpg";
  const bannerDeskImg = "./img/rendered.jpg"
  const [version, setVersion] = useState();
  const [clientWidth, setClientWidth] = useState(window.innerWidth);

  function debounce(handler, ms) {
    let timer;
    return () => {
      clearTimeout(timer);
      
      timer = setTimeout(() => {
        handler();
      }, ms)
    };
  }

  useEffect(() => {
    const handleResize = debounce(() => {
      setClientWidth(window.innerWidth);
    }, 1000);
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    clientWidth < 1200 ? setVersion({backgroundImage: `url(${bannerMobImg})`}) : setVersion({backgroundImage: `url(${bannerDeskImg})`});
  }, [clientWidth]);

  return (
    
    <section
      className="banner banner-mob"
        style={version}>
        <div className="banner__info banner__info--main"><span style={{textTransform: "uppercase"}}>{translations.main.sub}</span><br/>{translations.main.sup}</div>
        <div className="banner__info banner__info--details">{translations.sub}</div>
        <div className="banner__dark-layer"
        style={{backgroundImage: 'url("./img/banner_dark_layer.png")'}}>
        </div>
    </section>
  );
}

export default Banner;
