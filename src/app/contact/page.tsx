import React from 'react'
import styles from './contact.module.css'

function Contact() {
  return (
    <div className={styles.ContactPageContainer}>
      <div>
      <h2>Fale conosco</h2>
      <div>
        <p>Para entrar em contato envie um email para:</p>
        <p><a href="mailto:thelmo.araujo@uece.br">thelmo.araujo@uece.br</a></p>
        <p>ou</p>
        <p><a href="mailto:gabriel.lins@aluno.uece.br">gabriel.lins@aluno.uece.br</a></p>
      </div>
      </div>
    </div>
  )
}

export default Contact