import { DownloadSimple } from 'phosphor-react'

import style from './footer.module.scss'

export default function Footer () {
    return (
        <footer className={style.footer} id="Contact">
            <h2>Contato</h2>
            <ul>
                <li title='Github'><a href="https://github.com/WillianIgorDeveloper" target="__blank"><img src="/social-icon/github.svg" alt="Github" /></a></li>
                <li title='LinkedIn'><a href="https://www.linkedin.com/in/willian-igor-santos/" target="__blank"><img src="/social-icon/linkedin.svg" alt="LinkedIn" /></a></li>
                <li title='Gmail'><a href="mailto:willianigordeveloper@gmail.com" target="__blank"><img src="/social-icon/gmail.svg" alt="Gmail" /></a></li>
                <li title='WhatsApp'><a href="https://api.whatsapp.com/send?phone=+5579998667534" target="__blank"><img src="/social-icon/whatsapp.svg" alt="WhatsApp" /></a></li>
            </ul>
            <a href="https://cdn.discordapp.com/attachments/892816555069538375/1033472731766865960/Curriculo.pdf">
                <button><DownloadSimple />Download <abbr title="Curriculum vitae">CV</abbr></button>
            </a>
            <address>&copy; Willian Igor Santos</address>
        </footer>
    )
}