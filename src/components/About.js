// import bgImg from "./images/bg about.jpg";
import "./style/about.css";

export default function About() {
  const urlAb = "";
  return (
    <>
      <div className="about-cont d-flex justify-content-center">
        <article
          className="abt-img"
          //   style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="about-text">
            <h3 className="about-head">About us</h3>
            <div className="txt-cont">
              Starling bags NI is a manufacturer and wholesale supplier of
              reusable bags to all sorts of businesses. We based in Belfast,
              Northern Ireland partnering with manufacturing and supply chain
              company in India.
            </div>
            <div className="txt-cont">
              Our wide range of collections include cotton, canvas and jute
              materials to choose from. We can make promotional bags in any
              shape, size, colour or print and can also customise any aspect of
              your bag including labels, handles, pockets or gussets.
            </div>
            <div className="txt-cont">
              We have a great attention to detail, quality and making. To
              understand the care we put into each bag, you have to see it in
              action. To do this, we strive for the best quality materials, the
              best choice of colour and the quickest service we can offer.
            </div>
            <div className="txt-cont">
              You describe it, we'll create it. Please get in touch with us for
              more information or quotation
              <a href={urlAb} id="urlAb">
                info@abc.co.uk
              </a>
              at or call
              <a href={urlAb} id="urlAb">
                +917708365186
              </a>
              to speak to one of our team.
            </div>
          </div>
          <div className="about-img">
            <p>imgvfsdfg</p>
          </div>
        </article>
      </div>
    </>
  );
}
