import {Container,Form,Avatar} from "./styles"
import { FiArrowLeft, FiUser,FiMail,FiLock, FiCamera } from "react-icons/fi"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

export function Profile(){
  return(
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft/>
        </a>
      </header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/Giakomogcs.png" 
            alt="Foto do usuário" 
          />

          <label htmlFor="avatar">
            <FiCamera/>
            <input 
              id="avatar"
              type="file" 
            />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />      

        <Input
          placeholder="Senha atual"
          type="Password"
          icon={FiLock}
        /> 

        <Input
          placeholder="Nova senha"
          type="Password"
          icon={FiLock}
        /> 

        <Button title="Salvar"/>

      </Form>
    </Container>
  )
}