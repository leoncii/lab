import { Select } from '../Select'

export default function ReaccionDeWidal ({
  onChange,
  value,
  values,
  register,
  pdf
}) {
  return (
    <>
      <h2>Reacción de Widal</h2>
      <section className='section'>
        <label>
          <span>Antigeno O:</span>
          <Select
            pdf={pdf}
            values={!values?.widal_o ? value : values.widal_o}
            name='reacci_n_widal.widal_o'
            register={register}
          />
        </label>

        <label>
          <span>Antigeno H:</span>
          <Select
            pdf={pdf}
            values={!values?.widal_h ? value : values.widal_h}
            name='reacci_n_widal.widal_h'
            register={register}
          />
        </label>

        <label>
          <span>Antigeno A:</span>
          <Select
            pdf={pdf}
            values={!values?.widal_a ? value : values.widal_a}
            name='reacci_n_widal.widal_a'
            register={register}
          />
        </label>

        <label>
          <span>Antigeno B:</span>
          <Select
            pdf={pdf}
            values={!values?.widal_b ? value : values.widal_b}
            name='reacci_n_widal.widal_b'
            register={register}
          />
        </label>
      </section>
      <style jsx>
        {`
          label {
            width: 320px;
            padding: 1rem 0;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}
