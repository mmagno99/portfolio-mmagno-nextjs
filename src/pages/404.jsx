import Image from 'next/image'
import styled from 'styled-components'

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-body);
  color: var(--color-title);
  font-family: var(--text-font-roboto);
  text-align: center;
  padding: 2rem;
  transition: var(--transition-theme);
`

const Title = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
`

const Subtitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: var(--color-subtitle);
  margin: 1rem 0 0.5rem 0;
`

const Description = styled.p`
  font-size: 1.2rem;
  color: var(--color-paragraph);
  max-width: 600px;
  margin: 0 auto 2rem auto;
`

const ImageWrapper = styled.div`
  max-width: 300px;
  width: 100%;
  margin-top: 2rem;
  filter: drop-shadow(0px 3px 15px var(--shadow-color));
`

export default function NotFoundPage() {
  return (
    <Wrapper>
      <Title>404</Title>
      <Subtitle>Página no encontrada</Subtitle>
      <Description>
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </Description>
      <ImageWrapper>
        <Image
          src="https://ik.imagekit.io/mmagnodev/abramzo.webp"
          alt="Abramzo"
          width={300}
          height={300}
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      </ImageWrapper>
    </Wrapper>
  )
}
