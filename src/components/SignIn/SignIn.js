import React from 'react'
import {Container, Icon, FormContent, Form,
FormH1, FormLabel, FormInput, FormButton, FormWrap} from "./SignInElements"

const SignIn = () => {
    return (
        <>
          <Container>
              <FormWrap>
                  <Icon to="/">ReactTech</Icon>
                  <FormContent>
                      <Form action="#">
                          <FormH1>Sign in to your account</FormH1>
                          <FormLabel htmlFor="for">Email</FormLabel>
                          <FormInput type="email" required/>
                          <FormLabel htmlFor="for">Password</FormLabel>
                          <FormInput type="password" required/>
                          <FormButton type="submit">Submit</FormButton>
                      </Form>
                  </FormContent>
              </FormWrap>
              </Container>  
        </>
    )
}

export default SignIn
