import { Input } from '../Input'
import { Remarks } from '../Remarks'
import { antibiograma } from 'const/antibiograma'
import { IdentificacionDelGermen } from '../Identificacion'
import { GramZielhlTinciones } from '../Gram_zielhl_tinciones'

export default function CultivoDeEsputo ({
  onChange,
  register,
  value,
  pdf,
  values
}) {
  const antibio = values?.antibiograma ?? false
  return (
    <>
      <h2>Cultivo de Esputo</h2>
      <h3>Identificación del Germen</h3>
      <section className='section'>
        <GramZielhlTinciones
          pdf={pdf}
          register={register}
          value={value}
          values={values?.gram_zielhl_tinciones}
          onChange={onChange}
          name='cultivo_de_esputo.gram_zielhl_tinciones'
        />

        <IdentificacionDelGermen
          register={register}
          pdf={pdf}
          value={value}
          values={
            !values?.identificacion_del_germen
              ? value
              : values.identificacion_del_germen
          }
          onChange={onChange}
          name='cultivo_de_esputo.identificacion_del_germen'
        />

        <IdentificacionDelGermen
          register={register}
          value={value}
          pdf={pdf}
          values={
            !values?.identificacion_del_germen_2
              ? value
              : values.identificacion_del_germen_2
          }
          onChange={onChange}
          name='cultivo_de_esputo.identificacion_del_germen_2'
        />
      </section>

      <Remarks
        pdf={pdf}
        value={!values?.remarks ? value : values.remarks}
        name='cultivo_de_esputo.remarks'
        register={register}
      />

      <h3>Antibiograma</h3>
      <section className='section'>
        {antibiograma.map(({ name, type, placeholder, map }) => {
          return (
            <Input
              pdf={pdf}
              key={map}
              value={!antibio ? value : antibio[map]}
              register={register}
              onChange={onChange}
              name={`cultivo_de_esputo.antibiograma.${map}`}
              placeholder={placeholder}
              type={type}
            >
              {name}
            </Input>
          )
        })}
      </section>
      <Remarks
        pdf={pdf}
        value={!values?.remarks2 ? value : values.remarks2}
        name='cultivo_de_esputo.remarks2'
        register={register}
      />
    </>
  )
}
