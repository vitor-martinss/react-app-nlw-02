import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem() {
	return (
		
		<article className="teacher-item">
			<header>
				<img src="https://avatars2.githubusercontent.com/u/37670851?s=460&u=23a41cf27b38ee6a6efad71cc2440bde915e3d2a&v=4" alt="Avatar Vitor"/>
				<div>
					<strong>Vitor Martins</strong>
					<span>Geografia</span>

				</div>
			</header>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ullam consequatur culpa tempore consectetur? Non quibusdam omnis vero ad delectus eaque error, repudiandae, quia pariatur, maiores nesciunt neque laborum architecto.</p>
			<footer>
				<p>
					Preço/hora
					<strong>R$80,00</strong>
				</p>
				<button type='button'>
					<img src={whatsappIcon} alt="whatsapp"/> Entrar em contato
				</button>
			</footer>
		</article>

	)
}

export default TeacherItem
