import { Input, Button } from 'components'

export default function Arqueo () {
  const handleClic = () => {
    console.log('clic')
  }

  return (
    <>
      <section>
        <div>
          <Input
            name='caja'
            onChange={handleClic}
            placeholder='Total de caja'
            type='number'
          >
            Caja
          </Input>
          <Input type='number'>Pagos Realizados</Input>
          <Input type='number'>Total Del Dia</Input>
        </div>
        <Button>No hace nada este boton</Button>
      </section>
      <style jsx>
        {`
          section {
            width: 270px;
            margin: 0 auto;
          }
          div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          @media (max-width: 600px) {
            section {
              text-align: center;
            }
            div {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

Arqueo.auth = true