import '../styles/featureSection.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const features = [
    {
        id: '01',
        icon: <i className="fa-solid fa-phone" style={{ fontSize: '30px' }}></i>,
        title: 'User-Friendly Interface',
        description: 'Our platform offers seamless task management to boost your efficiency.',
    },
  {
      id: '02',
      icon: <i className="fa-solid fa-paper-plane" style={{ fontSize: '30px' }}></i>,
      title: 'Collaborate & Share Effortlessly',
      description: 'Invite team members to work together and achieve your goals faster.',
    },
    {
        id: '03',
        icon: <i className="fa-solid fa-users" style={{ fontSize: '30px' }}></i>,
        title: 'Effortless Collaboration',
        description: 'Invite team members to work together and achieve your goals faster.',
    },
    {
        id: '04',
        icon: <i className="fa-solid fa-list-check" style={{ fontSize: '30px' }}></i>,
        title: 'Seamless Access',
        description: 'Stay connected and manage your tasks on the go with ease.',
    },
];

export default function FeatureSection() {
  return (
    <section className="features py-5">
      <Container>
        <h2 className="text-center fw-bold mb-4 ftitle">Transform Your Productivity with Our</h2>
        <h2 className="text-center fw-bold mb-5 ftitle">Innovative To-Do List Features</h2>
        <Row>
          {features.map((feature) => (
            <Col md={3} key={feature.id}>
              <Card className="feature-card text-center p-4 mb-4">
                <div className="feature-icon mb-3">{feature.icon}</div>
                <h5 className="feature-title mb-2">{feature.title}</h5>
                <div className="feature-underline mb-3"></div>
                <p className="feature-description">{feature.description}</p>
                <div className="feature-number">{feature.id}</div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

