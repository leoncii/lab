import { IdentificacionDelGermen } from '../Identificacion'
import { Remarks } from '../Remarks'

export default function Reticulocitos ({ onChange, value, values, register }) {
  return (
    <>
      <h2>Tincion de Zhiel Neelsen</h2>

      <h3>Identificación del Germen</h3>
      <section className='section'>
        <IdentificacionDelGermen
          muestra
          register={register}
          values={!values?.identificacion ? value : values.identificacion}
          onChange={onChange}
          name='tinci_n_de_zhiel_neelsen.identificacion'
        />
      </section>

      <Remarks
        value={!values?.remarks ? value : values.remarks}
        name='tinci_n_de_zhiel_neelsen.remarks'
        register={register}
      />
    </>
  )
}
