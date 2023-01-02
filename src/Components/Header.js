import PropTypes from 'prop-types'
import HeaderList from './HeaderList'
const Header = ({title}) => {
  return (
    <header>
        <h1>{title}</h1>
        <HeaderList  text='hello'/>
        <HeaderList text='hi'/>
        <HeaderList text='bye'/>
        
    </header>
  )
}
Header.defaultProps={
    title:'HI'
}
Header.propTypes={
    title:PropTypes.string,
}


export default Header
