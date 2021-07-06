/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.div1}> 
        <img src="./home.jpg" alt="Foto minha" />
        <div>
        </div>
        <section>
        <button>Front-End Devloper</button>
        <h2>Trabalho no desenvolvimento de aplicações web <br/>
            performáticas e com foco na experiência de usuário</h2>
            <p>ReactJS | Javascript | Typescript | Git | Github | NextJS | Styled-Components</p>    
            </section>
      </div>
      <div className={styles.div2}>
      <a href="https://github.com/andreCaetano225" target="_blank"> <img src="./github.svg" alt="MeuGithub" /></a>
      <a href="https://www.linkedin.com/in/andre-sousa-8aaa8a170/" target="_blank"> <img src="./linkedin.svg" alt="Linkedin" /></a>
      <a href="https://api.whatsapp.com/send?phone=5588988665252&text=Ol%C3%A1%20Andr%C3%A9%20vamos%20conversar%20%3F" target="_blank"><img src="./whatsapp.svg" alt="Meuwpp" /></a>

      </div>
    </div>
  )
}
