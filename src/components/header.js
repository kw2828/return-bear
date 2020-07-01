import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <p className="Bear">🐻</p>
      <h2>ReturnBear</h2>
    </div>
  </div>
)

export default Header
