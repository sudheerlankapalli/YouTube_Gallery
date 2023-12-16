import React, { useState } from 'react';
import './App.css';

const videosData = [
  {
    id: 1,
    title: 'JavaScript Full Course (2023) - Beginner to Pro - Part 1',
    thumbnail: 'https://i.ytimg.com/vi/SBmSRK3feww/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCgY4OItI9kCLUbhvti7t3jBE92Mw',
    likes: 1200,
    views: 10000,
    channel: 'SuperSimpleDev',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKaEovkjwOFQ3HMD8S5KFvjayVFtNBn2ofFrA9Xw=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 2,
    title: 'Struggle Hard in your Job at your 20 age & Stay Risk Free at 30age|| Frontlines Media, FLM',
    thumbnail: 'https://i.ytimg.com/vi/CcZGFpD00hY/mqdefault.jpg',
    likes: 500,
    views: 12000,
    channel: 'FrontLinesMedia',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZWjGA6tz053K63lB5BDJUVEnaSQYp0uhNC4aA=s900-c-k-c0x00ffffff-no-rj',

  },
  {
    id: 3,
    title: 'Off Campus JOB Opportunity 2023 (Geek Olympics) | DSA Free Course | GeeksforGeeks',
    thumbnail: 'https://i.ytimg.com/vi/QavJUSiHFvg/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBuGCSDAQHXiPCF9gww1JkyUTsOaA',
    likes: 10,
    views: 500,
    channel: 'Anshika Gupta',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKa3yoeLWJXX30BOAgr75umgoreAWWB3A91YoMd6PDE=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 4,
    title: 'Introduction to JavaScript + Setup | JavaScript Tutorial in Hindi #1',
    thumbnail: 'https://cwh-full-next-space.fra1.cdn.digitaloceanspaces.com/videoseries/ultimate-js-tutorial-hindi-1/JS-Thumb.jpg',
    likes: 10,
    views: 15000,
    channel: 'CodeWithHarry',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 5,
    title: '10-Hour React Tutorial 2023 - Zero to Advanced | Learn React JS in Hindi',
    thumbnail: 'https://i.ytimg.com/vi/6l8RWV8D-Yo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBJo44aFPfL6lqBLF99a_1j2q5XFg',
    likes: 200,
    views: 15000,
    channel: 'Coder Dost',
    channelLogo: 'https://yt3.googleusercontent.com/m-FbG7zwy9uuelkhgj4BqkpSGuL29FCDaibjs6P5KmmACUgm5N4iAk2SbJNuHK7dBqUEvSEf=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 6,
    title: 'TypeScript Tutorial for Beginners [2022] Programming with Mosh via YouTube Help',
    thumbnail: 'https://ccweb.imgix.net/https%3A%2F%2Fimg.youtube.com%2Fvi%2Fd56mG7DezGs%2Fhqdefault.jpg?ar=16%3A9&auto=format&cs=strip&fit=crop&h=380&ixlib=php-4.1.0&w=535&s=660712f4db435db86f8c23c76c854e2f',
    likes: 100,
    views: 1000,
    channel: 'Programming with Mosh',
    channelLogo: 'https://yt3.googleusercontent.com/ebu9ZksIXw0tUWBZd6rtk-It8VGSk8AdfSI_eGR-fl6WGet9LnVPngNQCmjdLJeGXpuylwYInQ=s176-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 7,
    title: 'Complete Java for Beginners|2023 by Naveen Reddy',
    thumbnail: 'https://learnyst-user-assets.s3.ap-south-1.amazonaws.com/school-assets/schools/11771/courses/153707/1681911328656Orange%20Bold%20Business%20Steps%20YouTube%20Thumbnail.png',
    likes: 7000,
    views: 60000,
    channel: 'Telusko',
    channelLogo: 'https://yt3.googleusercontent.com/o4MZVi2qdNgx0K7vpEl7DT2PefjROdisZTD7is6TMimF1_DTM49O1ld3iQzTpE5MCj86c-vzav8=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 8,
    title: 'Prasad Tech in Telugu| TECH-News 1205',
    thumbnail: 'https://i.ytimg.com/vi/-2lt-s6yMzw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA1_JB_9nRM9bHIj2YVc_poN4jk2g',
    likes: 5000,
    views: 20000,
    channel: 'Prasad Tech in Telugu',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZ8T1bls5xMCUG0I5rhBC3e-QuIbc7Lh8y4CwtoEg=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 9,
    title: 'I opened a fire petrol bunk-Youtube',
    thumbnail: 'https://i.ytimg.com/vi/0M1mowZ0JpE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCoOnbQI_QjuXtQd0x2w165CtLoYA',
    likes: 10000,
    views: 100000,
    channel: 'Harsha sai',
    channelLogo: 'https://yt3.googleusercontent.com/OAbmQ0zVhm4BbBGjQNj02_TY2SDONvjc-Qv1trs2VZUUkjFAwU-hwHj2eBoJvjuppKFa5zLt=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 10,
    title: 'Naa Anveshana two years  of world tour journey',
    thumbnail: 'https://i.ytimg.com/vi/YJJXVk34H3Q/maxresdefault.jpg',
    likes: 5900,
    views: 200000,
    channel: 'Naa Anveshana',
    channelLogo: 'https://yt3.googleusercontent.com/DLer1VC9KzQIOiTYFPrNXSndwrgXHplj6e4r0_JNkPcTaB0PfRwDQTPGWhhXoA12JiSGi991rCU=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 11,
    title: 'Hyderabad To Russia Journey | Uma Telugu Traveller',
    thumbnail: 'https://i.ytimg.com/vi/DcBYUjSpIVw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCm4lKW-dZ2U4uXsAXS3KssafWSJg',
    likes: 2000,
    views: 40000,
    channel: 'Uma telugutraveler',
    channelLogo: 'https://yt3.googleusercontent.com/yXt-O0ZmaR2_TNOYL92ROaArPDNjlZN9CS12e9Vooi__c3h6jRIcrxy43XhuexGmuy_SuZFzQAc=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 12,
    title: 'Local Boi Nani Home Tour | Mom & Dad Intro | Nani life style | Telugu vlogs | Vizag vlogs',
    thumbnail: 'https://i.ytimg.com/vi/P8mG6Epp4Sk/maxresdefault.jpg',
    likes: 7000,
    views: 40000,
    channel: 'Local boy nani',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKbaH94Y7vBbC324CxbgdGLfcHnVl9Y_kZeN37KR0A=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 13,
    title: 'Vismai Food|Diwali Special thalli|Youtube ',
    thumbnail: 'https://i.ytimg.com/vi/-OOjy4PdswM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCof595A5kwalnYd5z7LI_tvlzhyQ',
    likes: 600,
    views: 70000,
    channel: 'Vismai foods',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKazqCkbMGTbwvT_naltaO_G4ghRSQ-p3oT19Jfx=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 14,
    title: 'Veg Food in Hyderabad|Haldirams in Hyderabad|VEG Thali|chole Bhature|Pav Bhaji|',
    thumbnail: 'https://i.ytimg.com/vi/x6xmtISwsps/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBw99YXCyx0ryEWzCCpcjMkO_ifSQ',
    likes: 4900,
    views: 62000,
    channel: 'Street Byte',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKbl2p0ak1rtKEdcNJ6KRmq9pZk9j8oM5I7W-X7C=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 15,
    title: 'యూట్యూబర్ పెండ్లి చూపులు | My Village Show comedy',
    thumbnail: 'https://i.ytimg.com/vi/bn0emD2mWzk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBySxbViYaSu2jwf3e_1y8MD28UfQ',
    likes: 1100,
    views: 12000,
    channel: 'My village show',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKZuMwj3KHh4pC22KoLK1QLOwymOe_i1Qo6MxamTFw=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 16,
    title: 'Salaar Telugu Trailer | Prabhas | Prashanth Neel | Prithviraj|Shruthi|Hombale Films|Vijay Kiragandur',
    thumbnail: 'https://i.ytimg.com/vi/4GPvYMKtrtI/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAHAvOcuILPZ09eSopzcuiQ1xNd0g',
    likes: 20000,
    views: 1000000,
    channel: 'Hombale Films',
    channelLogo: 'https://yt3.googleusercontent.com/ytc/APkrFKYSj1OfdqWSO4X4zCxWYvnVstqnJy-YKSwQ3XxzzA=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 17,
    title: 'Dum Masala Lyrical Song | Guntur Kaaram Songs | Mahesh Babu | Trivikram | Thaman S |S. Radha Krishna',
    thumbnail: 'https://i.ytimg.com/vi/5cwHwcSs9Iw/maxresdefault.jpg',
    likes: 30000,
    views: 2300000,
    channel: 'Aditya Music India',
    channelLogo: 'https://yt3.googleusercontent.com/FA98Wt-W9Dnxd7YFMvUqjMI5SWGN5Ex4K2nm8pCyljcCY6bLTVZ-RiUo23CUTTUoBAiK9dlrIA=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 18,
    title: 'Harkirat talking about Remote work | Software Engineer Working Remotely 🔥 Harkirat Singh 🚀',
    thumbnail: 'https://i.ytimg.com/vi/n1Hbzq5hgHA/maxresdefault.jpg',
    likes: 6000,
    views: 300000,
    channel: 'Harkirat Singh',
    channelLogo: 'https://yt3.googleusercontent.com/MeY_fGNrjVLV0PVOBN7dRWzMBS0y41YGm55LOaJ02cXV82a7Np9pYxxhHFqdYdncEy1I2cYR=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 19,
    title: 'Kalaavathi - Video Song | Sarkaru Vaari Paata | Mahesh Babu | Keerthy Suresh | Thaman S | Parasuram',
    thumbnail: 'https://i.ytimg.com/vi/SfDA33y38GE/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDG3TiacMy0BrneYSlUExEV3xU0Mg',
    likes: 3000,
    views: 230000,
    channel: 'Saregama Telugu',
    channelLogo: 'https://yt3.googleusercontent.com/ZnBmMi35bqmVJODSRzSwo3_j3WVaBd3DhRJHrKTS4yMX4jds1gXOsH0JpjBtr4HzfNClZcnjWw=s900-c-k-c0x00ffffff-no-rj',
  },
  {
    id: 20,
    title: 'Pure Veg Lunch with Heroine Laya || Tastyteja || Ugadi Special food || Naatu Restaurant || Infinitum',
    thumbnail: 'https://i.ytimg.com/vi/fh9XhogLxP0/mqdefault.jpg',
    likes: 2300,
    views: 400000,
    channel: 'Tasty Teja',
    channelLogo: 'https://yt3.googleusercontent.com/VjJocRKXh4kXlNP4TcoxiocW3LfgZTouh_E8pQlhdg1jCeTxC8g7GUb9qSgjKspxCLZsFf9DOp8=s900-c-k-c0x00ffffff-no-rj',
  },
];

const Video = ({ video }) => (
  <div className="video">
    <img src={video.thumbnail} alt={video.title} />
    <div className="video-info">
      <h3>{video.title}</h3>
      <p>{video.views} views • {video.likes} likes</p>
      <div className="channel">
        <img src={video.channelLogo} alt={video.channel} />
        <p>{video.channel}</p>
      </div>
    </div>
  </div>
);

const NavBar = () => (
  <div className="navbar">
    <div className="navbar-content">
      <img className="logo" src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" alt="Logo" />
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="searchbar"
          // onChange={(e) => onSearch(e.target.value)}
        />
        <button type="submit" className="search-button">
          <img src="https://p1.hiclipart.com/preview/88/220/54/box-search-box-address-bar-user-interface-window-web-browser-circle-line-png-clipart.jpg"className="search-icon" alt="Search" />
        </button>
      </div>
  </div>
);

const App = () => {
  const [videos, setVideos] = useState(videosData);

  return (
    <div className="App">
      <NavBar />
      <div className="video-gallery">
        {videos.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default App;
