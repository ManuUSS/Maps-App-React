import { MapView, MyLocation, ReactLogo, SearchBar } from '../components';


export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <MyLocation />
      <ReactLogo />
      <SearchBar />
    </div>
  )
}
