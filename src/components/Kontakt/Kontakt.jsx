import React from "react";
import paperPlan from "../../assets/Paper plane.jpg";
import "./Kontakt.css";
import { Link } from "react-router-dom";

function Kontakt() {
  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-md-4 d-flex justify-content-start align-items-end pt-5 p-0 ">
          <img
            src={paperPlan}
            className="passbort-img"
            alt="Paper Plane Illustration"
            style={{ width: "70%" , height: "66%" }}
          />
        </div>
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12 pt-5 text">
              <p>
                Haben Sie unsere {" "} 
                     <Link to ="/faq" className="color-faq text-decoration-underline">
                    FAQ </Link> {" "} gesehen? Dort finden Sie
                möglicherweise die Anrwort,
                <br />
                die Sie suchen!
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 titel">
              <p>LASSEN SIE UNS KONTAKT TREITEN!</p>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12 g-0 ">
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control style-email"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                  />
                </div>

                <div className="form-group mt-2">
                  <textarea
                    className="form-control style-email"
                    id="exampleFormControlTextarea1"
                    placeholder="Geben Sie Ihre Nachricht ein.."
                    style={{ height: "200px" }}
                    rows="10"
                   
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-3">
              <button type="submit" className="btn-home-register rounded-pill ">
                Nachricht senden
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kontakt;