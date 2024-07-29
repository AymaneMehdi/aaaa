import Data from "@data/sections/team.json";
import Link from "next/link";
import ArrowIcon from "@layouts/svg-icons/Arrow";
import LinesIcon from "@layouts/svg-icons/Lines";

const TeamSection = () => {
  return (
    <>
    
      {/* team */}
      <section className="bg-contact">
      <div class="card2">
      <div data-position="top" class="carousel">
    <span class="carousel__text"
      >• FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom 
      • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom 
      • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom
      • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom 
      • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom 
      </span>
  </div>
        <div className="container mil-p-120-30 sm:pb-12">
          <div className="row justify-content-between align-items-center">
            <div className="text-center">
              <div className="mil-mb-90">
                <div
                  className="mil-text text-4xl text-white mil-up mil-mb-60 sm:pb-10 mb-3"
                  dangerouslySetInnerHTML={{ __html: Data.description }}
                />

                <div className="mil-up  flex justify-center items-center">
                  <Link
                    href={Data.button.link}
                    className="mil-button-contact mil-arrow-place"
                  >
                    <span>{Data.button.label}</span>
                    <ArrowIcon />
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="mil-team-list">
                <div className="mil-lines-place">
                  <LinesIcon />
                </div>

                <div className="row mil-mb-60">
                  <div className="col-sm-6"></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div data-direction="right" data-position="bottom" class="carousel">
    <span class="carousel__text"
    >• FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom 
    • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom 
    • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom
    • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom 
    • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom • FeizhouCom 
      </span>
  </div>
  </div>
      </section>
      
      {/* team end */}
    </>
  );
};

export default TeamSection;