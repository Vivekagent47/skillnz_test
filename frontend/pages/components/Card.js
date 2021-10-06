import React from "react";
import CardData from "../data/raw";
import Heart from "../Icons/Heart";
import WhatsappIcon from "../Icons/whatsappicon";
import Share from "../Icons/Share";
import Company from "../Icons/Company";
import RightCaret from "../Icons/RightCaret";
import Stipen from "../Icons/Stipen";

export default function Card() {
  return (
    <div style={{ margin: "24px 0" }}>
      <div className="card_filters">
        <button>
          Duration{" "}
          <RightCaret
            fill="#A9ACCB"
            style={{ margin: "0 8px", transform: "rotate(90deg)" }}
          />
        </button>
        <button>
          Duration{" "}
          <RightCaret
            fill="#A9ACCB"
            style={{ margin: "0 8px", transform: "rotate(90deg)" }}
          />
        </button>
        <button>
          Duration{" "}
          <RightCaret
            fill="#A9ACCB"
            style={{ margin: "0 8px", transform: "rotate(90deg)" }}
          />
        </button>
        <button>
          Duration{" "}
          <RightCaret
            fill="#A9ACCB"
            style={{ margin: "0 8px", transform: "rotate(90deg)" }}
          />
        </button>
        <button>Duration</button>
      </div>

      <div className="card_grid">
        {CardData.data.map((data, index) => {
          return (
            <div className="card" key={index}>
              <div className="card_head">
                <div>
                  <p>{data.internship_type}</p>
                </div>
                <div>
                  <Share
                    width="24px"
                    height="24px"
                    style={{ margin: "0 8px" }}
                  />
                  <WhatsappIcon
                    width="24px"
                    height="24px"
                    style={{ margin: "0 8px" }}
                  />
                  <Heart
                    fill={data.fav ? "#F26A7E" : "#C9CBE2"}
                    width="24px"
                    height="24px"
                    style={{ margin: "0 8px" }}
                  />
                </div>
              </div>

              <div className="card_comp">
                <Company width="45px" height="45px" />
                <h1>{data.company_name}</h1>
                <h3>{data.position}</h3>
                <p>
                  {data.job_post_date} {data.applied_candidates}
                </p>
              </div>

              <div className="card_details">
                <div className="details_ele">
                  <Stipen width="12px" height="12px" />
                  <p>
                    {data.stipend} {data.stipend_currency}
                  </p>
                </div>
                <div className="details_ele">
                  <Stipen width="12px" height="12px" />
                  <p>{data.internship_duration} Months</p>
                </div>

                <div className="details_ele">
                  <Stipen width="12px" height="12px" />
                  <p>{data.apply_by}</p>
                </div>
              </div>

              <div className="card_skills">
                {data.skills.map((skill, index) => {
                  return <p key={index}>{skill}</p>;
                })}
              </div>

              <div className="card_buttons">
                <button>Apply Now</button>
                <button>
                  View Details
                  <RightCaret style={{ margin: "0 0 0 8px" }} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .card_filters {
          width: 80%;
          display: flex;
          margin: auto;
          align-items: center;
          justify-content: space-evenly;
          border: 1px solid #c9cbe2;
          box-sizing: border-box;
          /* box-shadow: 1px 12px 80px rgba(129, 129, 129, 0.24); */
          border-radius: 12px;
        }

        .card_filters button {
          width: 20%;
          padding: 16px 32px;
          background: none;
          border: none;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 12px;

          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 19px;
          text-transform: uppercase;
          color: #a9accb;
        }

        .card_filters button:nth-child(5) {
          border: 2px solid #f26a7e;
          box-sizing: border-box;
          border-radius: 12px;
        }

        .card_grid {
          max-width: 100%;
          padding: 48px;
          margin: 0 auto;
          display: grid;
          grid-gap: 2rem;
          grid-template-columns: repeat(3, 1fr);
        }

        .card {
          padding: 1.5rem;
          border: 1px solid #c9cbe2;
          border-radius: 10px;
          background: #ffffff;
        }

        .card_head {
          display: flex;
          justify-content: space-between;
        }

        .card_head p {
          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          display: flex;
          align-items: center;
          color: #404366;
        }

        .card_head div {
          display: flex;
        }

        .card_comp {
          margin: 16px 0;
        }

        .card_comp h1 {
          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          display: flex;
          align-items: center;
          color: #404366;
          margin-bottom: 16px;
        }

        .card_comp h3 {
          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 19px;
          line-height: 23px;
          display: flex;
          align-items: center;
          color: #404366;
        }

        .card_comp p {
          margin-top: 4px;
          font-family: "Inter", sans-serif;
          font-style: normal;
          font-size: 12px;
          line-height: 15px;
          display: flex;
          align-items: center;
          color: #c9cbe2;
        }

        .card_details {
          margin: 0;
          display: grid;
          grid-gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }

        .details_ele {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }

        .details_ele p {
          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 15px;
          color: #404366;
          margin: 0 12px;
        }

        .card_skills {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 8px 0;
        }

        .card_skills p {
          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: normal;
          font-size: 12px;
          line-height: 14px;
          color: #c9cbe2;
          margin: 8px;
        }

        .card_buttons {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .card_buttons button:nth-child(1) {
          background: #ffffff;
          border: 1px solid #f26a7e;
          box-sizing: border-box;
          border-radius: 4px;
          padding: 8px 24px;
          cursor: pointer;

          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;
          color: #404366;
        }

        .card_buttons button:nth-child(1):hover {
          background: #f26a7e;
          color: #ffffff;
        }

        .card_buttons button:nth-child(2) {
          background: #ffffff;
          cursor: pointer;
          border: none;
          font-family: "Inter", sans-serif;
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
          color: #c9cbe2;
          display: flex;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .card_grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 700px) {
          .card_grid {
            padding: 24px;
            grid-template-columns: repeat(1, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
