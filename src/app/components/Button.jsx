function Button(props) {

  const handleClick = () =>{
    props.onClick()
  }

  return (
    <>
    {
      props.onClick ? <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-full" onClick={handleClick}>
      {props.text}
    </button> : <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-full">
      {props.text}
    </button>
    }
          
    </>
  )
}

export default Button