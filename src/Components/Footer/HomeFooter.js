import React from "react";
import {Box,Container,Row,Column,FooterLink,Heading,} from "./FooterStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			{/* <Heading>Row-01</Heading> */}
			<FooterLink href="#">SIMULASI KPR</FooterLink>
			<FooterLink href="#">ABOUT US</FooterLink>
			<FooterLink href="#">CONTACT</FooterLink>
		</Column>
		<Column>
			<Heading>Kantor Pusat </Heading>
            <p className=""> Jl. MT. Haryono Kav. 50-51</p>
            <p>Phone. +6221 798 8266, 798 9837
                Fax. +6221 798 0625, 798 0238</p>
            <p> Connect</p>
            <FooterLink href="#">
            
			<i className="fab fa-facebook">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink>
            <i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
            <i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
            <i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
            
   		</Column>

		<Column>
			<Heading>LOGO HALO KB BUKOPIN</Heading>
			
		
		</Column>
		</Row>
	</Container>
    <h1 style={{ color: "gold",
				textAlign: "center",
				marginBottom: "-50px" }}>
		Copyright © 2021 PT BANK KB BUKOPIN All Rights Reserved
	</h1>

	</Box>
);
};
export default Footer;
