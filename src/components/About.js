import bgImg from "./images/about 1.jpg";
import "./style/about.css";

export default function About() {
  const urlAb = "";
  return (
    <>
      <div className="ab-hr mx-2">
        <hr />
      </div>
      <div className="about-cont">
        <article
          className="abt-img container"
          //   style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="about-text">
            <h3 className="about-head text-center py-3">About us</h3>
            <div className="txt-cont">
              <p className="about-para">
                Abc bags NI is a manufacturer and wholesale supplier of reusable
                bags to all sorts of businesses. We based in Belfast, Northern
                Ireland partnering with manufacturing and supply chain company
                in India. <br />
                <br />
                Our wide range of collections include cotton, canvas and jute
                materials to choose from. We can make promotional bags in any
                shape, size, colour or print and can also customise any aspect
                of your bag including labels, handles, pockets or gussets.
                <br />
                <br />
                We have a great attention to detail, quality and making. To
                understand the care we put into each bag, you have to see it in
                action. To do this, we strive for the best quality materials,
                the best choice of colour and the quickest service we can offer.
                <br />
                <br />
                You describe it, we'll create it. <br />
                <br /> Please get in touch with us for more information or
                quotation
                <a href={urlAb} id="urlAb">
                  info@abc.co.uk
                </a>
                at or call
                <a href={urlAb} id="urlAb">
                  +917708365486
                </a>
                to speak to one of our team.
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="about-img text-center">
            <img className="ab-img" src={bgImg} alt="Bag image" />
          </div>
        </article>
      </div>
      <div className="ab-hr mx-2">
        <hr />
      </div>
    </>
  );
}
