// bk_seriado
import { Input } from '../Input'
import { Remarks } from '../Remarks'

export default function BKSeriado ({
  onChange,
  value,
  register,
  required,
  pdf,
  values
}) {
  return (
    <>
      <h2>BK Seriado</h2>

      <h3>1° Muestra Identificación del Germen</h3>
      <section className='section'>
        <Input
          pdf={pdf}
          value={
            !values?.muestra_identificacion_germen_1
              ? value
              : values.muestra_identificacion_germen_1
          }
          register={register}
          onChange={onChange}
          name='bk_seriado.muestra_identificacion_germen_1'
          type='text'
          placeholder='Muestra...'
        >
          Muestra
        </Input>
        <Input
          pdf={pdf}
          value={
            !values?.germen_identificado_1
              ? value
              : values.germen_identificado_1
          }
          register={register}
          onChange={onChange}
          name='bk_seriado.germen_identificado_1'
          type='text'
          placeholder='Germen Identificado...'
        >
          Germen Identificado
        </Input>
      </section>
      <Remarks
        pdf={pdf}
        value={!values?.remarks1 ? value : values.remarks1}
        name='bk_seriado.remarks1'
        register={register}
      />
      <h3>2° Muestra Identificación del Germen</h3>
      <section className='section'>
        <Input
          pdf={pdf}
          value={
            !values?.muestra_identificacion_germen_2
              ? value
              : values.muestra_identificacion_germen_2
          }
          register={register}
          onChange={onChange}
          name='bk_seriado.muestra_identificacion_germen_2'
          type='text'
          placeholder='Muestra...'
        >
          Muestra
        </Input>
        <Input
          pdf={pdf}
          value={
            !values?.germen_identificado_2
              ? value
              : values.germen_identificado_2
          }
          register={register}
          onChange={onChange}
          name='bk_seriado.germen_identificado_2'
          type='text'
          placeholder='Germen Identificado...'
        >
          Germen Identificado
        </Input>
      </section>
      <Remarks
        pdf={pdf}
        value={!values?.remarks2 ? value : values.remarks2}
        name='bk_seriado.remarks2'
        register={register}
      />
      <h3>3° Muestra Identificación del Germen</h3>
      <section className='section'>
        <Input
          pdf={pdf}
          value={
            !values?.muestra_identificacion_germen_3
              ? value
              : values.muestra_identificacion_germen_3
          }
          register={register}
          onChange={onChange}
          name='bk_seriado.muestra_identificacion_germen_3'
          type='text'
          placeholder='Muestra...'
        >
          Muestra
        </Input>
        <Input
          pdf={pdf}
          value={
            !values?.germen_identificado_3
              ? value
              : values.germen_identificado_3
          }
          register={register}
          onChange={onChange}
          name='bk_seriado.germen_identificado_3'
          type='text'
          placeholder='Germen Identificado...'
        >
          Germen Identificado
        </Input>
      </section>
      <Remarks
        pdf={pdf}
        value={!values?.remarks3 ? value : values.remarks3}
        name='bk_seriado.remarks3'
        register={register}
      />
    </>
  )
}
