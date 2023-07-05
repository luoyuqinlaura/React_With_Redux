import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard';
// for none JS File,we need 后缀
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
          <p className="subtitle">Primary subtitle</p>
        </div>
      </section>

      {/* step1: write our own attributes, step2: react will automatically turn it into object */}

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard title="Alexa" handle="Akdjsfh" image={AlexaImage} />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="dfgdsfg"
                image={CortanaImage}
              />
            </div>
            <div className="column is-4">
              <ProfileCard title="Siri" handle="rth" image={SiriImage} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
