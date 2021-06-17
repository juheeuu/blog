
import profile_img from './profile.jpeg';
import vits_img from './publication/vits.jpeg';
import {Section} from './Section.js';
import {Publication} from './Publication.js';

import './App.css';

function App() {

  const text_div = 
    <div style={{marginLeft: '2vw', marginBottom: 20, marginTop: 15, fontSize: 18, font: 'Fira Sans', color: '#4b4b4b'}}> 
      Hi! I am Juhee Son, MS student at KAIST School of Computing, advised by <a href="https://aliceoh9.github.io/">Alice Oh</a>. My research interests are non-autoregressive sequence generation, controllable language generation
    </div>
  
  const education_div =
    <div style={{marginLeft: '2vw', marginBottom: 20, marginTop: 15, fontSize: 18, font: 'Fira Sans', color: '#4b4b4b'}}> 
      <ul>
        <li>
          M.S in Computer Science, <a href="https://uilab.kaist.ac.kr/">uilab</a>, KAIST, 2021-
        </li>
        <li>
          B.S in Computer Science, KAIST, 2016-2021
        </li>
      </ul>
    </div>

const work_experience =
  <div style={{marginLeft: '2vw', marginBottom: 20, marginTop: 15, fontSize: 18, font: 'Fira Sans', color: '#4b4b4b'}}> 
    <ul>
      <li>
        Machine Learning Researcher, <a href="https://www.kakaoenterprise.com/">Kakao Enterprise</a>, 2020-2021.2
      </li>
      <li>
        Machine Learning Research Intern, <a href="https://www.kakaocorp.com/">kakao</a>, 2019.7-2020 
      </li>
      <li>
        SWE Intern, <a href="https://hayanmind.com/">Hayanmind</a>, 2018.7-2019.2
      </li>
    </ul>
  </div>

  const publication = 
    <div style={{marginLeft: '3vw', marginBottom: 20, marginTop: 15, fontSize: 18, font: 'Fira Sans', color: '#4b4b4b'}}> 
      <ul> 
        <li>
            {<Publication 
                img={vits_img} 
                title="Conditional Variational Autoencoder with Adversarial Learning for End-to-End Text-to-Speech"
                authors={<div>Jaehyeon Kim, Jungil Kong, <b>Juhee Son</b></div>}
                conf="ICML, 2021"
                contents="We propsed an end-to-end training method for text-to speech synthesis. With this method, we can synthesize high-quality raw waveforms from text directly"
                paperlink="https://arxiv.org/abs/2106.06103"
              />}
        </li>
      </ul>
    </div>

  const contact = 
  <div style={{marginLeft: '3vw', marginBottom: 20, marginTop: 15, fontSize: 18, font: 'Fira Sans', color: '#4b4b4b'}}> 
    sjh5665@kaist.ac.kr,
    sjh5665@gmail.com
  </div>

  return (
    <div className="App">
      <header className="App-header">
      <img src={profile_img} style={{
        "width": 250,
        "height": 250,
        "border-radius": 125,
        "margin-top": 20,
        "margin-bottom": 5,

      }}/>

      <div className="header-name">
        Juhee Son
      </div>

      <div style={{"color": "#D97925", "margin-top": 3, "margin-bottom": 30, font: 'Fira Sans'}}>
        NLP & Deep Learning Researcher
      </div>

      <hr />
      </header>
      <Section title="About" innerdiv={text_div}/>
      <Section title="Education" innerdiv={education_div}/>
      <Section title="Work experience" innerdiv={work_experience}/>
      <Section title="Publication" innerdiv={publication}/>
      <Section title="Contact" innerdiv={contact}/>

    </div>
  );
}

export default App;
