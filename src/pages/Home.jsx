import Navbar from '../components/Navbar';
import "../styles/home.css"
import eye from "/Images/eye.png"

function Home() {

  return (
    <>
      <Navbar />
      <div className='home'>
        <div className='main'>
          <p className='home-title'>Sanat Galerisi</p>
          <p className='sub-title'>Rengin dansıyla duyguların ritim bulduğu, tuvalin üzerindeki sessiz fısıltıların büyülü serüvenine hoş geldiniz.</p>
          <hr style={{
            background: '#c77913',
            color: '#c77913',
            borderColor: '#c77913',
            width: '80px',
            position: 'relative',
            marginLeft: '8px'
          }} />
          <p className='paragraph'>Kendi yaratıcı vizyonumu, emek ve tutkunun birleştiği her bir eseriyle bu platformda hayata geçirerek,
            sanatseverlerle buluşturuyor; her bir fırça darbesiyle duyguların ve düşüncelerin dans ettiği bu dijital
            sergi alanında kendi benzersiz izimi bırakma ayrıcalığını yaşıyorum.
          </p>
          <a
            className='kesfet' href="/Art">Keşfet
            <span className="material-symbols-outlined">
              arrow_right_alt
            </span>
          </a>
        </div>
        <img className='eye' src={eye} />

      </div>
    </>
  )
}

export default Home