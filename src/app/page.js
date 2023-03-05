"use client";
import Image from 'next/image';
import CandyCard from '@/components/CandyCard';
import { Container,Col,Row } from 'react-bootstrap';
import Navigation from '@/components/Navigation';
import vrstva from '@/image/Vrstva-1.png';
import candy1 from '@/image/candy-s 1.png';
import candy2 from '@/image/zmrzlina 1.png';
import candy3 from '@/image/kopecek 1.png';
import Link from 'next/link';
import {TfiGithub} from 'react-icons/tfi';
import {useEffect, useState} from 'react';
export default function Home() {
  
  const [rotateElmDeg,setRotateDeg] = useState(0);

  const rotateZ = () => {
    const clientHeight = document.body.getBoundingClientRect().height;
    const scrollY = window.scrollY;
    const persent = ((scrollY) / clientHeight) * 100; //   calculate Scroll in %
    const getRotateDeg = (persent / 100) * 360;
    setRotateDeg(getRotateDeg);
  }

  useEffect(() => {
    window.addEventListener('scroll', rotateZ)
    return () => {
      window.removeEventListener('scroll',rotateZ)
    }
  },[rotateElmDeg])
  
  return (
    <main >
      <Container>
        <Row>
          <Col xs={1} md={12}>
            <Navigation />
          </Col>
          <Col md={9} lg={6} xs={11}>
            <Row className='left__row'>
              <Col xs={12}>
                <div className='candy__heading text-center'>
                  <h1>SPACE CANDY<br /> STORE</h1>
                </div>
              </Col>
              <Col xs={12}>
                <div className='candy__about'>
                  <div className='about__img'>
                    <Image 
                      style={{transform: `rotateZ(${rotateElmDeg}deg)`  }}
                      src={vrstva}
                      width={233}
                      height={233}
                      alt="vrstva"
                    />
                  </div>
                  <h2 className='about__heading'>
                    Lorem Ipsum
                  </h2>
                  <p className='about__content'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam at arcu a est sollicitudin euismod. Fusce tellus odio, dapibus id fermentum quis, suscipit id erat. Et harum quidem rerum facilis est et expedita distinctio. Suspendisse nisl. Ut tempus purus at lorem. Maecenas lorem. Integer lacinia. Duis pulvinar. Integer malesuada. Proin mattis lacinia justo. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Fusce tellus. Etiam sapien elit, consequat eget, tristique non, venenatis quis, ante.
                  </p>
                </div>
              </Col>
              <Col xs={12}>
                <Row className='justify-content-between align-items-center'>
                  <Col md={4}>
                    <CandyCard img={candy1} body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In laoreet, magna id viverra tincidunt, sem odio bibendum" />
                  </Col>
                  <Col md={4}>
                    <CandyCard img={candy2} body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In laoreet, magna id viverra tincidunt, sem odio bibendum" />
                  </Col>
                  <Col md={4}>
                    <CandyCard img={candy3} body="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In laoreet, magna id viverra tincidunt, sem odio bibendum" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <div className='candy__footer text-center'>
              <Link href='https://github.com/asemali2210'>
                <TfiGithub className='__icon'/>
                github/asemali2210
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  )
}
