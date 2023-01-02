
// const styles={
//   listStyle:'none',
//   color:'red',
//   display:'flex',
//   float:'left',
//   padding:'20px'
// }
const HeaderList = ({text}) => {
  return (
    <ul className="flex float-left ">
      {/* <li style={styles}>{text}</li> */}
      <li className="px-1">{text}</li>
    </ul>
  )
}

export default HeaderList