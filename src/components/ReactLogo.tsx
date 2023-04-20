import img from '../logo.svg';

export const ReactLogo = () => {
  return (
    <img 
        src={ img } 
        alt="React-logo" 
        style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        width={ 110 }
    />
  )
}
