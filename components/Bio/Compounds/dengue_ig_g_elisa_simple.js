import { Input } from '../Input'

export default function DengueIgGELISA ({ value, values, onChange, register }) {
  return (
    <>
      <section>
        <h2>Dengue - IgG (ELISA)</h2>
        <Input
          value={!values ? value : values}
          onChange={onChange}
          register={register}
          type='number'
          placeholder='Dengue - IgG (ELISA)....'
          name='dengue_ig_g_elisa_simple'
        />
      </section>
    </>
  )
}
