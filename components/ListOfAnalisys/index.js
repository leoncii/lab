import { Input } from 'components'

export const ListOfAnalisys = ({ list, onChange, title }) => {
  return (
    <>
      <div>
        <strong className='text-xl'> {title} </strong>
        {list.map(({ value, price, map, identifier }) => (
          <Input
            identifier={identifier}
            price={price}
            name={map}
            key={value}
            fullName={value}
            onChange={onChange}
            type='checkbox'
          >
            {value}
          </Input>
        ))}
      </div>
      <style jsx>
        {`
          div {
            width: 270px;
            display: inline-block;
            margin-bottom: 0.5rem;
          }
        `}
      </style>
    </>
  )
}
