"use client";
import { Container,Col,Row } from 'react-bootstrap';
import Link from 'next/link';
import { useState } from 'react';
import {FaTwitter,FaInstagram,FaFacebook} from 'react-icons/fa';
import {AiOutlineMenuFold,AiOutlineMenuUnfold} from 'react-icons/ai';
export default function Navigation() {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const toggleNav = () => {
    navIsOpen ? setNavIsOpen(false) : setNavIsOpen(true);
  }
  return (
    <div className={`navigation ${navIsOpen && '--nav-open'}`}>
      <Row className='align-items-center justify-content-md-between justify-content-center'>
        <Col md={8} className="navigation__toggler__items">
          <div className="navigation__items__container">
            <ul className="navigation__items list-unstyled  d-flex flex-md-row  flex-column   align-items-center">
              <li className="navigation__item">
                <Link href="">home</Link>
              </li>
              <li className="navigation__item">
                <Link href="">yoursite</Link>
              </li>
              <li className="navigation__item">
                <Link href="">lorem ipsum </Link>
              </li>
              <li className="navigation__item">
                <Link href="">contact</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col md={4} className="d-flex justify-content-md-end justify-content-center">
          <div className="navigation-left">
          <ul className="navigation__items list-unstyled d-flex flex-md-row  flex-column d-flex align-items-center">
              <li className="navigation__item">
                <Link href="">
                  <FaFacebook />
                </Link>
              </li>
              <li className="navigation__item">
                <Link href="">
                  <FaInstagram />
                </Link>
              </li>
              <li className="navigation__item">
                <Link href="">
                  <FaTwitter />
                </Link>
              </li>
          </ul>
          </div>
        </Col>
        <div className='toggler__btn d-md-none d-flex align-items-center justify-content-center col-12' onClick={toggleNav}>
          {navIsOpen ? <AiOutlineMenuFold /> : <AiOutlineMenuUnfold /> }
          
          </div>
      </Row>
    </div>
  )
};