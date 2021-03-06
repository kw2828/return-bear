import PropTypes from "prop-types"
import React from "react"
import './footer.css'


const Footer = ({ siteTitle }) => (
  <div className="Footer">
    <div className="FooterGroup">
      <div className="FooterInfo">
        <span><p className="nyc">San Francisco & NYC</p></span> 
        <p className="copyright">© Workpal Inc., 2020. All rights reserved</p>
      </div>
      <div className="Icons">
        <div className="logos-footer">
        </div>
      </div>
      <p className="copyright-mobile">© Workpal Inc., 2020. All rights reserved</p>
    </div>
  </div>
)

export default Footer
