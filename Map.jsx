import React from "react";

const Map = () => {
  return (
    <div>
      <div className="mil-map-frame-end mil-up">
        <div className="mil-map">
          <iframe
          title="FeizhouCom"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3324.349305035921!2d-7.5163623!3d33.5702788!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDM0JzEzLjAiTiA3wrAzMCc1OC45Ilc!5e0!3m2!1sen!2sma!4v1713801813063!5m2!1sen!2sma"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
