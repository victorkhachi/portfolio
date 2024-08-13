import React from 'react';
import Inch from '../../assets/inch.png'
import Tookuai from '../../assets/tlogo.png'
import Nftng from '../../assets/logo.png'
import Nftytribe from '../../assets/n-logo.png'
import Ginyverse from '../../assets/ginyverse.jpg'
import './index.scss'



function Works(props) {
    return (
        <div className='work'>
           <section>
            <h3>Places and Projects</h3>
            <p>This Page Displays details of Places Ive worked, and Projects I've Taken part. </p>
            </section> 
           <section>
            <h3>Work Experience</h3>
            
                <dl>
                   <dt><b> Swirge Inc.</b> (<a href='https://swirge.com'>Swirge.com</a>) <small> June 2021- Jan 2022 Internship. Jan 2022 - present Full time</small>
                   </dt>
                   <dd>Swirge is a company that focuses on building web3 powered applications.</dd>
                   <ul>
                    <h3>Front Tools Used :</h3> 
                     <li>React.js</li>
                     <li>Redux .js</li>
                     <li>web3.js</li>
                   </ul>
                 </dl>
                <dl>
                    <dt><b>HarmonicStudioz </b>(<a href="https://harmonicstudioz.com">Harmonicstudioz.com</a>)<small>Front-end Lead. Feb 2022</small></dt>
                    <dd> Harmoicstudios is a digital company that focuses on rendering digital services such as web development and graphic illustrations </dd>
                    <ul>
                        <h4>Notable Projects built with Harmonicstudioz:</h4>
                        <li><b>Nftytribe</b> <small>(<a href="https://nftytribe.io">Nftytribe.io</a>)</small></li>
                        <li><b>NFTng</b> <small>(<a href="https://nftng.com">NFTng.com</a>)</small></li>
                        <li><b>inchperfectstores</b> <small>(<a href="https://inchperfectstores.com">inchperfectstores.com</a>)</small></li>
                    </ul>
                </dl>
                
            
            </section> 

            <section>
                <h3>Works and Projects  <span style={{fontWeight:"lighter",textTransform:"lowercase",opacity:"0.7"}}>(Click on the title to access link)</span></h3>
                <p>Here are some of Kachi's Notable works</p>
                <div  className="project">
                    <div style={{background:'black'}} className='img'>
                        <img src={Inch} alt="" />
                    </div>
                    <div className="write_up">
                        <h4><a href="https://inchperfectstores.com"> Inchperfect Stores</a> </h4>
                        <p>Inchperfect is an e-commerce platform for selling  female bespoke wears.</p>
                        <ul>
                            <h4>Contribution</h4>
                            <li>I built the whole front end Interface</li>

                            <h4>Tools</h4>
                            <li>React.js</li>
                            <li>Redux</li>
                            <li>paystack payment API</li>
                        </ul>
                    </div>
                </div>
                {/* <div className="project">
                    <div className='img'>
                        <img src="" alt="" />
                    </div>
                    <div className="write_up">

                    </div>
                </div> */}
                <div className="project">
                    <div className='img'>
                        <img src={Tookuai} alt="" />
                    </div>
                    <div className="write_up">
                    <h4><a href="https://tookuai.com"> Tookuai admin portal</a> </h4>
                        <p>Tookuai is a Rider app for luxury cars, owned by a Dubai based company </p>
                        <ul>
                            <h4>Contribution</h4>
                            <li>I built the whole front end Interface</li>

                            <h4>Tools</h4>
                            <li>React.js</li>
                            <li>Redux</li>
                            {/* <li>paystack payment API</li> */}
                        </ul>
                    </div>
                </div>
                <div className="project">
                    <div style={{background:'black'}} className='img'>
                        <img src={Nftng} alt="" />
                    </div>
                    <div className="write_up">
                    <h4><a href="https://tookuai.com"> NFTng</a> </h4>
                        <p>NFTng is a platform for selling NFTs . </p>
                        <ul>
                            <h4>Contribution</h4>
                            <li>Implemented the web3 funcionalities</li>
                            <li>connection of wallet</li>

                            <h4>Tools</h4>
                            <li>web3.js</li>
                            {/* <li>Redux</li> */}
                            {/* <li>paystack payment API</li> */}
                        </ul>
                    </div>
                </div>
                <div className="project">
                    <div className='img'>
                        <img src={Nftytribe} alt="" />
                    </div>
                    <div className="write_up">
                        <h4><a href="https://nftytribe.io"> NFtytribe</a> </h4>
                        <p>NFTng is a platform for minting,buying, selling and staking NFTs . </p>
                        <ul>
                            <h4>Contribution</h4>
                            <li>implement UI design and functionalities</li>
                            <li>Impplement Web3 functionalities</li>

                            <h4>Tools</h4>
                            <li>React.js</li>
                            <li>web3.js</li>
                            <li>Redux</li>
                            {/* <li>paystack payment API</li> */}
                        </ul>
                    </div>
                </div> 
                <div className="project">
                    <div className='img'>
                        <img src={Ginyverse} alt="" />
                    </div>
                    <div className="write_up">
                        <h4><a href="https://app.ginyverse.com"> Ginyverse</a> </h4>
                        <p>A Peer to Peer Errand platform that allow users send errand to a specific location . </p>
                        <ul>
                            <h4>Contribution</h4>
                            <li>Founder</li>
                            <li>Implement UI design and functionalities</li>
                            <h4>Tools</h4>
                            <li>React.js</li>
                            <li>Google Maps</li>
                            <li>Redux</li>
                            <li>Paystack payment API</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Works;