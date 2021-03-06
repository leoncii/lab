// calprotectina
import { Input } from '../Input'

export default function Calprotectina ({
  onChange,
  value,
  register,
  pdf,
  required,
  values
}) {
  return (
    <>
      <section>
        <h2>CALPROTECTINA Fecal</h2>
        <Input
          pdf={pdf}
          value={!values ? value : values}
          register={register}
          onChange={onChange}
          measure='mg/Kg'
          name='calprotectina'
          type='text'
          placeholder='Calprotectina Fecal...'
        />
      </section>
    </>
  )
}
