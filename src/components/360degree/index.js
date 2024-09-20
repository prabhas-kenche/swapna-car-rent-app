import { useEffect } from "react";
import './index.css'

const Car360Viewer = () => {
  useEffect(() => {
    // Dynamically load the script for the 360 viewer
    const script = document.createElement("script");
    script.src = "https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Ensure the 360 view works after the script is loaded
      window.CI360.init();
    };

    return () => {
      // Cleanup the script if the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="pt-5 pb-5">
      <div
        id="gurkha-suv"
        className="cloudimage-360"
        data-folder="https://scaleflex.cloudimg.io/v7/demo/suv-orange-car-360/"
        data-filename-x="orange-{index}.jpg"
        data-amount-x="73"
        data-autoplay
        data-autoplay-behavior="spin-x"
        data-hide-loader="true"
      ></div>
    </div>
  );
};

export default Car360Viewer;
