/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Landing = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-right">
              <p
                className="text-3xl lg:text-5xl font-bold "
                style={{ lineHeight: 1.3 }}
              >
                مطور ومصمم واجهات امامية!
              </p>
              <p className="py-6">
                أحوّل الرؤى إلى تصاميم مذهلة وواجهات مستخدم متطورة. اوفر تجربة
                استثنائية وسلسة من خلال التصميم الجميل والوظائف الفعالة
              </p>
            </div>
          </div>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-right w-full sm:w-6/12">
              <div className="mockup-code ">
                <pre data-prefix="$" className="text-left pl-6">
                  <code>npm i React</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
