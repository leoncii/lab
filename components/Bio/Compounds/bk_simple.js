// bk_simple
import { Input } from '../Input'

export default function BKSimple ({
  values,
  onChange,
  value,
  register,
  required,
  pdf
}) {
  return (
    <>
      <h2>BK Simple</h2>
      <h3>Identificación del Germen</h3>
      <section className='section'>
        <Input
          pdf={pdf}
          value={
            !values?.muestra_identificacion_germen_simple
              ? value
              : values.muestra_identificacion_germen_simple
          }
          register={register}
          onChange={onChange}
          name='bk_simple.muestra_identificacion_germen_simple'
          type='text'
          placeholder='Muestra...'
        >
          Muestra
        </Input>
        <Input
          pdf={pdf}
          value={
            !values?.germen_identificado_simple
              ? value
              : values.germen_identificado_simple
          }
          register={register}
          onChange={onChange}
          name='bk_simple.germen_identificado_simple'
          type='text'
          placeholder='Germen Identificado...'
        >
          Germen Identificado
        </Input>
        <Input
          pdf={pdf}
          value={
            !values?.recuento_de_colonias_simple
              ? value
              : values.recuento_de_colonias_simple
          }
          register={register}
          onChange={onChange}
          name='bk_simple.recuento_de_colonias_simple'
          type='text'
          measure='UFC/mL'
          placeholder='Recuento de colonias...'
        >
          Recuento de colonias
        </Input>
      </section>
    </>
  )
}
