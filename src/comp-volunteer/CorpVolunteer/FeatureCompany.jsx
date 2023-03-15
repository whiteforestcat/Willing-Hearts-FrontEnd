import React, { useState } from "react";
import BaseInput from "../../comp-commons/BaseInput";
import BaseButton from "../../comp-commons/BaseButton";

const FeatureCompany = () => {
  const [featureName, setFeatureName] = useState("");

  const handleChange = (e) => {
    setFeatureName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <form className="w-[590px] space-y-9" onSubmit={handleSubmit}>
          <h1>Feature Company</h1>
          <label>
            <input type={"checkbox"} id="feature" />
            Would you like to feature your company on our page?
          </label>
          <BaseInput
            type="string"
            id="feature"
            value={featureName}
            handleChange={handleChange}
            required={false}
            placeholder="Your email address"
            className="mt-9"
          />
          <label>*We will contact you shortly regarding the feature</label>
          <BaseButton
            type="submit"
            label="Submit"
            colour="transparent"
            className="mt-8"
          />
        </form>
      </div>
    </>
  );
};

export default FeatureCompany;
