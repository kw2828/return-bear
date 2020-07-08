import React from "react";
import Layout from "../components/layout";
import Image from "../components/image";
import WorkingIcon from '../components/working'
import BearMobile from '../components/bear-mobile'
import SEO from "../components/seo";
import addToMailchimp from 'gatsby-plugin-mailchimp'
import Hero from './'


export default class HeroPage extends React.Component {
    state = {
        phone: "",
        submitted: false,
    };
    
    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    };
    
    validatePhone(phone) {
        var re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        return re.test(String(phone).toLowerCase());
    }
    
    handleSubmit = event => {
        event.preventDefault();

        const phone = this.state.phone
        const validPhone = this.validatePhone(phone)
        if (validPhone === true) {
          // addToMailchimp(phone)
          this.setState({ submitted: true })
        } else {
          alert(`Please enter a valid email number! ${phone}`);
        }
    };

    render() {
        const hasSubmitted = this.state.submitted;
        let button;
    
        if (hasSubmitted) {
          button = <button type="submit" className="submitted" />
        } else {
          button = <button type="submit" className="not_submitted" />
        }
        return (
            <div className="Hero">
              <SEO title="Home" />
              <div className="HeroGroup">
                <div className="mobile-image">
                  <BearMobile/>               
                </div>
                <div className="info">
                  <h1>
                    Returns are unbearable<br /> We make it beary easy
                  </h1>
                  <p className="info-subtext">
                  Returns are such a hassle. At ReturnBear we make your customers happy by making returns easy. We help you free up your reverse logistic bottlenecks.
                  </p>
                  <form onSubmit={this.handleSubmit} className="form-group">
                        <div className="row">
                          <input
                              type="text"
                              name="phone"
                              placeholder="name@address.com"
                              value={this.state.phone}
                              onChange={this.handleInputChange} />    
                          {button}                
                      </div>
                  </form>
                </div>
                <div className="image">
                  <WorkingIcon/>               
                </div>
              </div>
            </div>
        );
    }
}