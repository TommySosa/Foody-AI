function Button(props) {

  const handleClick = () =>{
    props.onClick()
  }

  return (
    <>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  w-full" onClick={handleClick}>
          {props.text}
        </button>   
    </>
  )
}

export default Button