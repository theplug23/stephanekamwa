import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Container, Row, Col } from 'react-bootstrap';

const SkillsSection = () => {
  const skills = [
    { skill: 'Illustrator', percentage: 100 },
    { skill: 'Photoshop', percentage: 90 },
    { skill: 'Indesign', percentage: 70 },
    { skill: 'Premiere Pro', percentage: 100 },
    { skill: 'After effect', percentage: 70 },
    { skill: 'Blender', percentage: 70 },
    { skill: 'HTML/CSS', percentage: 100 },
    { skill: 'Javascript', percentage: 80 },
    { skill: 'ReactJS', percentage: 80 },
    { skill: 'C', percentage: 100 },
    { skill: 'C++', percentage: 80 },
    { skill: 'Wordpress', percentage: 100 },
    { skill: 'Meta Ads', percentage: 100 },
    { skill: 'Google Ads', percentage: 100 },
    { skill: 'SEO', percentage: 100 },
  ];

  return (
    <Container>
      <Row>
        {skills.map((skillData, index) => (
          <Col md={4} key={index} className="text-center mb-5">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ width: '100px', height: '100px', marginRight: "10px" }}>
                <CircularProgressbar
                  value={skillData.percentage}
                  text={`${skillData.percentage}%`}
                  styles={{
                    path: {
                      stroke: '#b99226',
                    },
                    text: {
                      fill: '#b99226',
                      fontSize: '16px',
                    },
                  }}
                />
              </div><br/>
              <p style={{color:"white"}}>{skillData.skill}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SkillsSection;
