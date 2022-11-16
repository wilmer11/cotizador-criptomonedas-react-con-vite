import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
    font-family: 'Lato', sans-serif;
    color: #fff;
    margin-top: 30px;
    display: flex;
    align-items: center;
    gap: 1rem;
`

const Texto = styled.p`
    font-size: 16px;
    margin: 0;
    line-height: 1.6;
`

const Valor = styled.span`
    color: #9497ff;
    font-size: 18px;
`

const Alto = styled.span`
    color: #03C03C;
    font-size: 18px;
`

const Bajo = styled.span`
    color: #f94a22;
    font-size: 18px;
`

const Imagen = styled.img`
    display: block;
    width: 100px;
`

const Resultado = ({resultado}) => {
  const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado
  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt='icono criptomoneda'/>
        <div>
            <Texto>El precio es de: <Valor>{PRICE}</Valor></Texto>
            <Texto>El precio más alto del día: <Alto>{HIGHDAY}</Alto></Texto>
            <Texto>El precio más bajo del día: <Bajo>{LOWDAY}</Bajo></Texto>
            <Texto>Variación últimas 24 horas: <Valor>{CHANGEPCT24HOUR}</Valor></Texto>
            <Texto>Última actualización: <Valor>{LASTUPDATE}</Valor></Texto>
        </div>
    </Contenedor>
  )
}

export default Resultado