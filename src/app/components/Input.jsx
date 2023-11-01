function Input(props) {
  return (
    <>
      {
        props.onChange ? <input className="bg-gray-200 rounded-lg py-2 px-4 block w-full sm:w-full" type="text" value={props.value} name={props.name} placeholder={props.placeholder} onChange={props.onChange}/>
        : <input className="bg-gray-200 rounded-lg py-2 px-4 block w-full  sm:w-full" type="text" placeholder={props.placeholder} />
      }
    </>
  )
}

export default Input