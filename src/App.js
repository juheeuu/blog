
import profile_img from './profile.jpeg';
import vits_img from './publication/vits.jpeg';
import squid_img from './publication/squid.jpeg';
import hue_img from './publication/hue.jpeg';
import {Section} from './Section.js';
import {Publication} from './Publication.js';

import './App.css';

function App() {

  const text_div = 
    <div style={{marginLeft: '2vw', marginBottom: 20, marginTop: 15, fontSize: 18, font: 'Fira Sans', color: '#4b4b4b'}}> 
      Hi! I am Juhee Son, MS student at KAIST School of Computing, advised by <a href="https://aliceoh9.github.io/">Alice Oh</a>. My research interests are Open domain QA, Dialog generation, Machine Translation, sequence generation
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
            {<Publication 
                img={hue_img} 
                title="HUE: Pretrained Model and Dataset for Understanding Hanja Documents of Ancient Korea"
                authors={<div>Haneul Yoo, Jiho Jin, <b>Juhee Son</b>, JinYeong Bak, Kyunghyun Cho, Alice Oh</div>}
                conf="NAACL Findings, 2022"
                contents="Toward building and evaluating language models for Hanja, we release the Hanja Understanding Evaluation dataset consisting of king prediction, topic classification, named entity recognition, and summary retrieval tasks."
                paperlink=""
              />}
            {<Publication 
                img={squid_img} 
                title="Two-Step Question Retrieval for Open-Domain QA"
                authors={<div>Yeon Seonwoo*, <b>Juhee Son*</b>, Jiho Jin, Sang-Woo Lee, Ji-Hoon Kim, Jung-Woo Ha, Alice Oh</div>}
                conf="ACL Findings, 2022"
                contents="We proposed proposes a two-step question retrieval model, SQUID (Sequential QUestion-Indexed Dense retrieval) and distant supervision for training.  SQUID significantly increases the performance of existing question retrieval models with a negligible loss on inference speed."
                paperlink="https://aclanthology.org/2022.findings-acl.117.pdf"
              />}
            {<Publication 
                img={vits_img} 
                title="Conditional Variational Autoencoder with Adversarial Learning for End-to-End Text-to-Speech"
                authors={<div>Jaehyeon Kim, Jungil Kong, <b>Juhee Son</b></div>}
                conf="ICML, 2021"
                contents="We proposed an end-to-end training method for text-to-speech synthesis. With this method, we can synthesize high-quality raw waveforms from the text directly"
                paperlink="https://arxiv.org/abs/2106.06103"
              />}
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
