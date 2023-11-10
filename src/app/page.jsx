import React from 'react'
import Image from 'next/image'
import { AiOutlineArrowRight } from 'react-icons/ai';

import '../styles/page.css'

function page() {

  return (
    <main>
      <section className='hero'>
        <div className="content hero-container">
          <div className='hero-content'>
            <Image className='psn-abs' src='/images/hero_vector.png' width={30} height={287} />
            <h2>¿Buscas un trabajo que verdaderamente cumpla con tus expectativas y donde puedes empezar a trabajar en días y no semanas?</h2>
            <p>En <span className='font-bold'>Inyob</span>, nuestro equipo y nuestra tecnología te ayudan a realizar tus aspiraciones y te abren puertas que ni siquiera sabías que estaban ahí.</p>
            <p>En <span className='font-bold'>Inyob</span>, no sólo encontramos el trabajo adecuado para ti, <span className='font-bold'>te preparamos para brillar en él.</span></p>
            <p className='font-bold'>¡Descubre más y transforma tu trayectoria con nosotros!</p>
            <a className='btn' href="">¡Mejora tu vida con un click! <AiOutlineArrowRight /></a>
          </div>
          <div className="bg-vector">
            <Image className='psn-abs-left' src='/images/vector-left.png' width={222} height={200} objectFit='cover' />
            <Image className='hero-image' src='/images/hero-image.png' width={440} height={415} objectFit='contain' />
            <Image className='psn-abs-right' src='/images/vector-right.png' width={200} height={220} />
          </div>
        </div>
      </section>

      <section className='find '>
        <div className="content find-container">
          <Image src='/images/profile_mob.png' width={365} height={400} />
          <div className='find-content'>
            <h1>¡Encuentra tu nuevo trabajo por <span className='font-bold'>whatsapp</span>!</h1>
            <ul>
              <li>✅ 100% confiable</li>
              <li>✅ Asistencia personalizada</li>
              <li>✅ Super fácil y rápido</li>
            </ul>
          </div>
        </div>
      </section>

      <section className='how-works'>
        <div className="content">
          <h2>¿Cómo funciona?</h2>
          <p>¡Con <span className="font-bold">Inyob</span> el proceso es múy fácil!</p>

          <div className='how-works-carousel mobile'>
            <div className='slider-how-works'>
              <div className='slide-how-works'>
                <Image src='/images/profile_mob.png' width={110} height={150} />
                <p>1. Inicia una conversación con Valeria, tu asistente personal de Inyob. Ella te ayudará a crear un perfil personalizado para encontrar el trabajo perfecto para ti.</p>
              </div>
              <div className='slide-how-works'>
                <Image src='/images/profile_mob.png' width={110} height={150} />
                <p>1. Inicia una conversación con Valeria, tu asistente personal de Inyob. Ella te ayudará a crear un perfil personalizado para encontrar el trabajo perfecto para ti.</p>
              </div>
              <div className='slide-how-works'>
                <Image src='/images/profile_mob.png' width={110} height={150} />
                <p>1. Inicia una conversación con Valeria, tu asistente personal de Inyob. Ella te ayudará a crear un perfil personalizado para encontrar el trabajo perfecto para ti.</p>
              </div>
              <div className='slide-how-works'>
                <Image src='/images/profile_mob.png' width={110} height={150} />
                <p>1. Inicia una conversación con Valeria, tu asistente personal de Inyob. Ella te ayudará a crear un perfil personalizado para encontrar el trabajo perfecto para ti.</p>
              </div>
              <div className='slide-how-works'>
                <Image src='/images/profile_mob.png' width={110} height={150} />
                <p>1. Inicia una conversación con Valeria, tu asistente personal de Inyob. Ella te ayudará a crear un perfil personalizado para encontrar el trabajo perfecto para ti.</p>
              </div>
              <div className='slide-how-works'>
                <Image src='/images/profile_mob.png' width={110} height={150} />
                <p>1. Inicia una conversación con Valeria, tu asistente personal de Inyob. Ella te ayudará a crear un perfil personalizado para encontrar el trabajo perfecto para ti.</p>
              </div>
            </div>
            <div className="slider-dots-how-works"></div>
          </div>
          <div className='desktop'>
            <div className='grid-how-works'>
              <div className='slide-how-works margin-1'>
                <Image src='/images/profile_mob.png' width={110} height={150} />
                <p>1. Inicia una conversación con Valeria, tu asistente personal de Inyob. Ella te ayudará a crear un perfil personalizado para encontrar el trabajo perfecto para ti.</p>
              </div>
              <div className='slide-how-works margin-1'>
                <Image src='/images/profile_mob.png' width={110} height={150} />
                <p>1. Inicia una conversación con Valeria, tu asistente personal de Inyob. Ella te ayudará a crear un perfil personalizado para encontrar el trabajo perfecto para ti.</p>
              </div>
              <div className='slide-how-works margin-1'>
                <Image src='/images/profile_mob.png' width={110} height={150} />
                <p>1. Inicia una conversación con Valeria, tu asistente personal de Inyob. Ella te ayudará a crear un perfil personalizado para encontrar el trabajo perfecto para ti.</p>
              </div>
              <div className='slide-how-works margin-1'>
                <Image src='/images/profile_mob.png' width={110} height={150} />
                <p>1. Inicia una conversación con Valeria, tu asistente personal de Inyob. Ella te ayudará a crear un perfil personalizado para encontrar el trabajo perfecto para ti.</p>
              </div>
              <div className='slide-how-works margin-1'>
                <Image src='/images/profile_mob.png' width={110} height={150} />
                <p>1. Inicia una conversación con Valeria, tu asistente personal de Inyob. Ella te ayudará a crear un perfil personalizado para encontrar el trabajo perfecto para ti.</p>
              </div>
              <div className='slide-how-works margin-1'>
                <Image src='/images/profile_mob.png' width={110} height={150} />
                <p>1. Inicia una conversación con Valeria, tu asistente personal de Inyob. Ella te ayudará a crear un perfil personalizado para encontrar el trabajo perfecto para ti.</p>
              </div>
            </div>
          </div>

          <div className='how-works-btn'>
            <a className='btn' href="">¡Comienza aquí!<AiOutlineArrowRight /></a>
          </div>
          <div className='how-works-content'>
            <h3><span className='green-text'>Tu nuevo trabajo en cuestión de días</span> y no en semanas o meses de esfuerzo</h3>
            <p>En <span className="font-bold">Inyob</span> tu desarrollo profesional se convierte en nuestra prioridad. En el mundo laboral actual, la capacitación y la red de contactos son esenciales para destacar y progresar.</p>
            <p>En <span className="font-bold">Inyob</span> eres parte de una comunidad que valora y celebra tus logros.</p>
          </div>
        </div>
      </section>

      <section className="why-join">
        <div className='content'>
          <h2>¿Por qué unirte a <span className='green-text'>nuestra red?</span></h2>
          <Image src='/images/why1.png' width={350} height={135} />

          <div className='align-left'>
            <h4 className='green-text'>Educación Continua</h4>
            <p>El mundo laboral está en constante cambio, y adaptarse es clave. Te ofrecemos acceso a materiales de capacitación y cursos en línea GRATIS, que te ayudaran a siempre estar un paso adelante.</p>
          </div>
          <div className='align-right'>
            <h4 className='green-text'>Comunidad de Apoyo</h4>
            <p>Sabemos que compartir experiencias, tanto buenas como malas, es fundamental. En <span className="font-bold">Inyob</span>, podrás conocer opiniones sobre diferentes empleadores, lo que te permitirá tomar decisiones informadas.</p>
          </div>
          <Image src='/images/why2.png' width={350} height={135} />
          <div className='align-left'>
            <h4 className='green-text'>Conexiones Valiosas</h4>
            <p>Una red de contactos sólida puede marcar la diferencia en tu carrera. Aquí, podrás conectar con colegas y profesionales de tu sector, ampliando tu red de contactos.</p>
          </div>
          <a className='btn' href="">¡Mejora tu vida con un click! <AiOutlineArrowRight /></a>
        </div>
      </section>

      <section className='inv-pos'>
        <div className="content">
          <h3>Te invitamos a <span className='green-text'>unirte a nuestra comunidad, a crecer, a aprender y a transformar</span> no solo tu carrera, sino también la de aquellos a tu alrededor.</h3>
          <p>En <span className="font-bold">Inyob</span> atendemos a varias industrias y cubrimos miles de vacantes te presentamos una selección de búsquedas más populares:</p>

          <div className='proximamente'>poner vacantes aquí</div>

          <p>En <span className="font-bold">Inyob</span> nos basamos en tu experiencia y preferencias, te mostramos oportunidades laborales perfectamente alineadas con lo que buscas.</p>
          <p>Gracias a la <span className="font-bold">Inteligencia Artificial y nuestra tecnología de vanguardia</span>, te ayudamos a encontrar tu próximo trabajo más rápidamente que en cualquier otra plataforma.</p>

          <h3>En inyob, no sólo te conectamos con las mejores opciones: <span className='green-text'>nos aseguramos de que tus expectativas se cumplan al 100%.</span></h3>
        </div>
      </section>

      <section className='section-bg-green'>
        <div className='content'>
          <h2>¡Empresas líderes confían en <span className="font-bold white-text">Inyob</span>!</h2>
        </div>

        <div className='proximamente'>poner logos de empresas aquí</div>

        <div className='content'>
          <p>En <span className="font-bold">Inyob</span>, nos tomamos en serio tu búsqueda de empleo y trabajamos con las empresas líderes, representativas de cada ciudad e industria. </p>
          <p>Las empresas que trabajan con nosotros nos garantizan lo siguiente para ti:</p>
          <div className='proximamente'>poner garantias de empresas aquí</div>

          <h3>Descubre las oportunidades que estas empresas líderes tienen para ti. Porque en inyob, sabemos que mereces lo mejor.</h3>
          <p>Actualmente ofrecemos nuestro servicio en la ciudad de <span className="font-bold">León, Guanajuato</span> y sus alrededores. Pronto nos encontraras en las principales ciudades de México.</p>
        </div>
      </section>
      <section className='reviews'>
        <div className="content">
          <h2>Lo que dice <span className='green-text'>nuestra comunidad</span> sobre nosotros:</h2>
          <p>Actualmente ofrecemos nuestro servicio en la ciudad de <span className="font-bold">León, Guanajuato</span> y sus alrededores. Pronto nos encontraras en las principales ciudades de México.</p>

          <div className='proximamente'>poner reviews aquí</div>

        </div>
      </section>
    </main >
  )
}

export default page