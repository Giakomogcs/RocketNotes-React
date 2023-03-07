import { Container, Profile ,Logout} from "./styles";
import {RiShutDownLine} from 'react-icons/ri'

export function Header(){
  return(
    <Container>
      <Profile>
        <img 
          src="https://github.com/Giakomogcs.png"
          alt="Foto do usuario"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Giovani Costa Silva</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
      
    </Container>
  )
}