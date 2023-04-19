import React from "react";
import about from "../images/About us page-pana.png";
import contact from "../images/Contact us-amico.png";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";

export default function About(props) {
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = React.useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
    );
  };

  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/service") {
      const section = document.querySelector("#service");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const submitmsg = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your message has been sent",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const [formData, setFormData] = React.useState({
    firstname: "",
    lname: "",
    email: "",
    subject: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    if (
      formData.firstname &&
      formData.lname &&
      formData.email &&
      formData.subject
    ) {
      if (formData.email.includes("@") && formData.email.includes(".")) {
        submitmsg();
        setFormData({
          firstname: "",
          lname: "",
          email: "",
          subject: "",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill all the fields!",
        timer: 2500,
      });
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className=" container mt-5  mb-5">
      <div className=" row row-cols-1 row-cols-md-2 heropage mt-5  ">
        {" "}
        <div className="col mb-md-4 secondpart abtt ">
          <img src={about} alt="heroimg " className=" img-fluid" />
        </div>
        {/* the second part of the about page  */}
        <div className="col mb-5">
          <div
            className={
              props.updateDarkMode
                ? " mb-4 firstpart darkmode"
                : " mb-4 firstpart "
            }
          >
            <p>
              Connecting <span>You</span> to{" "}
              <span>
                the <br /> Future
              </span>{" "}
              <br />
            </p>
            <h5 className="mb-3">
              A Revolutionary Smart Devices in our E-Store the best E-Commerce
              Experience
            </h5>
          </div>
          Metiri Abderrahmane, [5/15/2023 4:07 AM]
          <div className="mt-md-5">
            <ReadMore>
              At E-Store, we pride ourselves on providing a unique and special
              shopping experience for those seeking the latest and greatest in
              smart devices. We specialize in offering top-of-the-line
              smartphones and smartwatches, headphones , providing customers
              with access to the most innovative and cutting-edge technology
              available on the market. We understand that the world is
              constantly evolving and changing, which is why we offer worldwide
              delivery to ensure that our products can be enjoyed by customers
              all over the globe. Our commitment to customer satisfaction is
              unwavering, which is why we work around the clock, 24/7, to ensure
              that our services are always available to you.
            </ReadMore>
          </div>
        </div>
      </div>
      {/* the Services of the website  */}
      <div className="row row-cols-1 row-cols-md-3 mt-5">
        <div className="col mb-4">
          <div className=" h-100">
            <div className="services d-flex flex-column align-items-center gap-3 ">
              <i className="fa-solid fa-list-check"></i>
              <h5 className="card-title">Extensive Selection</h5>
              <p className="card-text text-center">
                Find everything you need and want in the world of smart devices
              </p>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className=" h-100">
            <div className="services d-flex flex-column align-items-center gap-3 ">
              <i className="fa-solid fa-truck "></i>
              <h5 className="card-title">Global Shipping</h5>
              <p className="card-text text-center">
                We offer fast and reliable global shipping, delivering to
                customers all around the world
              </p>
            </div>
          </div>
        </div>

        <div className="col mb-4">
          <div className=" h-100">
            <div className="services d-flex flex-column align-items-center gap-3 ">
              <i className="fa-solid fa-phone"></i>
              <h5 className="card-title">24/7 Customer Service</h5>
              <p className="card-text text-center">
                Our dedicated customer service team is available 24/7 to assist
                you with any questions or concerns you may have
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Services call */}

      <div
        className="row row-cols-1 row-cols-md-2 mt-5 pt-5 servici "
        id="service"
      >
        <div className="col mb-4 formilo-father">
          <form className="formilo" onSubmit={handleSubmit}>
            <div className="row row-cols-2">
              <label htmlFor="fname"></label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="First Name"
                onChange={handleInputChange}
              />
            </div>

            <div className="row row-cols-2">
              <label htmlFor="lname"></label>
              <input
                type="text"
                id="lname"
                name="lname"
                placeholder="Last Name"
                onChange={handleInputChange}
              />
            </div>

            <div className="row row-cols-2">
              <label htmlFor="email"></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="exemple@mail.com "
                onChange={handleInputChange}
              />
            </div>

            <div className="row row-cols-2">
              <label htmlFor="subject"></label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
                style={{
                  height: "200px",
                  width: "100%",
                  margin: "10px auto",
                }}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <button class="add-btn-save" type="submit">
              Send Message
            </button>
          </form>
        </div>

        <div className="container col">
          <div className=" mb-md-4 secondpart abtt d-flex justify-content-end ">
            <img src={contact} alt="heroimg " className=" img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}
