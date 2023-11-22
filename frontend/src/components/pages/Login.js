import { Container, Row, Col, Form,} from 'react-bootstrap';
import { useState, useContext } from "react";
import Input from '../form/input';
import contactImg from "../../assets/img/contact-img.svg";
import Footer from '../Footer';

//context
import { Context } from '../context/UserContext';
import { Link } from 'react-router-dom';


export const Login = () => {
    const [user, setUser] = useState({})
    const {login} = useContext(Context);

      function handleChange(e){

        setUser({...user, [e.target.name]: e.target.value});
        console.log(user)

      }

      function handleSubmit(e){
          e.preventDefault();
          login(user);
      }

      return (
        <>
        <section className='login'>
        <Container>
          <Row className="mt-5 mb-5">
            <Col xs={12} md={6}>
                <img className="img1" src={contactImg} alt="contact" />
            </Col>
            <Col xs={12} md={6}>
              <div className="login_form_container">
                <div className="login_form">
                  <h2 className="text-center">Login</h2>

                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Input className="input_text" text="E-mail" type="email" name="email" placeholder="Digite o seu email" handleOnChange={handleChange}></Input>

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSenha">

                    <Input className="input_text" text="Senha" type="password" name="password" placeholder="Digite a sua senha" handleOnChange={handleChange} ></Input>

                    </Form.Group>
                    
                  <div className="login_entrar">      

                  <input type="submit" value = "Entrar" className="text-decoration-none" id="login_button"/>
                  
                  </div>
                  </Form>
                  
                  <div className="rodape1 mt-3">
                    <a href="#" className=" text-decoration-none">
                      Esqueceu a Senha?
                    </a>
                    <a href="../inscricao" className="text-decoration-none">
                      Inscreva-se
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        </section>
       <Footer />
        </>
   
    );
  }

export default Login;