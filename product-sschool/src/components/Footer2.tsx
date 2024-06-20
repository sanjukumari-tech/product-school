import React from 'react'
import "./footer2.css";
import { FaCaretSquareRight } from "react-icons/fa";
import { FaChrome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { Button, ButtonGroup } from '@chakra-ui/react'

import { Divider ,Heading} from '@chakra-ui/react'



const Footer2 = () => {
  return (
    <>
    <div id="footer">
        
    <div className="foot-nav-first">
        <div><img src="https://productschool.com/_next/static/media/logo-1__dark.88e7797d.svg" alt=""/> </div>
        <div><p>Got questions?We're here to help</p> <Button colorScheme='blue'>CONTACT US</Button></div>
    </div>
    <div className="footer-nav-second">
        <div>
            <h4>Certificate</h4>
            <p>Product Manager Certification</p>
            <p>Artificial Intelligence for Product Certification</p>
            <p>Product Leader Certification</p>
            <p>Product Marketing Manager Certification</p>
            <p>Upcoming Start Dates</p>
        </div>
        <div>
            <h4>For Teams</h4>
            <p>Custom Product Training</p>
            <p>AI Training</p>
        </div>
        <div>
            <h4>Resources</h4>
            <p>The Product Book</p>
            <p>The Product Management Blog</p>
            <p>The Product Podcast</p>
            <p>Product Management Templates</p>
            <p>More Free Resources</p>
        </div>
        <div>
            <h4>Events</h4>
            <p>Free Daily Events</p>
            <p>Product Conferences</p>
            <p>The Proddy Awards</p>
            <p>Sponsorships</p>
        </div>
        <div>
            <h4>Company</h4>
            <p>About Us</p>
            <p>Student Reviews</p>
            <p>Our Instructors</p>
            <p>Apply to Teach</p>
            <p>Carrers</p>
            <p>FAQ</p>
        </div>
        
    </div>
    <div className="socialmedia">
    <FaCaretSquareRight />    <FaChrome />
    <FaLinkedinIn/>
    <FaFacebook/>
    <FaFacebookMessenger/>
    <FaMediumM/>

    </div>
    <hr/>
    <div className="footer-nav-subfoot">
        <div>© 2024, Product School Inc</div>
        <div> 
            <p>Code of Conduct</p><Divider orientation='vertical' />
            <p>Privacy Policy</p><Divider orientation='vertical' />
            <p>Terms of Service</p> 
        </div>
    </div>
    <hr/>
    <div className="footer-nav-sub2">
        <div>Regulatory information</div>
        <div>
            <p>Catalog</p><Divider orientation='vertical' />
            <p>School Performance Fact Sheets</p><Divider orientation='vertical' />
            <p>Bureau for Private Postsecondary Education Annual Report</p><Divider orientation='vertical' />
            <p>Bureau for Private Postsecondary Education</p>
        </div>
    </div>
</div>
</>
  )
}

export default Footer2;