import { Span } from 'components/Span'
import { isEmpty } from 'utils/isEmpty'

// chagas_hai
export default function ChagasHai ({ register, values, pdf }) {
  // const empty = !value ?? isEmpty(value)
  console.log('values', values)
  return (
    <section>
      <h3>Chagas HAI</h3>
      {values?.length > 1
        ? (
          <Span>{values}</Span>
          )
        : (
          <select {...register('chagas_hai', { required: true })}>
            <option value='Negativo'>Negativo</option>
            <option value='Positivo 1/8'>Positivo 1/8</option>
            <option value='Positivo 1/16'>Positivo 1/16</option>
            <option value='Positivo 1/32'>Positivo 1/32</option>
            <option value='Positivo 1/64'>Positivo 1/64</option>
            <option value='Positivo 1/128'>Positivo 1/128</option>
            <option value='Positivo 1/256'>Positivo 1/256</option>
          </select>
          )}
    </section>
  )
}
